import { roboto_mono } from "./font";

export default function Home() {
  return (
    <main className={roboto_mono.className}>
      <div className="w-screen h-screen flex justify-center items-center">
        <Intro name="Vaibhav Venkat" />
      </div>
    </main>
  )
}

function Intro(props: {name: string}) {
  return (
    <>
      <section
        id="intro"
        className="flex items-center justify-center flex-col pb-6"
      >
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold md:text-6xl text-white mb-8">
            👋 Hey, I am{" "}
            <span className={"text-secondary underline"}>{props.name}!</span>
          </h1>
          <p className="text-md md:text-xl font-medium mb-4">
            {" "}
            A Backend 🖥️, Frontend 🎨 and Devops Engineer 🔁
            <br />
            <span className={"text-popouttext"}>
              I like to create API's, CLI Tools, and frontends.
              <br />
            </span>
            <span className={"text-softtext"}>
              I am proficient in Typescript and Go and a little bit of Python, Rust, and Haskell
            </span>
          </p>
        </div>
        <div className={"flex gap-4"}>
          <a
            href={"https://github.com/vibovenkat123"}
            className={"text-white"}
            target={"_blank"}
            rel={"noreferrer noopener"}
          >
            <button
              aria-label={"Github button"}
              className={
                "border-2 p-2 px-6 font-semibold rounded-3xl " +
                "border-primary hover:text-black hover:bg-primary"
              }
            >
              Github
            </button>
          </a>
          <a href={"/projects"} className={"text-white"}>
            <button
              aria-label={"Projects button"}
              className={
                "border-2 p-2 px-6 font-semibold rounded-3xl " +
                "border-softtext hover:text-black hover:bg-softtext"
              }
            >
              Projects
            </button>
          </a>
          <a href={"/tools"} className={"text-white"}>
            <button
              aria-label={"Tools button"}
              className={
                "border-2 p-2 px-6 font-semibold rounded-3xl " +
                "border-popouttext hover:text-black hover:bg-popouttext"
              }
            >
              Tools
            </button>
          </a>
        </div>
      </section>
    </>
  );
}