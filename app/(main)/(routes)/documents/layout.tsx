"use client"

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "../../_components/navigation";

const MainLayout = ({children}:{children:React.ReactNode}) => {
  const { isLoading, isAuthenticated } = useConvexAuth()

  if( isLoading ) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }
  
  if(!isAuthenticated) {
    return redirect("/")
  }

  return ( 
    <main className="h-screen flex dark:bg-[#1F1F1F]">
      <Navigation />
      <div className="flex-1 h-full overflow-y-auto">
        { children }
      </div>
    </main>
  );
}
 
export default MainLayout;
