import React, { useState, useRef, useEffect } from "react";
import {
  FaReact,
  FaFigma,
  FaCode,
  FaPaintBrush,
  FaRocket,
  FaMagic,
  FaStar,
  FaLightbulb,
} from "react-icons/fa";
import { FaJsSquare, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";

import Profile from "../assets/profile3.png";
import Profile2 from "../assets/profile2.png";

const ProfileSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileRef = useRef(null);
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    if (!profileRef.current) return;

    const rect = profileRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

    setMousePosition({ x, y });
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
    setGlitchEffect(false);
  };

  // Trigger glitch effect randomly
  useEffect(() => {
    if (isHovered) {
      const glitchInterval = setInterval(() => {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 100);
      }, 3000);

      return () => clearInterval(glitchInterval);
    }
  }, [isHovered]);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Left: Intro & Skills */}
      <div className="flex-1 text-center md:text-left relative z-10">
        <p className="text-lg text-cyan-300 mb-3 font-light tracking-wider">
          HELLO WORLD!
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            I'm Nabeel
          </span>
          <br />
          <span className="text-xl md:text-2xl text-gray-300 font-light mt-2 block">
            Web Developer & UI/UX Designer
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
          I craft modern, user-friendly digital experiences with a focus on
          clean design and seamless interactions. From frontend visuals to
          backend logic, I bring ideas to life with precision and creativity.
        </p>

        {/* My Skills */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
          {[
            {
              name: "React Native",
              color: "bg-cyan-500/20",
              text: "text-cyan-300",
              border: "border-cyan-500/30",
              icon: <FaReact className="inline mr-1" />,
            },
            {
              name: "JavaScript",
              color: "bg-yellow-500/20",
              text: "text-yellow-300",
              border: "border-yellow-500/30",
              icon: <FaJsSquare className="inline mr-1" />,
            },
            {
              name: "UI/UX Design",
              color: "bg-purple-500/20",
              text: "text-purple-300",
              border: "border-purple-500/30",
              icon: <FaFigma className="inline mr-1" />,
            },
            {
              name: "HTML5",
              color: "bg-orange-500/20",
              text: "text-orange-300",
              border: "border-orange-500/30",
              icon: <FaHtml5 className="inline mr-1" />,
            },
            {
              name: "CSS3",
              color: "bg-blue-500/20",
              text: "text-blue-300",
              border: "border-blue-500/30",
              icon: <FaCss3Alt className="inline mr-1" />,
            },
            {
              name: "Git & GitHub",
              color: "bg-gray-500/20",
              text: "text-gray-300",
              border: "border-gray-500/30",
              icon: <FaGithub className="inline mr-1" />,
            },
          ].map((skill) => (
            <div
              key={skill.name}
              className={`px-4 py-2 rounded-full border ${skill.border} ${skill.color} ${skill.text} shadow-lg text-sm transition-all duration-300 hover:scale-105 flex items-center`}
            >
              {skill.icon} {skill.name}
            </div>
          ))}
        </div>

        {/* Availability + Timezone */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/10 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
            <p className="text-sm text-green-300">Available for Projects</p>
          </div>
          <div className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <p className="text-sm text-cyan-300">Kannur, Kerala • UTC +5:30</p>
          </div>
        </div>
      </div>

      {/* Right: Enhanced Profile Image with Effects */}
      <div
        className="flex-1 flex justify-center mt-16 md:mt-0 relative"
        ref={profileRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main Image Container */}
        <div className="relative">
          {/* Animated gradient rings */}
          <div className="absolute inset-0 -z-10">
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-cyan-500/20 ${
                isHovered ? "w-80 h-80 rotate-180" : "w-72 h-72 rotate-0"
              } transition-all duration-1000 ease-in-out`}
            ></div>
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-purple-500/20 ${
                isHovered ? "w-96 h-96 -rotate-180" : "w-84 h-84 rotate-0"
              } transition-all duration-1200 ease-in-out`}
            ></div>
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-pink-500/20 ${
                isHovered
                  ? "w-[28rem] h-[28rem] rotate-180"
                  : "w-96 h-96 rotate-0"
              } transition-all duration-1400 ease-in-out`}
            ></div>
          </div>

          {/* Floating container with enhanced transform effects */}
          <div
            className="w-64 h-64 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transition-all duration-500 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${
                mousePosition.x / 2
              }deg) rotateX(${-mousePosition.y / 2}deg) translateZ(20px)`,
              boxShadow: isHovered
                ? `0 0 40px rgba(0, 255, 255, 0.4), 0 0 80px rgba(192, 75, 255, 0.3), ${
                    mousePosition.x / 4
                  }px ${mousePosition.y / 4}px 60px rgba(0, 0, 0, 0.5)`
                : "0 25px 50px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* Main profile image with transition */}
            <img
              src={isHovered ? Profile2 : Profile}
              alt="Nabeel"
              className={`w-full h-full object-cover transition-all duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              } ${glitchEffect ? "glitch-effect" : ""}`}
              style={{
                filter: isHovered ? "brightness(1.1) contrast(1.1)" : "none",
              }}
            />

            {/* Glitch overlay effect */}
            {glitchEffect && (
              <>
                <div className="absolute inset-0 bg-cyan-400/10 mix-blend-overlay glitch-animation"></div>
                <div className="absolute inset-0 bg-pink-400/10 mix-blend-overlay glitch-animation delay-100"></div>
              </>
            )}

            {/* Icon effects that appear on hover */}
            {isHovered && (
              <>
                <div className="absolute top-6 left-6 text-cyan-400 animate-float">
                  <FaCode className="text-2xl" />
                </div>
                <div className="absolute top-6 right-6 text-purple-400 animate-float delay-300">
                  <FaRocket className="text-2xl" />
                </div>
                <div className="absolute bottom-6 left-6 text-pink-400 animate-float delay-700">
                  <FaPaintBrush className="text-2xl" />
                </div>
                <div className="absolute bottom-6 right-6 text-cyan-400 animate-float delay-500">
                  <FaReact className="text-2xl" />
                </div>
                <div className="absolute top-1/2 left-4 text-yellow-400 animate-float delay-1000">
                  <FaStar className="text-xl" />
                </div>
                <div className="absolute top-1/2 right-4 text-orange-400 animate-float delay-1200">
                  <FaLightbulb className="text-xl" />
                </div>
              </>
            )}
          </div>

          {/* Hexagon pattern overlay */}
          <div className="absolute inset-0 -z-5 opacity-30 mix-blend-overlay">
            <div className="w-full h-full pattern-hexagon pattern-cyan-500 pattern-opacity-20 pattern-size-8"></div>
          </div>
        </div>

        {/* Enhanced Floating Badge with animation */}
        <div
          className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 border border-white/20 rounded-2xl shadow-2xl transition-all duration-500 ${
            isHovered ? "scale-110 -rotate-3 glow" : ""
          }`}
        >
          <span className="text-white font-semibold text-sm flex items-center gap-2">
            {isHovered ? (
              <>
                <FaCode className="text-cyan-300" />
                <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
                <FaMagic className="text-purple-300" />
              </>
            ) : (
              <>
                <FaCode className="text-cyan-300" />
                <span>Nabeel</span>
              </>
            )}
          </span>
        </div>

        {/* Mouse follow highlight effect */}
        <div
          className="absolute inset-0 opacity-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl transition-all duration-300 pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 3}px, ${
              mousePosition.y * 3
            }px)`,
            opacity: isHovered ? 0.6 : 0,
          }}
        ></div>
      </div>

      {/* Custom CSS for additional effects */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .glitch-effect {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.6),
            0 0 40px rgba(192, 75, 255, 0.4);
        }
        .pattern-hexagon {
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm1 1v18h18V1H1z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default ProfileSection;
