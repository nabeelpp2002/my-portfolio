import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaCogs,
  FaEnvelope,
} from "react-icons/fa";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: "home", name: "Home", icon: FaHome },
    { id: "about", name: "About", icon: FaUser },
    { id: "experience", name: "Experience", icon: FaBriefcase },
    { id: "projects", name: "Projects", icon: FaProjectDiagram },
    { id: "skills", name: "Skills", icon: FaCogs },
    { id: "contact", name: "Contact", icon: FaEnvelope },
  ];

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section detection
  useEffect(() => {
    // Small delay to ensure all section components have rendered to the DOM
    const timer = setTimeout(() => {
      const sections = navItems.map((item) => document.getElementById(item.id));

      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      };

      const intersectionMap = new Map();

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          intersectionMap.set(entry.target.id, entry.intersectionRatio);
        });

        let maxRatio = -1;
        let mostVisibleId = activeSection;

        intersectionMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleId = id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(mostVisibleId);
        }
      }, observerOptions);

      sections.forEach((section) => {
        if (section) observer.observe(section);
      });

      return () => observer.disconnect();
    }, 100);

    // Fallback for reaching bottom of page
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isBottom) {
        setActiveSection("contact");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -20;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-95 translate-y-0"
        }`}
    >
      {/* Outer glow ring */}
      <div className="relative rounded-full p-[1px] bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40">
        {/* Inner glass container */}
        <div className="flex items-center gap-1 px-3 py-2.5 rounded-full bg-gray-950/80 backdrop-blur-2xl border border-white/[0.06] shadow-2xl shadow-black/50">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;

            return (
              <div key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 group ${isActive
                    ? "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30"
                    : "hover:bg-white/[0.06]"
                    }`}
                  aria-label={item.name}
                >
                  <Icon
                    className={`text-base transition-all duration-300 ${isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                      }`}
                  />

                  {/* Active dot indicator */}
                  {isActive && (
                    <span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full" />
                  )}
                </a>

                {/* Tooltip */}
                {isHovered && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800/95 text-white text-[11px] font-medium rounded-lg whitespace-nowrap shadow-xl border border-white/10 pointer-events-none">
                    {item.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800/95" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Divider */}
          <div className="h-7 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent mx-1" />

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 group relative overflow-hidden"
          >
            <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="text-white text-xs font-semibold relative z-10">
              Hire Me
            </span>
            <FaEnvelope className="text-white/90 text-xs relative z-10" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;