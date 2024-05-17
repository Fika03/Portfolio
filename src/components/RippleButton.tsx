"use client";

import React, { useState, useRef } from "react";
import "./RippleButton.css"; // Import the CSS for the ripple effect

export const RippleButton = () => {
  const [hovered, setHovered] = useState(false);
  const buttonRef = useRef(null);

  const createRipple = (event: any) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    const rippleX = event.clientX - rect.left - radius;
    const rippleY = event.clientY - rect.top - radius;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${rippleX}px`;
    circle.style.top = `${rippleY}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  const handleMouseEnter = (event: any) => {
    createRipple(event);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <button
      className={`ripple-button ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={buttonRef}
    >
      RippleButton
    </button>
  );
};
