"use client"

import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts"

const Navigation = () => {
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px")
  
  const isResizingRef = useRef(false)
  const sidebarRef = useRef<ElementRef<"aside">>(null)
  const navbarRref = useRef<ElementRef<"div">>(null)
  const [isResetting, setIsResetting] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(isMobile)

  const handleMouseMove = (event: MouseEvent) => {
    if(!isResizingRef.current) return

    let newWidth = event.clientX

    if (newWidth < 240) newWidth = 240
    if (newWidth > 480) newWidth = 480

    if(sidebarRef.current && navbarRref.current) {
      sidebarRef.current.style.width = `${newWidth}px`
      navbarRref.current.style.setProperty("left", `${newWidth}`)
      navbarRref.current.style.setProperty("width", `calc(100% - ${newWidth})`)
    }
  }

  const handleMouseUp = () => {}

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    event.stopPropagation()

    isResizingRef.current = true
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  return ( 
    <>
      <aside ref={sidebarRef} className={cn(
        "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
        isResetting && "transition-all ease-in-out duration-300",
        isMobile && "w-0"
      )}>
        <div
          role="button"
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div>
          <p>Action items</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        <div
          onMouseDown={() => handleMouseDown}
          onClick={() => {}}
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>
      <div
        ref={navbarRref}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100% - 240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="bg-transparent px-3 w-full">
          {isCollapsed && <MenuIcon role="button" className="h-6 w-6 text-muted-foreground" />}
        </nav>
      </div>
    </>
  );
}
 
export default Navigation;
