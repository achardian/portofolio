import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const Home = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col lg:flex-row">
      <Header />
      <main className="flex flex-1 flex-col px-10 py-24 lg:pl-10">
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};

export default Home;
