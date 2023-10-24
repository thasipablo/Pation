"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button";

const Heading = () => {
  return ( 
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, and Plans. Unified. Welcome to <span className="underline">Pation</span>
      </h1>
      <h2 className="text-base sdm:text-xl md:text-2xl font-medium">
        Pation is the connected workspace where <br />
        better, faster work happens.
      </h2>
      <Button>
        <span>Enter Pation</span>
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}
 
export default Heading;
