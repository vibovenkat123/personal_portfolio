export type Project = {
    name: string,
    link: string,
    img: string,
    description: string,
    id: number,
}
let id = 0
const projects: Project[] = [
    {
        name: "Review-GPT",
        link: "https://github.com/vibovenkat123/review-gpt",
        img: "https://raw.githubusercontent.com/vibovenkat123/review-gpt/main/assets/examples/usage/base_usage.png",
        description: "An automated code review tool that uses GPT3.5 and GPT3 written in Go and uses GPT",
        id: id++,
    },
    {
        name: "Pennyearned Server (WIP)",
        link: "https://github.com/vibovenkat123/pennyearned-server",
        img: "https://raw.githubusercontent.com/vibovenkat123/pennyearned-server/main/examples/users.png",
        description: "The server for a mobile app designed to help manage your budgets written with Go, Terraform, Docker, MJML/HTML, Postgres, Redis, and Aws serverless",
        id: id++
    },
    {
        name: "Pioneer",
        link: "https://pioneer-prod.vercel.app",
        img: "https://i.imgur.com/l2d0uPz.png",
        description: "A small website which allows you to share and download images written in Svelte, Firebase, Rxfire and Typescript",
        id: id++
    },
    {
        name: "Pennyearned Mobile (WIP)",
        link: "https://github.com/vibovenkat123/pennyearned-mobile",
        img: "https://i.imgur.com/Y3U3CFB.jpg",
        description: "An app designed to manage your budgets in a simple, easy way written in Swift and SwiftUI",
        id: id++
    },
    {
        name: "CV Maker",
        link: "https://vibo-cv-builder.vercel.app",
        img: "https://i.imgur.com/NFyHYCD.png",
        description: "A lightweight efficient website used to make quick prototype CV's written with Svelte and Firebase and Typescript",
        id: id++
    },
    {
        name: "Memory App",
        link: "https://memory-game-rust-three.vercel.app",
        img: "https://i.imgur.com/wptl98B.png",
        description: "A memory game app writen in both Vue and Svelte",
        id: id++
    },
]
export default projects
