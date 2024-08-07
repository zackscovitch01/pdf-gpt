"use server";

import { Message } from "@/components/Chat";
import { adminDb } from "@/firebaseAdmin";
import { generateLangchainCompletion } from "@/lib/langchain";
import { auth } from "@clerk/nextjs/server";
// import {generateLangchainCompletion} from '@/lib/langchain'

const PRO_LIMIT = 100;
const FREE_LIMIT = 10;

export async function askQuestion(id: string, question: string) {
  auth().protect();
  const { userId } = await auth();

  const chatRef = adminDb
    .collection("users")
    .doc(userId!)
    .collection("files")
    .doc(id)
    .collection("chat");

  // check how many user messages are there
  const chatSnapshot = await chatRef.get();
  const userMessages = chatSnapshot.docs.filter(
    (doc) => doc.data().role === "human"
  );

  // check membership limit for nessages in a document
  const userRef = await adminDb.collection("users").doc(userId!).get();

  // check if user is on FREE plan and asked more than 10 questions
  if (!userRef.data()?.hasActiveMembership) {
    if (userMessages.length >= FREE_LIMIT) {
      return {
        message: `You'll need to upgrade to ask more than ${FREE_LIMIT} questions! 😢`,
        success: false,
      };
    }
  }
  // check if user is on PRO plan and asked more than 100 questions
  if (!userRef.data()?.hasActiveMembership) {
    if (userMessages.length >= PRO_LIMIT) {
      return {
        message: `You have reached the PRO limit of ${PRO_LIMIT} questionsper document! 😢`,
        success: false,
      };
    }
  }

  const userMessage: Message = {
    role: "human",
    message: question,
    createdAt: new Date(),
  };

  await chatRef.add(userMessage);

  // Generate AI response
  const reply = await generateLangchainCompletion(id, question);

  const aiMessage: Message = {
    role: "ai",
    message: reply!,
    createdAt: new Date(),
  };

  await chatRef.add(aiMessage);

  return { message: null, success: true };
}
