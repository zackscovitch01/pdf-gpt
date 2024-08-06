import { Button } from "@/components/ui/button";
import { features } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-br from-white to-pink-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-8 tracking-wider text-pink-600">
              Your interactive document companion
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-700 sm:text-6xl">
              Transform your documents into interactive experiences
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Introducing{" "}
              <span className="font-bold text-pink-600">pdf-GPT.</span>
              <br />
              <br /> Upload your document and let our chatbot do the rest. It
              can answer questions, summarize content making it the ideal
              learning companion.{" "}
              <span className=" text-pink-600">pdf-GPT</span> turns static
              documents into{" "}
              <span className="font-bold">interactive experiences</span>{" "}
              enhancing the way you learn.
            </p>
          </div>
          <Button
            asChild
            className="mt-10 bg-pink-400 text-white hover:bg-pink-500"
          >
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src="/pdf-GPT.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-slate-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-pink-600">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-pink-600"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
