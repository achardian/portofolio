import Carousel from "@/components/carousel";
import projects from "@/data";
import Link from "next/link";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((project) => project.slug === params.slug);

  return (
    <main className="mx-auto min-h-screen max-w-5xl">
      <Carousel images={project?.images!} />
      <div className="mx-auto my-3 flex w-[80%] flex-col gap-3">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <h1 className="text-2xl font-bold md:text-3xl">{project?.title}</h1>
          <div className="flex items-center gap-3">
            <Link
              href={project?.link!}
              className="rounded-md bg-blue-600 px-2 py-2 md:px-5"
            >
              Live site
            </Link>
            <Link
              href={project?.repo!}
              className="rounded-md bg-gray-800 px-5 py-2"
            >
              Source code
            </Link>
          </div>
        </div>
        <p>{project?.description}</p>
        <div className="flex flex-wrap items-center gap-3">
          {project?.techStacks.map((tech) => (
            <small
              key={tech}
              className="rounded-full bg-[#5B8FB9]/80 px-3 py-2 font-bold text-[#301E67]"
            >
              {tech}
            </small>
          ))}
        </div>

        <h2 className="mt-5 text-xl font-semibold">Features</h2>
        <ul className="px-5">
          {project?.features?.map((feature) => (
            <li key={feature} className="my-2 list-item list-disc">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ProjectDetail;
