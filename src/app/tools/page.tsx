import { Tool, tools } from "../data/tools";
import { roboto_mono } from "../font";
export default function ToolsHome() {
  return (
    <main className={roboto_mono.className}>
      <div className="mb-20 w-screen h-screen flex flex-col justify-center items-center">
        <a className="text-white border-b-4 border-transparent  no-underline hover:border-white transition duration-300" href="/" >
          <p className="text-7xl"> {"<--"} </p>
        </a>
        <h1 className="text-9xl"> TOOLS </h1>
        <h3 className="text-2xl mt-5 text-popouttext"> The tools I use </h3>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Tools />
      </div>
    </main>
  )
}

function Tools() {
  const toolItem = tools.map((tool) => (
    <ToolItem tool={tool} />
  ));
  return (
      <div className="grid w-screen h-screen grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-7 p-5">
        {toolItem}
      </div>
  )
}
function ToolItem(props: {tool: Tool}) {
  const typeLabel = props.tool.type.map((t) => (
        <p className="border border-secondary text-sm text-white p-1 w-full rounded-lg m-3 flex justify-center items-center">{t}</p>
  ));
  return (
      <>
        <div className="text-center flex flex-col justify-around tems-center border-2 rounded-lg p-1 border-softtext">
          <p className="text-2xl text-popouttext">
          {props.tool.name}
          </p>
          <p className="mt-2">
          {props.tool.description}
          </p>
          <div className="flex w-full justify-between">
            {typeLabel}
          </div>
        </div>
      </>
  )
}