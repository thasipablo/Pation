import React from "react";
import Navbar from "./_components/navbar";

const MarketingLayout = ({ children } : { children: React.ReactNode }) => {
  return ( 
    <div className="h-full">
      <Navbar />
      <div className="h-full pt-40">{ children }</div>
    </div>
  );
}
 
export default MarketingLayout;
