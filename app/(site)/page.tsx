"use client";
import TitleSection from "@/components/landing/title-section";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/moving-cards";
import { testimonials } from "@/lib/constants/testimonials";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <section>
      <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col md:justify-center md:items-center">
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div
          className="
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-red-200
          sm:w-[300px]
        "
        >
          <Button
            variant="secondary"
            className=" w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-background
          "
            onClick={() => router.push("/dashboard")}
          >
            Get Wotion Free
          </Button>
        </div>
      </div>
      <div className="h-full mt-3 px-2 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
