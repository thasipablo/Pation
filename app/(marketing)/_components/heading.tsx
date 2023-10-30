"use client"

import { ArrowRight } from "lucide-react"
import { useConvexAuth } from "convex/react"
import { SignInButton } from "@clerk/clerk-react"

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { loadBindings } from "next/dist/build/swc";

const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth()

  return ( 
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, and Plans. Unified. Welcome to <span className="underline">Pation</span>
      </h1>
      <h2 className="text-base sdm:text-xl md:text-2xl font-medium">
        Pation is the connected workspace where <br />
        better, faster work happens.
      </h2>
      { isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      { isAuthenticated && !isLoading &&(
        <div>
          <Link href="/documents">
            <Button>
              <span>Enter Pation</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            <span>Get Pation free</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
 
export default Heading;
