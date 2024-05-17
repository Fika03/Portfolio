"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/models/Project";
import "./SingleProject.css"; // Import the CSS for the ripple effect

interface ISingleProjectProps {
  project: Project;
}

export const SingleProject = ({ project }: ISingleProjectProps) => {
  const createRipple = (event: any) => {
    const container = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;

    const rect = container.getBoundingClientRect();
    const rippleX = event.clientX - rect.left - radius;
    const rippleY = event.clientY - rect.top - radius;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${rippleX}px`;
    circle.style.top = `${rippleY}px`;
    circle.classList.add("ripple");

    const ripple = container.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    container.appendChild(circle);

    // Remove the ripple element after the animation completes
    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  };

  return (
    <div
      key={project.title}
      className="min-h-[150px] bg-black bg-opacity-5 flex flex-col justify-center items-center gap-4 border rounded relative ripple-container"
      onMouseEnter={createRipple}
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
