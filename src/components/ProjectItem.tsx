import {type Project} from "../portfolio_data/projects"
import {ReactElement} from "react";
export default function ProjectItem(props: {project: Project}) {
    let linkButton: ReactElement = <></>;
    return (
    <>
        <div className="text-center flex flex-col md:mb-5 lg:mb-9 border-2 rounded-lg p-2 border-white">
            <a href={props.project.link} className="cursor-pointer flex justify-center items-center" rel={"noreferrer noopener"} target={"_blank"}>
                <img
                    src={props.project.img}
                    alt={`${props.project.name} image example`}
                    className="h-36 md:h-48 lg:h-52 object-contain"
                />
            </a>
            <div className="p-6">
               <h3 className="text-lg md:text-xl mb-3 font-semibold">{props.project.name}</h3>
                <p>{props.project.description}</p>
            </div>
        </div>
    </>
  )
}

