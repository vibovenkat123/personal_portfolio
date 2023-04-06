import projects from "../portfolio_data/projects";
import ProjectItem from "./ProjectItem";
export default function Projects() {
  const projectsItem = projects.map((project) => (
    <ProjectItem project={project} key={project.id} />
  ));
  return (
    <>
      <section id={"projects"}>
        <div className="w-full flex flex-col justify-center p-4 py-8 md:p-14 md:py-20">
          <h2 className={"font-bold text-2xl md:text-3xl lg:text-4xl mb-4"}>
            {" "}
            <span className={"text-secondary"}>Notable</span> Projects{" "}
          </h2>
          <div className={"flex flex-row justify-center w-full"}>
            <div
              className={
                "w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-7"
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
