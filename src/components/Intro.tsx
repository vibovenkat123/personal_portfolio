export default function Intro() {
  return (
    <>
      <section
        id="intro"
        className="flex items-center justify-center flex-col pb-6"
      >
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold md:text-6xl text-white mb-8">
            👋 Hey, I am{" "}
            <span className={"text-primarytext"}>Vaibhav Venkat</span>
          </h1>
          <p className="text-md md:text-xl font-medium mb-4">
            {" "}
            A Backend 🖥️, Frontend 🎨 and Devops Engineer 🔁
            <br />
            <span className={"text-softtext"}>
              I like to create API's, CLI Tools, and frontends.
              <br />
            </span>
            <span className={"text-popouttext"}>
              I am proficient in Typescript, Go, Shell, and a little bit of Python and Rust
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
          <a href={"#projects"} className={"text-white"}>
            <button
              aria-label={"Projects button"}
              className={
                "border-2 p-2 px-6 font-semibold rounded-3xl " +
                "border-secondary hover:text-black hover:bg-secondary"
              }
            >
              Projects
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
