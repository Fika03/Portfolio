import { ProjectsContainer } from "@/components/Projects/ProjectsContainer";
import { RippleButton } from "@/components/RippleButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex flex-col gap-[100px]">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/fikalogo2.png"
            alt="Next.js Logo"
            width={150}
            height={37}
            priority
          />
        </div>
        <ProjectsContainer />
        <RippleButton />
      </div>
    </main>
  );
}
