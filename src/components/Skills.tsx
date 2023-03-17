export default function Skills() {
  return (
    <>
      <section id={"skills"}>
        <div
          className={
            "bg-zinc-700 w-screen text-white p-4 py-8 md:p-14 md:py-20 w-full flex"
          }
        >
          <div className={"md:w-2/4 w-full"}>
            <h1 className={"font-bold text-2xl md:text-3xl lg:text-4xl mb-8"}>
              My <span className={"text-secondary"}>Skills</span>
            </h1>
            <p className={"text-sm font-semibold"}>
              I first learned the basic web technologies, HTML, CSS, Javascript,
              then I started working with Typescript. Afterwards, I started
              using Vue and Svelte, but now I changed to React. I started
              learning backends in NodeJS, but switched to Go speed and
              developer experience. I use REST and GraphQL for API's, and Swift
              for mobile apps. I learned many unix core utils (grep, sed, awk)
              and also Docker, Terraform, and AWS for deployment. I use Redis
              and Postgresql for connecting to databases. The full list of my
              skills is on my
              {""}{" "}
              <a
                href={"https://github.com/vibovenkat123"}
                target={"_blank"}
                rel={"noreferrer noopener"}
              >
                github
              </a>
            </p>
          </div>
          <div className={"grid-cols-4 p-4 hidden md:grid w-2/4"}>
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt={"HTML"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt={"Typescript"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt={"CSS"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt={"Javascript"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt={"React"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt={"NextJS"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt={"Vue"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
              alt={"Svelte"}
              width={90}
            />
            <img
              className="-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
              alt={"Go"}
              width={90}
            />
            <img
              className="p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
              alt={"AWS"}
              width={90}
            />
            <img
              className="p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt={"Postgres SQL"}
              width={90}
            />
            <img
              className="p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt={"Docker"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
              alt={"Bash"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
              alt={"Terraform"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt={"NodeJS"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg"
              alt={"Ansible"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt={"Python"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
              alt={"Swift"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
              alt={"GraphQL"}
              width={90}
            />
            <img
              className=" p-2 rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg"
              alt={"Lua"}
              width={90}
            />
          </div>
        </div>
      </section>
    </>
  );
}
