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
  name: string,
  description: string
  type: ToolType[]
}

export const tools: Tool[] = [
  {
    name: "React",
    description: "A popular and great javascript library for UI's",
    type: [ToolType.UIFramework]
  },
  {
    name: "Next JS",
    description: "A great React Framework for SSR",
    type: [ToolType.WebFramework]
  },
  {
    name: "Svelte",
    description: "A new simpler, and faster ui framework",
    type: [ToolType.UIFramework]
  },
  {
    name: "SvelteKit",
    description: "A framework to build Svelte apps using SSR",
    type: [ToolType.UIFramework]
  },
  {
    name: "Go",
    description: "An amazing statically typed language designed to mix simplicity with speed",
    type: [ToolType.Language, ToolType.API]
  },
  {
    name: "Go Chi",
    description: "An router for go that pairs with net/http to make routing 10x easier",
    type: [ToolType.WebFramework, ToolType.API]
  },
  {
    name: "Typescript",
    description: "A strongly typed language that extends JavaScript",
    type: [ToolType.Language, ToolType.API]
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework that allows you to use css in html/jsx code",
    type: [ToolType.Design, ToolType.CssFramework]
  },
  {
    name: "Rust",
    description: "A fast, safe language with great types",
    type: [ToolType.Language, ToolType.CLI]
  },
  {
    name: "Swift",
    description: "A powerful, simple and elegant language",
    type: [ToolType.Language]
  },
  {
    name: "Swift UI",
    description: "A way to build clean UI's around Swift",
    type: [ToolType.UIFramework]
  },
  {
    name: "SQL",
    description: "A universal way to query from databases",
    type: [ToolType.Language]
  },
  {
    name: "Postgres",
    description: "An open-source powerful database",
    type: [ToolType.Database]
  },
  {
    name: "Redis",
    description: "An very fast database",
    type: [ToolType.Database]
  },
  {
    name: "Ansible",
    description: "A way to manage configuration across many servers/devices",
    type: [ToolType.Automation]
  },
  {
    name: "Python",
    description: "A simple and popular scripting language",
    type: [ToolType.Language, ToolType.Automation]
  },
  {
    name: "GNU Core Utils",
    description: "A suite of tools on unix systems that help you get things done faster",
    type: [ToolType.Automation]
  },
  {
    name: "Git",
    description: "An open-source version control system thats extremely popular",
    type: [ToolType.Misc]
  },
]
