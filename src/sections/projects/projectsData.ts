import img01 from "/assets/img/img-01.webp";
import img02 from "/assets/img/img-02.webp";
import img03 from "/assets/img/img-03.webp";
import img04 from "/assets/img/img-04.webp";
import img05 from "/assets/img/img-05.webp";

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
        img: img01,
        orientation: "horizontal",
        links: [
            { href: "https://github.com/dnbsammie/Ordo", label: "github", icon: "fa-brands fa-github" },
            { href: "#", label: "youtube", icon: "fa-brands fa-youtube" },
        ],
    },
    {
        title: "soundmorph",
        img: img02,
        orientation: "vertical",
        links: [
            { href: "https://github.com/dnbsammie/SoundMorph", label: "github", icon: "fa-brands fa-github" },
            { href: "#", label: "web", icon: "fa-solid fa-link" }
        ],
    },
    {
        title: "aural",
        img: img03,
        orientation: "horizontal",
        links: [
            { href: "https://github.com/dnbsammie/Aural", label: "github", icon: "fa-brands fa-github" },
            { href: "#", label: "web", icon: "fa-solid fa-link" }
        ],
    },
    {
        title: "trinity",
        img: img04,
        orientation: "vertical",
        links: [
            { href: "https://github.com/dnbsammie/Trinity", label: "github", icon: "fa-brands fa-github" },
        ],
    },
    {
        title: "overdrive",
        img: img05,
        orientation: "horizontal",
        links: [
            { href: "https://github.com/dnbsammie/Overdrive", label: "github", icon: "fa-brands fa-github" },
        ],
    },
];
