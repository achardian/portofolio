"use client";

import useObserverStore from "@/store";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import HTML from "@/assets/html-icon.svg";
import CSS from "@/assets/css-icon.svg";
import Javascript from "@/assets/javascript-icon.svg";
import Typescript from "@/assets/typescript-icon.svg";
import NodeJs from "@/assets/nodejs-icon.svg";
import React from "@/assets/react-icon.svg";
import Tailwind from "@/assets/tailwind-icon.svg";
import NextJs from "@/assets/nextjs-icon.svg";
import MongoDb from "@/assets/mongodb-icon.svg";

const Skills = () => {
  const skills = [
    {
      skill: "HTML",
      icon: HTML,
    },
    {
      skill: "CSS",
      icon: CSS,
    },
    {
      skill: "Javascript",
      icon: Javascript,
    },
    {
      skill: "Typescript",
      icon: Typescript,
    },
    {
      skill: "Node Js",
      icon: NodeJs,
    },
    {
      skill: "React Js",
      icon: React,
    },
    {
      skill: "Tailwind CSS",
      icon: Tailwind,
    },
    {
      skill: "Next Js",
      icon: NextJs,
    },
    {
      skill: "Mongo Db",
      icon: MongoDb,
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.8 });
  const { setObserver } = useObserverStore();

  useEffect(() => {
    setObserver({ name: "skills", state: inView });
  }, [inView, setObserver]);

  return (
    <section
      ref={ref}
      id="skills"
      className="my-24 flex w-full scroll-mt-24 flex-col gap-5"
    >
      <h2 className="subheading text-center lg:text-left">-- Skills --</h2>
      <div className="flex flex-wrap items-center justify-between gap-2">
        {skills.map((skill) => (
          <div
            key={skill.icon}
            className="group flex flex-col items-center justify-center rounded-md bg-[#301E67] p-3 lg:p-2"
          >
            <div className="relative h-[120px] w-[120px] group-hover:animate-bounce">
              <Image src={skill.icon} alt={skill.icon} fill />
            </div>
            <span className="text-[12px] font-semibold">{skill.skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
