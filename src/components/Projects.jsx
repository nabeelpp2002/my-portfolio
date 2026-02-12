import React, { useState } from "react";
import {
    FaShoppingCart,
    FaBriefcase,
    FaAssistiveListeningSystems,
    FaCartPlus,
    FaPlane,
    FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
    {
        title: "E-Commerce Website",
        subtitle: "MVC Architecture",
        description:
            "Full-featured e-commerce platform with secure authentication, product listings, cart functionality, and checkout workflow. Built using the MVC design pattern with robust database operations.",
        highlights: [
            "Secure user authentication & session management",
            "Product listing, cart, and complete checkout flow",
            "Entity Framework for product and order management",
        ],
        tech: ["ASP.NET MVC", "Entity Framework", "MSSQL", "HTML", "CSS", "JavaScript"],
        icon: FaShoppingCart,
        color: "indigo",
        gradient: "from-indigo-500 to-purple-600",
    },
    {
        title: "Job Portal Web App",
        subtitle: "MVC Architecture",
        description:
            "A dual-role job portal enabling job seekers to browse and apply for jobs, and employers to manage postings and review candidates with real-time application tracking.",
        highlights: [
            "Role-based auth for Job Seekers & Employers",
            "Job search with category/location filters",
            "Dashboard with real-time application tracking",
        ],
        tech: ["ASP.NET MVC", "Entity Framework", "MSSQL", "Razor Views", "Bootstrap"],
        icon: FaBriefcase,
        color: "purple",
        gradient: "from-purple-500 to-pink-600",
    },
    {
        title: "SoundSee",
        subtitle: "ML-Powered Accessibility",
        description:
            "An ML-powered application designed to help deaf individuals recognize common environmental sounds using real-time audio classification.",
        highlights: [
            "Google Teachable Machine for ML model",
            "Cross-platform Flutter mobile app",
            "Supabase backend for data management",
        ],
        tech: ["Google Teachable Machine", "Flutter", "HTML", "CSS", "JavaScript", "Supabase"],
        icon: FaAssistiveListeningSystems,
        color: "cyan",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        title: "Smart Shopping Cart",
        subtitle: "IoT Module",
        description:
            "An IoT-based smart shopping cart module that simplifies traditional shopping using RFID technology for automatic item detection and billing.",
        highlights: [
            "RFID reader for automatic item scanning",
            "NodeMCU microcontroller integration",
            "Real-time web interface for cart management",
        ],
        tech: ["HTML", "CSS", "JavaScript", "RFID Reader", "NodeMCU"],
        icon: FaCartPlus,
        color: "emerald",
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        title: "Tours & Travel Management",
        subtitle: "Database Management System",
        description:
            "A complete tour management system where operators can create and manage tour packages, and users can browse and book tours. Built around CRUD operations with a relational database.",
        highlights: [
            "Tour package CRUD management",
            "User booking system",
            "MySQL database design",
        ],
        tech: ["HTML", "CSS", "JavaScript", "MySQL"],
        icon: FaPlane,
        color: "pink",
        gradient: "from-pink-500 to-rose-600",
    },
];

const colorMap = {
    indigo: "border-indigo-500/20 hover:border-indigo-500/40",
    purple: "border-purple-500/20 hover:border-purple-500/40",
    cyan: "border-cyan-500/20 hover:border-cyan-500/40",
    emerald: "border-emerald-500/20 hover:border-emerald-500/40",
    pink: "border-pink-500/20 hover:border-pink-500/40",
};

const techColorMap = {
    indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    pink: "bg-pink-500/10 text-pink-300 border-pink-500/20",
};

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" className="section-padding relative">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/[0.03] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-indigo-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                        What I've Built
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk']">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
                        A collection of academic and personal projects showcasing my
                        full-stack development capabilities.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        const isHovered = hoveredProject === index;

                        return (
                            <div
                                key={index}
                                className={`glass-card p-6 transition-all duration-500 cursor-default border ${colorMap[project.color]
                                    } ${isHovered
                                        ? "transform -translate-y-2 shadow-2xl shadow-black/30"
                                        : ""
                                    }`}
                                onMouseEnter={() => setHoveredProject(index)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Icon & Title */}
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${isHovered ? "scale-110 rotate-3" : ""
                                            }`}
                                    >
                                        <Icon className="text-white text-lg" />
                                    </div>
                                    <FaExternalLinkAlt
                                        className={`text-gray-600 text-xs transition-all duration-300 ${isHovered
                                            ? "text-indigo-400 translate-x-0.5 -translate-y-0.5"
                                            : ""
                                            }`}
                                    />
                                </div>

                                {/* Title & Subtitle */}
                                <h3 className="text-white font-semibold text-lg mb-0.5">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-xs font-medium mb-3">
                                    {project.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-1.5 mb-5">
                                    {project.highlights.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-gray-400 text-xs"
                                        >
                                            <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 bg-gradient-to-r ${project.gradient}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-2 py-0.5 text-[10px] font-medium rounded-md border ${techColorMap[project.color]
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
