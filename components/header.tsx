import { SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import AlphaLetter from "./alphaLetter";
import { Button } from "./ui/button";
import UserMenu from "./user-menu";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  const data = await checkUser();
  console.log(data);

  return (
    <header>
      <nav className="flex justify-between mx-10 py-auto my-4">
        <Link href={"/"}>
          {Array.from("JIRA").map((character, index) => {
            return <AlphaLetter key={index} letter={character} />;
          })}
        </Link>
        <div className="flex items-center gap-4">
          <Link href={"/project/create"}>
            <Button variant={"destructive"} className="animate-bounce">
              ✏️Create Project
            </Button>
          </Link>

          <SignedOut>
            <SignInButton>
              <Button variant={"outline"}>Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
