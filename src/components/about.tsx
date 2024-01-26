"use client";

import useObserverStore from "@/store";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setObserver } = useObserverStore();

  useEffect(() => {
    setObserver({ name: "about", state: inView });
  }, [inView, setObserver]);

  return (
    <section
      ref={ref}
      id="about"
      className="mb-16 flex scroll-mt-24 flex-col gap-5 text-justify text-base text-slate-400"
    >
      <h2 className="subheading text-center lg:text-left">-- About Me --</h2>
      <p>
        Hello there! My name is Muchammad Ardiansyah. I am 24 years old, and I
        am a self-taught web developer. I teach myself how to code, cause I find
        it interesting and potentially becoming high demand jobs in the future.
      </p>
      <p>
        I love building web from scratch and passionate about learning new
        technologies. Currently, I am focusing on specializing myself in Next JS
        for building full-stack web application.
      </p>
      <p>
        Now, I am Seeking a challenging position as a web developer to further
        enhance my skills, contribute to innovative projects, and fulfill my
        ambition of becoming a proficient full-stack developer.
      </p>
    </section>
  );
};

export default About;
