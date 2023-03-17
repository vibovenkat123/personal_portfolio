export default function About() {
  return (
    <>
      <section id={"about"}>
        <div
          className={
            "bg-slate-600 text-white p-4 py-8 md:p-14 md:py-20 w-full flex flex-col"
          }
        >
          <h1 className={"font-bold text-2xl md:text-3xl lg:text-4xl mb-8"}>
            <span className={"text-secondary"}>About</span> Me
          </h1>
          <div className={"md:w-2/4 mr-20"}>
            <p className="text-sm mb-4 font-bold text-gray-400">
              I'm a fullstack developer with knowledge in web development,
              backend, devops, and some mobile programming with swift. I am
              still a student so I am still learning new skills. My first
              programming experience was a Elementary school Science-Fair where
              I built a GPS tracker on a shoe using Python, aimed towards people
              with dementia/alzheimer's. I started learning more using{" "}
              <a
                href={"https://www.theodinproject.com"}
                target={"_blank"}
                rel={"noreferrer noopenner"}
              >
                The Odin Project
              </a>
              . I have now sided to love backend more than frontend and I am
              working on a new IOS App called Pennyearned (
              <a
                href={"https://github.com/vibovenkat123/pennyearned-server"}
                target={"_blank"}
                rel={"noreferrer noopener"}
              >
                The server
              </a>{" "}
              is almost finished!!).
              <br />
              <br />I am passionate about:
            </p>
            <ul className="text-sm mb-4 font-bold text-gray-400">
              <li>🖌️ Clean, simple web development, with great UX</li>
              <li>🛠️ Learning on how stuff works under the hood</li>
              <li>👨‍🏫 Learning new things</li>
            </ul>
            <a href="https://www.buymeacoffee.com/vibovenkat" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                className="w-32"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
