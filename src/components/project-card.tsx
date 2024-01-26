import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  techStacks: string[];
  link: string;
  repo: string;
  images: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/project/${project.slug}`)}
      className="flex w-full cursor-pointer flex-col gap-3 rounded-lg p-3 backdrop-blur-sm hover:bg-slate-300/10"
    >
      <div className="relative h-[200px] w-full overflow-clip rounded-lg">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="rounded-lg object-contain"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-[#5B8FB9]">
            {project.title}
          </h3>
          <div className="flex items-center gap-3">
            <Link
              href={project.repo}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-slate-100/15 p-2"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={project.link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-slate-100/15 p-2"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStacks.map((tech) => (
            <small
              key={tech}
              className="rounded-full bg-[#5B8FB9]/80 px-3 py-2 font-bold text-[#301E67]"
            >
              {tech}
            </small>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
