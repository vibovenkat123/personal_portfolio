import projects from "../portfolio_data/projects"
import ProjectItem from "./ProjectItem";
export default function Projects(props: {}) {
    const projectsItem = projects.map((project) =>
        <ProjectItem project={project} key={project.id}/>
    );
  return (
    <>
        <section id={"projects"}>
            <div className="w-full flex flex-col justify-center p-4">
                <h1 className={"font-bold text-2xl md:text-3xl lg:text-4xl mb-4"}> <span className={"text-secondary"}>Notable</span> Projects </h1>
                <div className={"flex flex-row justify-center w-full"}>
                    <div className={"w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
                        {projectsItem}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
