"use client";

import useObserverStore from "@/store";
import Navlink from "./navlink";

const Navbar = () => {
  const { about, skills, projects } = useObserverStore();

  return (
    <nav className="flex flex-col gap-5">
      <Navlink href="#about" inView={about}>
        About
      </Navlink>
      <Navlink href="#skills" inView={skills}>
        Skills
      </Navlink>
      <Navlink href="#projects" inView={projects}>
        Projects
      </Navlink>
    </nav>
  );
};

export default Navbar;
