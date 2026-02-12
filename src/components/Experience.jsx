import React from "react";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
    {
        title: "Full Stack Developer (MERN & React Native)",
        company: "DreamAlle Solutions",
        location: "Remote",
        period: "Aug 2024 – Present",
        type: "Part Time",
        color: "blue",
        active: true,
        description: [
            "Engineered scalable full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), optimizing performance and maintainability",
            "Developed and published cross-platform mobile applications with React Native, leveraging reusable components and shared APIs",
            "Implemented secure authentication and authorization (JWT, OAuth) and integrated RESTful/GraphQL APIs with real-time features (WebSockets)",
            "Deployed applications to cloud platforms (Vercel, Render, Firebase) ensuring availability, scalability, and smooth experience",
            "Collaborated in Agile teams using GitHub workflows, ensuring high-quality, production-ready deliverables",
        ],
        tech: ["MERN Stack", "React Native", "JWT", "GraphQL", "WebSockets", "Firebase", "Vercel"],
    },
    {
        title: "Full Stack Developer Intern",
        company: "Geeky Wolf",
        location: "Remote",
        period: "Oct 2025 – Feb 2026",
        type: "Internship",
        color: "indigo",
        active: false,
        description: [
            "Worked on the ControlQore ERP system designed for construction companies",
            "Developed and maintained frontend modules using Angular for responsive and dynamic UIs",
            "Implemented backend services using ASP.NET and .NET for business logic and data handling",
            "Integrated APIs and managed database operations to support ERP functionalities",
            "Collaborated with the dev team to enhance performance, usability, and reliability",
            "Participated in debugging, testing, and deploying ERP modules",
        ],
        tech: ["Angular", "ASP.NET", ".NET", "SQL", "REST APIs"],
    },
    {
        title: "Dotnet Full Stack Development Trainee",
        company: "Quest Innovative Solutions Pvt Ltd",
        location: "Cochin",
        period: "Jul 2024 – Mar 2025",
        type: "Training",
        color: "purple",
        active: false,
        description: [
            "Built console-based Food Ordering System in C# applying OOP principles",
            "Developed interactive web apps — Calculator, Chess Board, Facebook homepage replica",
            "Created and maintained databases for multiple applications",
            "Developed web applications using ASP.NET, ADO.NET, Entity Framework, and MVC",
            "Designed responsive web pages using Bootstrap",
        ],
        tech: ["C#", "ASP.NET MVC", "Entity Framework", "ADO.NET", "Bootstrap", "JavaScript"],
    },
    {
        title: "Freelance Web Developer",
        company: "Creations Interior Design",
        location: "Bangalore",
        period: "Sep 2024",
        type: "Freelance",
        color: "pink",
        active: false,
        description: [
            "Developed a portfolio website for 'Creations', an interior design company",
            "Contributed to both UI/UX design and front-end development",
        ],
        tech: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    },
    {
        title: "Freelance Web Developer",
        company: "Paris Essence",
        location: "Doha, Qatar",
        period: "Jun 2024",
        type: "Freelance",
        color: "cyan",
        active: false,
        description: [
            "Developed a website for 'Paris Essence', a perfume company",
            "Focused on front-end development, enhancing user experience and interface design",
        ],
        tech: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    },
    {
        title: "Short Internship",
        company: "Dinesh IT System",
        location: "Kannur",
        period: "May 2023",
        type: "Internship",
        color: "emerald",
        active: false,
        description: [
            "Contributed to Labour Bank Project",
            "Worked with UI/UX design, front-end development, and assisted in coding",
        ],
        tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
    },
];

const colorMap = {
    blue: {
        dot: "bg-blue-500",
        dotRing: "bg-blue-500/20",
        line: "from-blue-500/40",
        badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
        tag: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    },
    indigo: {
        dot: "bg-indigo-500",
        dotRing: "bg-indigo-500/20",
        line: "from-indigo-500/40",
        badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
        tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    },
    purple: {
        dot: "bg-purple-500",
        dotRing: "bg-purple-500/20",
        line: "from-purple-500/40",
        badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        tag: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    },
    pink: {
        dot: "bg-pink-500",
        dotRing: "bg-pink-500/20",
        line: "from-pink-500/40",
        badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",
        tag: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    },
    cyan: {
        dot: "bg-cyan-500",
        dotRing: "bg-cyan-500/20",
        line: "from-cyan-500/40",
        badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
        tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    },
    emerald: {
        dot: "bg-emerald-500",
        dotRing: "bg-emerald-500/20",
        line: "from-emerald-500/40",
        badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    },
};

const Experience = () => {
    return (
        <section id="experience" className="section-padding relative">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-indigo-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                        My Journey
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk']">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-transparent" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => {
                            const colors = colorMap[exp.color];
                            return (
                                <div
                                    key={index}
                                    className="relative pl-16 md:pl-20 group"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 md:left-6 top-6 z-10">
                                        <div className={`w-4 h-4 rounded-full ${colors.dotRing} flex items-center justify-center`}>
                                            <div className={`w-2 h-2 rounded-full ${colors.dot} ${exp.active ? 'animate-pulse' : ''}`} />
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="glass-card glass-card-hover p-6 transition-all duration-300">
                                        {/* Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h3 className="text-white font-semibold text-lg">
                                                        {exp.title}
                                                    </h3>
                                                    <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${colors.badge}`}>
                                                        {exp.type}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm">
                                                    <span className="text-gray-300 font-medium">
                                                        {exp.company}
                                                    </span>
                                                    <span className="flex items-center gap-1 text-gray-500 text-xs">
                                                        <FaMapMarkerAlt className="text-[10px]" />
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-400 font-medium whitespace-nowrap bg-white/[0.03] px-3 py-1 rounded-lg">
                                                {exp.period}
                                            </span>
                                        </div>

                                        {/* Description bullets */}
                                        <ul className="space-y-2 mb-4">
                                            {exp.description.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed"
                                                >
                                                    <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${colors.dot}`} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`px-2.5 py-1 text-[11px] font-medium rounded-lg border ${colors.tag}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
