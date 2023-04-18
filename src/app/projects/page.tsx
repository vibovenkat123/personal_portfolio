import { type Project } from "../data/projects";
import projects from "../data/projects";
import Image from "next/image";
export default function ProjectHome() {
  return (
    <main>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=optional"
      />
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <a
          className="text-white border-b-4 border-transparent  no-underline hover:border-white transition duration-300"
          href="/"
        >
          <p className="text-7xl"> {"<--"} </p>
        </a>
        <h1 className="text-9xl mt-5"> PROJECTS </h1>
        <h3 className="text-2xl mt-5 text-softtext"> What I have made </h3>
      </div>
      <div className="w-screen h-screen flex justify-center items-center">
        <Projects />
      </div>
    </main>
  );
}
function Projects() {
  const projectsItem = projects.map((project) => (
    <ProjectItem project={project} key={project.id} />
  ));
  return (
    <>
      <section id={"projects"}>
        <div className="mt-20 flex flex-col justify-center p-4 py-8 md:p-14 md:py-20 h-screen w-screen">
          <div className={"flex flex-row justify-center w-full"}>
            <div
              className={
                "w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10"
              }
            >
              {projectsItem}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectItem(props: { project: Project }) {
  return (
    <>
      <div className="text-center flex flex-col border-2 rounded-lg p-2 border-white justify-around">
        <a
          href={props.project.link}
          className="cursor-pointer flex justify-center items-center"
          rel={"noreferrer noopener"}
          target={"_blank"}
        >
          <Image
            src={props.project.img}
            alt={`${props.project.name} image example`}
            className="h-36 md:h-48 lg:h-52 object-contain"
            width={370}
            height={208}
          />
        </a>
        <div className="p-6">
          <p className="text-lg md:text-xl font-semibold">
            {props.project.name}
          </p>
          <p className={"text-sm"}>{props.project.description}</p>
        </div>
        <div className={"w-full flex justify-center"}>
          <a
            href={props.project.github}
            target={"_blank"}
            rel={"noreferrer noopener"}
            className={"w-2/4 text-white hover:text-black"}
          >
            <button
              aria-label={"Go to code button"}
              className={
                "p-2 rounded-3xl px-6 border-softtext border-2 hover:bg-softtext w-full"
              }
            >
              Code
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
