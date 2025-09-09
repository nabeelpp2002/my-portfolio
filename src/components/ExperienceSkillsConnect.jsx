import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaInstagram,
  FaEnvelope,
  FaBriefcase,
  FaTools,
  FaHandshake,
  FaGithub,
  FaGit,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaCode,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";

const ExperienceSkillsConnect = () => {
  return (
    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl shadow-2xl border border-gray-800">
      {/* Left - Experience */}
      <div className="bg-gray-800/50 p-6 rounded-3xl border border-gray-700/50 shadow-inner backdrop-blur-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-cyan-300 flex items-center">
            <FaBriefcase className="mr-2" /> Experience
          </h2>
          <div className="bg-cyan-500/20 px-3 py-1 rounded-2xl text-xs text-cyan-300 border border-cyan-500/30">
            01 Years
          </div>
        </div>

        <div className="space-y-6">
          {/* Full Stack Developer */}
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-4">
              <div className="w-4 h-4 bg-green-400/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="w-0.5 h-16 bg-gradient-to-b from-green-400/30 to-transparent mt-1"></div>
            </div>
            <div className="flex-1">
              <span className="text-white font-medium">
                Full Stack Developer
              </span>
              <p className="text-gray-400 text-sm">Full-time</p>
            </div>
            <div className="text-cyan-300 text-sm font-medium">
              Apr 2024 – Present
            </div>
          </div>

          {/* Dream Alle */}
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-4">
              <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-0.5 h-16 bg-gradient-to-b from-gray-600 to-transparent mt-1"></div>
            </div>
            <div className="flex-1">
              <span className="text-white font-medium">Dream Alle</span>
              <p className="text-gray-400 text-sm">React Developer Intern</p>
            </div>
            <div className="text-gray-400 text-sm">Aug 2024 – Mar 2025</div>
          </div>

          {/* Quest Innovative Solutions */}
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-4">
              <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-white font-medium">
                Quest Innovative Solutions
              </span>
              <p className="text-gray-400 text-sm">
                Trainee Software Developer
              </p>
            </div>
            <div className="text-gray-400 text-sm">Jul 2024 – Mar 2025</div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-black/20 rounded-b-3xl">
          <p className="text-gray-400 text-xs mb-4">Companies I Worked With</p>
          <div className="flex flex-wrap gap-2">
            {["Dream Alle", "Quest Innovative Solutions"].map(
              (company, index) => (
                <div
                  key={index}
                  className="bg-gray-700/50 p-2 rounded-lg flex items-center justify-center border border-gray-600/30"
                >
                  <span className="text-gray-300 text-xs">{company}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* Middle - Skills + Essential */}
      <div className="flex flex-col gap-6">
        {/* Skills & Expertise */}
        <div className="bg-gray-800/50 p-6 rounded-3xl border border-gray-700/50 shadow-inner backdrop-blur-sm">
          <h2 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
            <FaTools className="mr-2" /> Skills & Expertise
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Full Stack .NET Development",
              "MERN Stack Development",
              "RESTful APIs",
              "Database Design (SQL, MongoDB, PostgreSQL)",
              "Authentication & Authorization",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-purple-500/20 px-3 py-1.5 rounded-2xl text-xs text-purple-300 border border-purple-500/30"
              >
                {skill}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "React & React Native",
              "ASP.NET Core",
              "Node.js & Express.js",
              "UI/UX Implementation",
              "Problem Solving",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-pink-500/20 px-3 py-1.5 rounded-2xl text-xs text-pink-300 border border-pink-500/30"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Essential Stacks */}
        <div className="bg-gray-800/50 p-6 rounded-3xl border border-gray-700/50 shadow-inner backdrop-blur-sm">
          <h2 className="text-xl font-bold text-cyan-300 mb-2 flex items-center">
            <FaGit className="mr-2" /> Essential Stacks
          </h2>
          <p className="text-gray-400 text-xs mb-6">
            A Comprehensive Collection of Tools I Use to Build and Optimize My
            Workflow
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "Git", icon: <FaGit className="text-2xl text-red-500" /> },
              {
                name: "GitHub",
                icon: <FaGithub className="text-2xl text-gray-300" />,
              },
              {
                name: "Visual Studio",
                icon: <FaLaptopCode className="text-2xl text-blue-400" />,
              },
              {
                name: "VS Code",
                icon: <FaCode className="text-2xl text-blue-500" />,
              },
              {
                name: "Postman",
                icon: <FaServer className="text-2xl text-orange-400" />,
              },
              {
                name: "MongoDB",
                icon: <FaDatabase className="text-2xl text-green-500" />,
              },
              {
                name: "MySQL",
                icon: <FaDatabase className="text-2xl text-blue-600" />,
              },
              {
                name: "PostgreSQL",
                icon: <FaDatabase className="text-2xl text-indigo-400" />,
              },
              {
                name: "Node.js",
                icon: <FaNodeJs className="text-2xl text-green-400" />,
              },
              {
                name: "React",
                icon: <FaReact className="text-2xl text-cyan-400" />,
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-700/50 p-3 rounded-xl flex flex-col items-center justify-center h-20 border border-gray-600/30 hover:bg-gray-700/70 transition-colors"
              >
                {tool.icon}
                <span className="text-gray-300 text-xs mt-1">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Connect */}
<div className="bg-gray-800/50 p-6 rounded-3xl border border-gray-700/50 shadow-inner backdrop-blur-sm flex-1">
  <h2 className="text-xl font-bold text-pink-300 mb-6 flex items-center">
    <FaHandshake className="mr-2" /> Connect
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    {[
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nabeel-p-p-a68b40239",
        icon: <FaLinkedin className="text-blue-400" />,
        color: "hover:bg-blue-500/20",
      },
      {
        name: "X (Twitter)",
        url: "https://twitter.com/nabeel_pp__",
        icon: <FaTwitter className="text-cyan-300" />,
        color: "hover:bg-cyan-500/20",
      },
      {
        name: "Telegram",
        url: "https://t.me/nabeelpp2002",
        icon: <FaTelegram className="text-blue-400" />,
        color: "hover:bg-blue-500/20",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/nab__el_?igsh=aWg4c3VjaWMzc25n",
        icon: <FaInstagram className="text-pink-400" />,
        color: "hover:bg-pink-500/20",
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/917736674340",
        icon: <FaEnvelope className="text-green-400" />,
        color: "hover:bg-green-500/20",
      },
    ].map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener"
        className={`flex items-center space-x-3 p-3 rounded-lg bg-gray-700/50 border border-gray-600/30 transition-all ${social.color} hover:scale-[1.02]`}
      >
        {social.icon}
        <span className="text-gray-300">{social.name}</span>
      </a>
    ))}
  </div>
  <div className="border-t border-gray-700/50 pt-6">
    <div className="flex items-center space-x-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
      <div className="bg-cyan-500/20 p-2 rounded-md">
        <FaEnvelope className="text-cyan-300" />
      </div>
      <div>
        <p className="text-gray-400 text-sm">Let's Work Together!</p>
        <p className="text-gray-200 text-sm">
          <span className="text-gray-400">Send Email </span> →{" "}
          <a
            href="mailto:nabeelpp2002@gmail.com"
            className="text-cyan-300 hover:underline"
          >
            nabeelpp2002@gmail.com
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ExperienceSkillsConnect;
