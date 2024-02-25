"use client";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm",
      )}
    >
      <div className="flex flex-row">
        <Logo />
        <span className="font-semibold hidden md:flex ml-2 mt-0.5 lg:mt-1">
          Wotion
        </span>
      </div>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
