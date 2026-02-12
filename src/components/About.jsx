import React from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-indigo-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                        Get To Know Me
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk']">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left — Bio */}
                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I'm a passionate{" "}
                            <span className="text-indigo-300 font-medium">
                                Full Stack Developer
                            </span>{" "}
                            from Kannur, Kerala, with hands-on experience building enterprise-grade
                            applications using{" "}
                            <span className="text-purple-300 font-medium">Angular</span>,{" "}
                            <span className="text-purple-300 font-medium">ASP.NET</span>, and the{" "}
                            <span className="text-cyan-300 font-medium">MERN stack</span>.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            From developing ERP systems for construction companies to crafting
                            beautiful freelance websites, I bring a blend of technical depth and
                            creative problem-solving to every project. I've contributed to
                            full-stack solutions spanning frontend interfaces, backend services,
                            API integrations, and database design.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            My journey includes working on real-world products at companies like{" "}
                            <span className="text-white font-medium">Geeky Wolf</span> and{" "}
                            <span className="text-white font-medium">
                                Quest Innovative Solutions
                            </span>
                            , alongside freelance projects for international and local clients.
                        </p>

                        {/* Location & Info */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-sm">
                                <FaMapMarkerAlt className="text-indigo-400" />
                                <span className="text-gray-300">Kannur, Kerala, India</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-sm">
                                <FaCalendarAlt className="text-purple-400" />
                                <span className="text-gray-300">Since 2023</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — Education & Stats */}
                    <div className="space-y-6">
                        {/* Education Card */}
                        <div className="glass-card p-6 space-y-4">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <FaGraduationCap className="text-indigo-400" />
                                <span className="text-white">Education</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="border-l-2 border-indigo-500/30 pl-4">
                                    <p className="text-white font-medium text-sm">
                                        Dotnet Full Stack Development Training
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Quest Innovative Solutions Pvt Ltd, Cochin
                                    </p>
                                    <p className="text-indigo-400 text-xs mt-1">
                                        Jul 2024 – Mar 2025
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    value: "5+",
                                    label: "Companies Worked",
                                    gradient: "from-indigo-500 to-purple-600",
                                },
                                {
                                    value: "5+",
                                    label: "Projects Built",
                                    gradient: "from-purple-500 to-pink-600",
                                },
                                {
                                    value: "2+",
                                    label: "Years Experience",
                                    gradient: "from-cyan-500 to-indigo-600",
                                },
                                {
                                    value: "10+",
                                    label: "Technologies",
                                    gradient: "from-pink-500 to-rose-600",
                                },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="glass-card glass-card-hover p-5 text-center transition-all duration-300 cursor-default"
                                >
                                    <div
                                        className={`text-3xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-['Space_Grotesk']`}
                                    >
                                        {stat.value}
                                    </div>
                                    <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
