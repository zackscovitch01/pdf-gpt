"use client";

import { useRouter } from "next/navigation";
import byteSize from "byte-size";
import useSubscription from "@/hooks/useSubscription";
import { useTransition } from "react";
import { DownloadCloud, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";

function Document({
  name,
  downloadUrl,
  size,
  id,
}: {
  name: string;
  downloadUrl: string;
  size: number;
  id: string;
}) {
  const router = useRouter();
  const [isDeleting, startTransition] = useTransition();
  const { hasActiveMembership } = useSubscription();

  return (
    <div className="flex flex-col w-64 h-80 rounded-xl bg-white drop-shadow-md justify-between p-4 transition-all transform hover:scale-105 hover:bg-pink-600 hover:text-white cursor-pointer group">
      <div
        className="flex-1"
        onClick={() => {
          router.push(`/dashboard/files/${id}`);
        }}
      >
        <p className="font-semibold line-clam-2">
          {/* slice id */}
          {id.slice(0, 4)}-{name}
        </p>
        <p className="text-sm text-gray-500 group-hover:text-pink-100">
          {/* render size in kbs */}
          {byteSize(size).value} KB
        </p>
      </div>
      {/* Actions */}
      <div className="flex space-x-2 justify-end">
        <Button variant="ghost" asChild>
          <a href={downloadUrl} download>
            <DownloadCloud className="h-6 w-6 text-pink-600" />
          </a>
        </Button>
      </div>
    </div>
  );
}
export default Document;
