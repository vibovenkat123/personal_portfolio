enum ToolType {
  WebFramework = "Web Framework",
  BackendFramework = "Backend Framework",
  UIFramework = "UI Framework",
  Language = "Language",
  Database = "Database",
  Design = "Design",
  Misc = "Misc",
  CssFramework = "Css framework",
  Automation = "Automation",
  IAC = "Infra as Code",
  CLI = "Cli",
  API = "Apis",
}

export type Tool = {
  name: string;
  description: string;
};

export const tools: Tool[] = [
  {
    name: "React",
    description: "A popular and great javascript library for UI's",
  },
  {
    name: "Next JS",
    description: "A great React Framework for SSR",
  },
  {
    name: "Svelte",
    description: "A new simpler, and faster ui framework",
  },
  {
    name: "SvelteKit",
    description: "A framework to build Svelte apps using SSR",
  },
  {
    name: "Go",
    description:
      "An amazing statically typed language designed to mix simplicity with speed",
  },
  {
    name: "Go Chi",
    description:
      "An router for go that pairs with net/http to make routing 10x easier",
  },
  {
    name: "Typescript",
    description: "A strongly typed language that extends JavaScript",
  },
  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework that allows you to use css in html/jsx code",
  },
  {
    name: "Rust",
    description: "A fast, safe language with great types",
  },
  {
    name: "Swift",
    description: "A powerful, simple and elegant language",
  },
  {
    name: "Swift UI",
    description: "A way to build clean UI's around Swift",
  },
  {
    name: "SQL",
    description: "A universal way to query from databases",
  },
  {
    name: "Postgres",
    description: "An open-source powerful database",
  },
  {
    name: "Redis",
    description: "An very fast database",
  },
  {
    name: "Ansible",
    description: "A way to manage configuration across many servers/devices",
  },
  {
    name: "Python",
    description: "A simple and popular scripting language",
  },
  {
    name: "GNU Core Utils",
    description:
      "A suite of tools on unix systems that help you get things done faster",
  },
  {
    name: "Git",
    description:
      "An open-source version control system thats extremely popular",
  },
];
