import TitleSection from "@/components/landing/title-section";
import { Button } from "@/components/ui/button";

export default function HomePage() {
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
          >
            Get Wotion Free
          </Button>
        </div>
      </div>
    </section>
  );
}
