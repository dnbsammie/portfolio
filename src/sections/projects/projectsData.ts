type ProjectLink = {
    href: string;
    label: string;
    icon: string;
};

type Project = {
    title: string;
    img: string;
    orientation: "horizontal" | "vertical";
    links: ProjectLink[];
};

export const projectsData: Project[] = [
    {
        title: "ordo",
        img: "/assets/img/img-01.webp",
        orientation: "horizontal",
        links: [
            { href: "https://github.com/dnbsammie/Ordo", label: "github", icon: "fa-brands fa-github" },
            { href: "#", label: "youtube", icon: "fa-brands fa-youtube" },
        ],
    },
    {
        title: "soundmorph",
        img: "/assets/img/img-02.webp",
        orientation: "vertical",
        links: [
            { href: "https://github.com/dnbsammie/SoundMorph", label: "github", icon: "fa-brands fa-github" },
            { href: "#", label: "web", icon: "fa-solid fa-link" }
        ],
    },
    {
        title: "aural",
        img: "/assets/img/img-03.webp",
        orientation: "horizontal",
        links: [
            { href: "https://github.com/dnbsammie/Aural", label: "github", icon: "fa-brands fa-github" },
            { href: "#", label: "web", icon: "fa-solid fa-link" }
        ],
    },
    {
        title: "trinity",
        img: "/assets/img/img-04.webp",
        orientation: "vertical",
        links: [
            { href: "https://github.com/dnbsammie/Trinity", label: "github", icon: "fa-brands fa-github" },
        ],
    },
    {
        title: "overdrive",
        img: "/assets/img/img-05.webp",
        orientation: "horizontal",
        links: [
            { href: "https://github.com/dnbsammie/Overdrive", label: "github", icon: "fa-brands fa-github" },
        ],
    },
];
