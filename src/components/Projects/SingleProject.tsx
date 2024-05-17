import { Project } from "@/models/Project";
import React from "react";
import Image from "next/image";

interface ISingleProjectProps {
  project: Project;
}

export const SingleProject = ({ project }: ISingleProjectProps) => {
  return (
    <div
      key={project.title}
      className="min-h-[150px] bg-black bg-opacity-5 flex flex-col justify-center items-center gap-4 border rounded"
    >
      <h3>{project.title}</h3>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/fikalogo2.png"
        alt="Next.js Logo"
        width={150}
        height={50}
        priority
      />
    </div>
  );
};
