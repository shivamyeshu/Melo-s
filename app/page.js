"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";

// Data for project cards
const projects = [
  {
    title: "Play Ground",
    description:
      "A place where you can play with code, experiment, and learn new things.",
    link: "",
  },
  {
    title: "Drawing Tools / Draw Boards",
    description:
      "A collection of tools to draw, sketch, and create beautiful illustrations.",
    link: " ",
  },
  {
    title: "Collaborative Workspace",
    description:
      "Real-time collaboration that allows multiple users to create, edit, and interact on the same canvas",
    link: " ",
  },
  {
    title: "Template Library and Guides",
    description:
      "A collection of pre-made templates, guides, and examples to inspire users and jump-start their creative process.",
    link: " ",
  },
  {
    title: "Blogs",
    description:
      "A collection of articles, tutorials, and resources to help users learn, grow, and stay inspired.",
    link: " ",
  },
  {
    title: "Community",
    description:
      "A place where users can share, discuss, and collaborate on projects, ideas, and more.",
    link: " ",
  },
];

// Component for displaying the project cards with hover effects
function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 my-8">
      <HoverEffect items={projects} />
    </div>
  );
}

// Main Home Component
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    // Set the initial theme based on the user's system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Sticky Dark/Light Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-xl p-2 shadow-md z-50"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {/* Welcome to the world of */}
              This project is under development and will be available soon
              <br />
            </h1>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {/* Short for Melody indicating in syntax and usability
              <br /> */}
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Melo
              </span>
              <div className="flex justify-center mt-4">
                {/* <Button className="px-6 py-3 text-lg">Getting Started</Button> */}
                {/* <Button className="colors:bg-red-500 px-6 py-3 text-lg">Developer will provide this functionality soon</Button> */}
              </div>
              <br />
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <h1 className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-center">
        What We Offer !!!
      </h1>
      {/* Add the CardHoverEffectDemo component here */}
      <CardHoverEffectDemo />

      <div className="flex justify-center mt-8">
        <h1> Designed by Shivam</h1>
      </div>
      <br />
    </div>
  );
}
