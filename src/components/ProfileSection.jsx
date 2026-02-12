import React, { useState, useRef, useEffect } from "react";
import {
  FaReact,
  FaCode,
  FaRocket,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";
import {
  SiDotnet,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

import Profile from "../assets/profile4.jpeg";

const roles = [
  "Full Stack Developer",
  ".NET Developer",
  "Angular Developer",
  "React Developer",
  "MERN Stack Developer",
];

const ProfileSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const profileRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (isTyping) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  const handleMouseMove = (e) => {
    if (!profileRef.current) return;
    const rect = profileRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const floatingIcons = [
    { Icon: SiDotnet, color: "text-purple-400", delay: "0s", top: "5%", left: "10%" },
    { Icon: SiAngular, color: "text-red-400", delay: "1s", top: "15%", right: "5%" },
    { Icon: FaReact, color: "text-cyan-400", delay: "2s", bottom: "20%", left: "5%" },
    { Icon: SiJavascript, color: "text-yellow-400", delay: "3s", bottom: "10%", right: "10%" },
    { Icon: SiNodedotjs, color: "text-green-400", delay: "4s", top: "50%", left: "0%" },
    { Icon: SiTypescript, color: "text-blue-400", delay: "1.5s", top: "40%", right: "0%" },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-12 overflow-hidden"
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-purple-600/[0.07] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left — Text Content */}
      <div className="flex-1 text-center md:text-left relative z-10 max-w-2xl animate-fade-in-up">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-emerald-300 text-xs font-medium tracking-wide">
            Available for Opportunities
          </span>
        </div>

        {/* Greeting */}
        <p className="text-sm text-gray-400 font-medium tracking-[0.3em] uppercase mb-4">
          Hello World — I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-3 font-['Space_Grotesk']">
          <span className="gradient-text">Nabeel PP</span>
        </h1>

        {/* Typing role */}
        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
          <FaCode className="text-indigo-400 text-lg" />
          <span className="text-xl md:text-2xl text-gray-300 font-light font-['Space_Grotesk']">
            {displayText}
            <span className="inline-block w-[2px] h-6 bg-indigo-400 ml-1 animate-pulse" />
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
          I build modern, scalable web applications from frontend to backend.
          Specializing in{" "}
          <span className="text-indigo-300 font-medium">Angular</span>,{" "}
          <span className="text-purple-300 font-medium">.NET</span>, and the{" "}
          <span className="text-cyan-300 font-medium">MERN stack</span> — I turn
          complex ideas into clean, performant digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <a
            href="#projects"
            className="group relative flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FaRocket className="relative z-10 text-xs" />
            <span className="relative z-10">View My Work</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
          >
            <FaDownload className="text-xs" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex items-center gap-6 justify-center md:justify-start">
          {[
            { value: "2+", label: "Years Exp." },
            { value: "5+", label: "Projects" },
            { value: "10+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold gradient-text font-['Space_Grotesk']">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Profile Image */}
      <div
        className="flex-1 flex justify-center mt-16 md:mt-0 relative z-10 animate-fade-in-right delay-300"
        ref={profileRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          {/* Floating tech icons */}
          {floatingIcons.map(({ Icon, color, delay, ...pos }, i) => (
            <div
              key={i}
              className={`absolute ${color} animate-float opacity-50 z-0`}
              style={{
                ...pos,
                animationDelay: delay,
                animationDuration: "4s",
              }}
            >
              <Icon className="text-xl" />
            </div>
          ))}

          {/* Animated rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 rounded-full border border-indigo-500/10 animate-spin-slow" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 rounded-full border border-purple-500/[0.07]"
            style={{ animation: "spin-slow 30s linear infinite reverse" }}
          />

          {/* Image container with 3D effect */}
          <div
            className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 ease-out relative z-10"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x / 3}deg) rotateX(${-mousePosition.y / 3}deg) translateZ(15px)`,
              boxShadow: isHovered
                ? "0 0 50px rgba(99, 102, 241, 0.3), 0 25px 60px rgba(0, 0, 0, 0.5)"
                : "0 25px 50px rgba(0, 0, 0, 0.4)",
            }}
          >
            <img
              src={Profile}
              alt="Nabeel PP — Full Stack Developer"
              className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? "scale-110 brightness-110 grayscale-0" : "scale-100 grayscale hover:grayscale-0"
                }`}
            />

            {/* Hover overlay gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                }`}
            />
          </div>

          {/* Name badge */}
          <div
            className={`absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-xl bg-gray-900/90 border border-white/10 backdrop-blur-sm shadow-xl transition-all duration-500 z-20 ${isHovered
              ? "scale-105 border-indigo-500/30 shadow-indigo-500/10"
              : ""
              }`}
          >
            <span className="text-sm font-semibold flex items-center gap-2">
              <FaCode className="text-indigo-400 text-xs" />
              <span className="gradient-text">
                {isHovered ? "Full Stack Developer" : "Nabeel PP"}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce z-10">
        <span className="text-[10px] text-gray-500 tracking-widest uppercase">
          Scroll
        </span>
        <FaArrowDown className="text-gray-500 text-xs" />
      </div>
    </section>
  );
};

export default ProfileSection;
