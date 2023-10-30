"use client"

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { cn } from "@/lib/utils";
import useScrollTop from "@/hooks/use-scroll-top";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {/* Login button */}
        { isLoading && (
          <Spinner />
        )}
        { !isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">
                Get Passion free
              </Button>
            </SignInButton>
          </>
        )}
        { isAuthenticated && !isLoading && (
          <>
            <div>
              <Link href="/documents">
                <Button variant="ghost" size="sm">
                    Enter Pation
                </Button>
              </Link>
            </div>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        {/* Toggle theme mode button */}
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
