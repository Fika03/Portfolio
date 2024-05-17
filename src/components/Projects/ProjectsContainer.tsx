import React from "react";
import { SingleProject } from "./SingleProject";
import { Project } from "@/models/Project";

const projectArray: Project[] = [
  {
    title: "projekt1",
    image: "/fikalogo2.png",
    href: "/",
  },
  {
    title: "projekt2",
    image: "/fikalogo2.png",
    href: "/",
  },
  {
    title: "projekt3",
    image: "/fikalogo2.png",
    href: "/",
  },
  {
    title: "projekt4",
    image: "/fikalogo2.png",
    href: "/",
  },
  {
    title: "projekt5",
    image: "/fikalogo2.png",
    href: "/",
  },
  {
    title: "projekt6",
    image: "/fikalogo2.png",
    href: "/",
  },
  {
    title: "projekt7",
    image: "/fikalogo2.png",
    href: "/",
  },
  {
    title: "projekt8",
    image: "/fikalogo2.png",
    href: "/",
  },
];

export const ProjectsContainer = () => {
  return (
    <section className="grid grid-cols-3 w-8/12 gap-6">
      {projectArray.map((project, index) => (
        <SingleProject project={project} key={index} />
      ))}
    </section>
  );
};
