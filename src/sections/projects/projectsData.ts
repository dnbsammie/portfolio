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
    links: ProjectLink[];
};

export const projectsData: Project[] = [
    {
        title: "ordo",
        img: img01,
        links: [
            { href: "https://github.com/dnbsammie/Ordo", label: "github", icon: "fa-brands fa-github" },
            // { href: "#", label: "youtube", icon: "fa-brands fa-youtube" },
        ],
    }, {
        title: "aural",
        img: img02,
        links: [
            { href: "https://github.com/dnbsammie/Aural", label: "github", icon: "fa-brands fa-github" },
        ],
    },
    {
        title: "soundmorph",
        img: img03,
        links: [
            { href: "https://github.com/dnbsammie/SoundMorph", label: "github", icon: "fa-brands fa-github" },
            // { href: "#", label: "web", icon: "fa-solid fa-link" }
        ],
    },
    {
        title: "overdrive",
        img: img04,
        links: [
            { href: "https://github.com/dnbsammie/overdrive", label: "github", icon: "fa-brands fa-github" },
        ],
    },
    {
        title: "trinity",
        img: img05,
        links: [
            { href: "https://github.com/dnbsammie/Trinity", label: "github", icon: "fa-brands fa-github" },
        ],
    },
];
