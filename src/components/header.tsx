import Link from "next/link";
import Navbar from "./navbar";
import { Github, Instagram, Mail } from "lucide-react";

const Header = () => {
  const socials = [
    {
      link: "https://github.com/achardian",
      Icon: Github,
    },
    {
      link: "https://instagram.com/achardian15",
      Icon: Instagram,
    },
    {
      link: "mailto:achardianself@gmail.com",
      Icon: Mail,
    },
  ];

  return (
    <header className="static top-0 flex h-screen w-full flex-col justify-between px-10 py-12 lg:sticky lg:w-1/2 lg:px-0 lg:py-24">
      <div className="flex flex-col gap-5 lg:gap-3">
        <h1 className="text-center text-4xl font-bold lg:text-left">
          Muchammad Ardiansyah
        </h1>
        <h2 className="subheading  text-center lg:text-left">
          --- Web Developer ---
        </h2>
        <p className="w-full text-center text-base text-slate-400 lg:w-[70%] lg:text-left">
          {" "}
          Enthusiastic web developer with a passion for turning ideas into
          functional and innovative solutions.
        </p>
      </div>

      <Navbar />

      <div className="flex items-center justify-center gap-10 lg:justify-start">
        {socials.map((social) => (
          <Link
            href={social.link}
            key={social.link}
            className="text-slate-400 hover:text-slate-200"
          >
            <social.Icon />
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
