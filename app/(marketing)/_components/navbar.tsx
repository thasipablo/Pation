"use client"

import { cn } from "@/lib/utils";
import useScrollTop from "@/hooks/use-scroll-top";
import Logo from "./logo";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div className={cn("z-50 bg-background fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
      <Logo />
    </div>
  );
}

export default Navbar;
