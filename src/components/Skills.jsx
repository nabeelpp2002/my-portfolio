import React from "react";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaBootstrap,
    FaFigma,
    FaCode,
    FaLaptopCode,
    FaServer,
} from "react-icons/fa";
import {
    SiDotnet,
    SiAngular,
    SiJavascript,
    SiTypescript,
    SiSharp,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPostman,
    SiHtml5,
    SiCss3,
    SiSupabase,
    SiFlutter,
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        color: "indigo",
        gradient: "from-indigo-500 to-purple-600",
        skills: [
            { name: "Angular", icon: SiAngular, color: "text-red-400" },
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
            { name: "HTML5", icon: SiHtml5, color: "text-orange-400" },
            { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
            { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-400" },
        ],
    },
    {
        title: "Backend",
        color: "purple",
        gradient: "from-purple-500 to-pink-600",
        skills: [
            { name: "ASP.NET", icon: SiDotnet, color: "text-purple-400" },
            { name: ".NET Core", icon: SiDotnet, color: "text-indigo-400" },
            { name: "C#", icon: SiSharp, color: "text-green-400" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Entity Framework", icon: SiDotnet, color: "text-blue-400" },
            { name: "ADO.NET", icon: SiDotnet, color: "text-cyan-400" },
            { name: "REST APIs", icon: FaServer, color: "text-emerald-400" },
        ],
    },
    {
        title: "Database",
        color: "cyan",
        gradient: "from-cyan-500 to-blue-600",
        skills: [
            { name: "MSSQL", icon: FaDatabase, color: "text-red-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
            { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400" },
            { name: "Supabase", icon: SiSupabase, color: "text-emerald-400" },
        ],
    },
    {
        title: "Tools & Others",
        color: "emerald",
        gradient: "from-emerald-500 to-teal-600",
        skills: [
            { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
            { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
            { name: "VS Code", icon: FaCode, color: "text-blue-500" },
            { name: "Visual Studio", icon: FaLaptopCode, color: "text-purple-500" },
            { name: "Postman", icon: SiPostman, color: "text-orange-400" },
            { name: "Figma", icon: FaFigma, color: "text-pink-400" },
            { name: "Flutter", icon: SiFlutter, color: "text-cyan-400" },
        ],
    },
];

const categoryBorderColors = {
    indigo: "border-indigo-500/20",
    purple: "border-purple-500/20",
    cyan: "border-cyan-500/20",
    emerald: "border-emerald-500/20",
};

const Skills = () => {
    return (
        <section id="skills" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-indigo-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                        My Toolbox
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk']">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
                        Technologies and tools I use to build modern, scalable applications
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className={`glass-card p-6 border ${categoryBorderColors[category.color]
                                } transition-all duration-300 hover:border-opacity-60`}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}
                                >
                                    <FaDatabase className="text-white text-sm" />
                                </div>
                                <h3 className="text-white font-semibold text-lg">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 cursor-default"
                                        >
                                            <Icon
                                                className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                                            />
                                            <span className="text-gray-400 text-[10px] font-medium text-center group-hover:text-gray-300 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom: Core Competencies */}
                <div className="mt-10 glass-card p-6">
                    <h3 className="text-white font-semibold text-sm mb-4 text-center uppercase tracking-wider">
                        Core Competencies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            "Full Stack .NET Development",
                            "MERN Stack Development",
                            "MVC Architecture",
                            "RESTful API Design",
                            "Database Design & Optimization",
                            "Authentication & Authorization",
                            "ERP Systems",
                            "UI/UX Implementation",
                            "Responsive Web Design",
                            "Problem Solving",
                            "Agile Development",
                            "IoT Integration",
                        ].map((competency) => (
                            <span
                                key={competency}
                                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-gray-300 border border-indigo-500/10 hover:border-indigo-500/30 transition-colors cursor-default"
                            >
                                {competency}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
