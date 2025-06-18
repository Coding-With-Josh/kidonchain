import {
    SiReact,
    SiTypescript,
    SiNextdotjs,
    SiNodedotjs,
    SiGraphql,
    SiTailwindcss,
    SiDocker,
    SiGit,
    SiPython,
    SiGo,
    SiRust,
    SiPostgresql,
    SiMongodb,
    SiKubernetes,
    SiEthereum,
    SiSolidity,
    SiWeb3Dotjs,
    SiBitcoin,
    SiJest,
    SiSui,
    SiSolana,
} from "react-icons/si";
import { ArrowUpRight, PlusIcon, Star } from 'lucide-react';
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from '@/components/motion-primitives/morphing-dialog';
import archDemo from "@/assets/images/arch.png"
import twistDemo from "@/assets/images/twist.png"
import dotDemo from "@/assets/images/dot.png"
import syncDemo from "@/assets/images/sync-ai.png"
import gridDemo from "@/assets/images/grid.png"

const Projects = () => {
    const featuredProject = {
        title: "Arch AI",
        description: "Simplifying Solana development with extensive no-code tools.",
        technologies: [
            { icon: <SiSolana className="text-[#3C3C3D]" />, name: "Solana" },
            { icon: <SiEthereum className="text-[#3C3C3D]" />, name: "Ethereum" },
            { icon: <SiBitcoin className="text-[#363636]" />, name: "Solidity" },
            { icon: <SiSui className="text-[#363636]" />, name: "Sui" },
            { icon: <SiNextdotjs className="text-[#363636]" />, name: "NextJS" },
            { icon: <SiTypescript className="text-[#363636]" />, name: "TypeScript" },
            { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
            { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
            { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
            { icon: <SiPostgresql className="text-[#4169E1]" />, name: "PostgreSQL" },
        ],
        link: "https://arch-ai-dev.vercel",
        github: "https://github.com/Coding-With-Josh/arch-ai",
        image: archDemo
    };

    const otherProjects = [
        {
            title: "Sync AI",
            description: "A multi-chain token launchpad with an ai chatbot",
            technologies: [
                { icon: <SiSolana className="text-[#a658ea]" />, name: "Solana" },
                { icon: <SiEthereum className="text-[#3C3C3D]" />, name: "Ethereum" },
                { icon: <SiBitcoin className="text-[#363636]" />, name: "Bitcoin" },
                { icon: <SiSui className="text-[#363636]" />, name: "Sui" },
                { icon: <SiNextdotjs className="text-[#363636]" />, name: "NextJS" },
                { icon: <SiTypescript className="text-[#363636]" />, name: "TypeScript" },
                { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
                { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
                { icon: <SiPostgresql className="text-[#4169E1]" />, name: "PostgreSQL" },
            ],
            link: "https://sync-launch-pad.vercel",
            github: "https://github.com/Coding-With-Josh/sync-ai",
            image: syncDemo
        },
        {
            title: "Dot AI",
            description: "An AI-driven Solana gateway community for DAOs.",
            technologies: [
                { icon: <SiSolana className="text-[#a658ea]" />, name: "Solana" },
                { icon: <SiPython className="text-[#3776AB]" />, name: "Python" },
                { icon: <SiNextdotjs className="text-[#363636]" />, name: "NextJS" },
                { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
                { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
                { icon: <SiTypescript className="text-[#363636]" />, name: "TypeScript" },
                { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" }
            ],
            link: "https://dot.sol.vercel.app",
            github: "https://github.com/Coding-With-Josh/dot-ai",
            image: dotDemo
        },
        {
            title: "Grid AI",
            description: "A collaborative platform for devs, designers and writers",
            technologies: [
                { icon: <SiSolana className="text-[#a658ea]" />, name: "Solana" },
                { icon: <SiPython className="text-[#3776AB]" />, name: "Python" },
                { icon: <SiNextdotjs className="text-[#363636]" />, name: "NextJS" },
                { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
                { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
                { icon: <SiTypescript className="text-[#363636]" />, name: "TypeScript" },
                { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" }
            ],
            link: "https://grid-dev.vercel",
            github: "https://github.com/Coding-With-Josh/grid",
            image: gridDemo
        },
        {
            title: "Twist For Developers",
            description: "An all-in-one tooling software for developers to build.",
            technologies: [
                { icon: <SiSolana className="text-[#a658ea]" />, name: "Solana" },
                { icon: <SiPython className="text-[#3776AB]" />, name: "Python" },
                { icon: <SiNextdotjs className="text-[#363636]" />, name: "NextJS" },
                { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
                { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
                { icon: <SiTypescript className="text-[#363636]" />, name: "TypeScript" },
                { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
                { icon: <SiDocker className="text-[#2496ED]" />, name: "Docker" },
                { icon: <SiKubernetes className="text-[#326CE5]" />, name: "K8s" }
            ],
            link: "https://twistdev.vercel.app",
            github: "https://github.com/Coding-With-Josh/twistdev",
            image: twistDemo
        }
    ];

    return (
        <section className="max-w-3xl mx-auto px-4 py-8 min-h-screen">
            <h2 className="font-bold text-xl mb-6 text-neutral-900 dark:text-white">Here are my projects 😎</h2>
            <h2 className="font-bold text-lg mb-6 text-neutral-900 dark:text-white">Click on a project to see more on a dialog</h2>

            {/* Featured Project */}
            <MorphingDialog
                transition={{
                    type: 'spring',
                    bounce: 0.05,
                    duration: 0.25,
                }}
            >
                <MorphingDialogTrigger
                    style={{ borderRadius: '12px' }}
                    className="relative flex items-center justify-center w-full flex-col overflow-hidden border dark:border-neutral-800 border-neutral-200 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900/70 transition-all mb-8"
                >
                    <Star className="size-5 text-yellow-200 absolute top-4 right-4" fill="yellow" />
                    <MorphingDialogImage
                        src={featuredProject.image.src}
                        alt={featuredProject.title}
                        className="h-48 w-full object-cover hover:scale-105 transition-all"
                    />
                    <div className="flex flex-col items-center justify-center p-4 w-full">
                        <div className="flex flex-row items-center w-full justify-center">
                            <div>
                                <MorphingDialogTitle className="text-lg font-semibold text-neutral-900 dark:text-white">
                                    {featuredProject.title}
                                </MorphingDialogTitle>
                                <MorphingDialogSubtitle className="text-sm text-neutral-500 dark:text-neutral-400">
                                    {featuredProject.description}
                                </MorphingDialogSubtitle>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3 items-center justify-center">
                            {featuredProject.technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1.5 px-2.5 py-1 border rounded-full border-neutral-200 dark:border-neutral-800 text-xs text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800/30"
                                >
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                    <MorphingDialogContent
                        style={{ borderRadius: '24px' }}
                        className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border dark:border-neutral-800 border-neutral-200 bg-neutral-50 dark:bg-neutral-900 sm:max-w-2xl"
                    >
                        <MorphingDialogImage
                            src={featuredProject.image.src}
                            alt={featuredProject.title}
                            className="h-64 w-full object-cover hover:scale-105 transition-all"
                        />
                        <div className="p-6">
                            <MorphingDialogTitle className="text-2xl text-neutral-900 dark:text-white">
                                {featuredProject.title}
                            </MorphingDialogTitle>
                            <MorphingDialogSubtitle className="text-neutral-500 dark:text-neutral-400">
                                {featuredProject.description}
                            </MorphingDialogSubtitle>
                            <MorphingDialogDescription
                                disableLayoutAnimation
                                variants={{
                                    initial: { opacity: 0, scale: 0.8, y: 100 },
                                    animate: { opacity: 1, scale: 1, y: 0 },
                                    exit: { opacity: 0, scale: 0.8, y: 100 },
                                }}
                            >
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {featuredProject.technologies.map((tech, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-1.5 px-2.5 py-1 border rounded-full border-neutral-200 dark:border-neutral-800 text-xs text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800/30"
                                            >
                                                {tech.icon}
                                                <span>{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={featuredProject.link} className="text-sm flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                                            Live Demo <ArrowUpRight size={14} />
                                        </a>
                                        <a href={featuredProject.github} className="text-sm flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                                            View Code <ArrowUpRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </MorphingDialogDescription>
                        </div>
                        <MorphingDialogClose className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-white" />
                    </MorphingDialogContent>
                </MorphingDialogContainer>
            </MorphingDialog>

            {/* Other Projects Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherProjects.map((project, index) => (
                    <MorphingDialog
                        key={index}
                        transition={{
                            type: 'spring',
                            bounce: 0.05,
                            duration: 0.25,
                        }}
                    >
                        <MorphingDialogTrigger
                            style={{ borderRadius: '12px' }}
                            className="flex flex-col overflow-hidden border dark:border-neutral-800 border-neutral-200 bg-neutral-50 dark:bg-neutral-900/30 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-all"
                        >
                            <MorphingDialogImage
                                src={project.image.src}
                                alt={project.title}
                                className="h-32 w-full object-cover hover:scale-105 transition-all"
                            />
                            <div className="p-4">
                                <div className="flex flex-row items-start justify-center">
                                    <div>
                                        <MorphingDialogTitle className="text-base font-semibold text-neutral-900 dark:text-white">
                                            {project.title}
                                        </MorphingDialogTitle>
                                        <MorphingDialogSubtitle className="text-sm text-neutral-500 dark:text-neutral-400">
                                            {project.description}
                                        </MorphingDialogSubtitle>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 items-center justify-center mt-2">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-1.5 px-2 py-1 border rounded-full border-neutral-200 dark:border-neutral-800 text-xs text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800/30"
                                        >
                                            {tech.icon}
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <div className="flex items-center gap-1.5 px-2 py-1 border rounded-full border-neutral-200 dark:border-neutral-800 text-xs text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800/30">
                                            +{project.technologies.length - 3}
                                        </div>
                                    )}
                                    
                                </div>
                            </div>
                        </MorphingDialogTrigger>
                        <MorphingDialogContainer>
                            <MorphingDialogContent
                                style={{ borderRadius: '24px' }}
                                className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border dark:border-neutral-800 border-neutral-200 bg-neutral-50 dark:bg-neutral-900 sm:max-w-md"
                            >
                                <MorphingDialogImage
                                    src={project.image.src}
                                    alt={project.title}
                                    className="h-48 w-full object-cover hover:scale-105 transition-all"
                                />
                                <div className="p-6">
                                    <MorphingDialogTitle className="text-xl text-neutral-900 dark:text-white">
                                        {project.title}
                                    </MorphingDialogTitle>
                                    <MorphingDialogSubtitle className="text-neutral-500 dark:text-neutral-400">
                                        {project.description}
                                    </MorphingDialogSubtitle>
                                    <MorphingDialogDescription
                                        disableLayoutAnimation
                                        variants={{
                                            initial: { opacity: 0, scale: 0.8, y: 100 },
                                            animate: { opacity: 1, scale: 1, y: 0 },
                                            exit: { opacity: 0, scale: 0.8, y: 100 },
                                        }}
                                    >
                                        <div className="mt-4">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-1.5 px-2 py-1 border rounded-full border-neutral-200 dark:border-neutral-800 text-xs text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800/30"
                                                    >
                                                        {tech.icon}
                                                        <span>{tech.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex gap-3">
                                                <a href={project.link} className="text-sm flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                                                    Live Demo <ArrowUpRight size={14} />
                                                </a>
                                                <a href={project.github} className="text-sm flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                                                    View Code <ArrowUpRight size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    </MorphingDialogDescription>
                                </div>
                                <MorphingDialogClose className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-white" />
                            </MorphingDialogContent>
                        </MorphingDialogContainer>
                    </MorphingDialog>
                ))}
            </div>
        </section>
    );
};

export default Projects;
