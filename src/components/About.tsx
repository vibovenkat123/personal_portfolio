export default function About() {

    return (
        <>
            <section id={"about"}>
                <div className={"bg-slate-600 text-white p-6 py-12 md:p-20 md:py-28 w-full mb-6 flex"}>
                    <div className={"md:w-2/4"}>
                        <h1 className={"font-bold text-2xl md:text-3xl lg:text-4xl mb-8"}>
                            <span className={"text-secondary"}>About</span> Me
                        </h1>
                        <p className="text-sm md:text-base mb-4 font-bold text-gray-400">
                            I'm a fullstack developer with knowledge in web development, backend, devops, and some mobile programming with swift.
                            I am still a student so I am still learning new skills. My first programming experience was a Elementary school Science-Fair where I built
                            a GPS tracker on a shoe using Python, aimed towards people with dementia/alzheimer's.
                            I started learning more using <a href={"https://www.theodinproject.com"} target={"_blank"} rel={"noreferrer noopenner"}>The Odin Project</a>.
                            I have now sided to love backend more than frontend
                            and I am working on a new IOS App called Pennyearned (<a href={"https://github.com/vibovenkat123/pennyearned-server"} target={"_blank"} rel={"noreferrer noopener"}>The server </a> is almost finished!!).
                            <br />
                            <br />
                            I am passionate about:
                            <ul>
                                <li>🖌️ Clean, simple web development, with great UX</li>
                                <li>🛠️ Learning on how stuff works under the hood</li>
                                <li>👨‍🏫 Learning new things</li>
                            </ul>
                        </p>
                    </div>
                    <div className={"w-2/4 hidden justify-center items-center md:flex"}>
                        <p className={"text-9xl text-center"}>⚙️ 💻 🎨</p>
                    </div>
                </div>
            </section>
        </>
    )
}