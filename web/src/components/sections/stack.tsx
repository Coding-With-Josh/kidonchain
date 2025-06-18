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
    SiSolana,
    SiSui,
} from "react-icons/si";

const Stack = () => {
    const technologies = [
        // Web Development
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
        { icon: <SiGraphql className="text-[#E10098]" />, name: "GraphQL" },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind CSS" },
        
        // DevOps
        { icon: <SiDocker className="text-[#2496ED]" />, name: "Docker" },
        { icon: <SiGit className="text-[#F05032]" />, name: "Git" },
        { icon: <SiKubernetes className="text-[#326CE5]" />, name: "Kubernetes" },
        
        // Blockchain
        { icon: <SiEthereum className="text-[#3C3C3D]" />, name: "Ethereum" },
        { icon: <SiSolidity className="text-[#363636]" />, name: "Solidity" },
        { icon: <SiWeb3Dotjs className="text-[#F16822]" />, name: "Web3.js" },
        { icon: <SiBitcoin className="text-[#F7931A]" />, name: "Bitcoin" },
        { icon: <SiSolana className="text-[#943dff]" />, name: "Solana" },
        { icon: <SiSui className="text-[#1aadf7]" />, name: "Sui" },
        // Backend
        { icon: <SiPython className="text-[#3776AB]" />, name: "Python" },
        { icon: <SiGo className="text-[#00ADD8]" />, name: "Go" },
        { icon: <SiRust className="text-[#000000]" />, name: "Rust" },
        
        // Databases
        { icon: <SiPostgresql className="text-[#4169E1]" />, name: "PostgreSQL" },
        { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
        
        // Mobile
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React Native" },
        
        // Testing
        { icon: <SiJest className="text-[#C21325]" />, name: "Jest" }
    ];

    return (
        <div className="flex flex-col items-start justify-center gap-6 w-full max-w-[26.2rem] mx-auto px-4 py-12 min-h-screen">
            <h2 className="font-bold text-left text-xl">My Stack</h2>
            <div className="w-full flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 py-2  px-3 border dark:border-neutral-800 text-sm dark:text-white dark:bg-neutral-800/30 dark:hover:bg-neutral-800/40 transition-all rounded-full cursor-grab w-fit justify-start"
                    >
                        {tech.icon}
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stack;