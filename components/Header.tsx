import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";
import UpgradeButton from "./UpgradeButton";

function Header() {
  return (
    <div className="flex items-center justify-between bg-white shadow-sm p-4 border-b">
      <Link
        href="/dashboard"
        className="text-pink-600 text-xl tracking-[3px] font-extrabold"
      >
        pdf-GPT
      </Link>
      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">My documents</Link>
          </Button>
          <Button asChild variant="outline" className="border-pink-600">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-pink-600" />
            </Link>
          </Button>
          {/* Upgrade button */}
          <UpgradeButton />
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
export default Header;
