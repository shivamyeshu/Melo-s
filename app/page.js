"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HoverEffect } from "@/components/ui/card-hover-effect"; // Import HoverEffect directly for use
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
      "Real-time collaboration that allows multiple users to create, edit, and interact on the same canvas ",
    link: " ",
  },
  {
    title: "Template Library and Guides",
    description:
      "A collection of pre-made templates, guides, and examples to inspire users and jump-start their creative process.",
    link: " ",
  },{
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
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
           <h1 className="text-4xl font-semibold text-black dark:text-white">
              Welcome to the world of 
              <br /></h1>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Short for Melody indicating in syntax and usability
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Melo
              </span>
              <div className="flex justify-center mt-4">
                <Button className="px-6 py-3 text-lg">Getting Started</Button>
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
      <h1 className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-center">What We Offer !!!</h1>
      {/* Add the CardHoverEffectDemo component here */}
      <CardHoverEffectDemo />

      <div className="flex justify-center mt-8">
        <h1> Designed by Shivam</h1>
        </div>
     <br />
    </div>
  );
}
