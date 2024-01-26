"use client";

import projects from "@/data";
import useObserverStore from "@/store";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./project-card";

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { setObserver } = useObserverStore();

  useEffect(() => {
    setObserver({ name: "projects", state: inView });
  }, [inView, setObserver]);

  return (
    <section
      ref={ref}
      id="projects"
      className="my-24 flex scroll-mt-24 flex-col gap-5"
    >
      <h2 className="subheading">-- Projects --</h2>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
