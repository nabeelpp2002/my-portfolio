import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faShoppingBag,
  faFileAlt,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [activePage, setActivePage] = useState("home");
  const [isHovered, setIsHovered] = useState(null);

  const navItems = [
    { id: "home", name: "Home", icon: faHome, color: "from-cyan-400 to-cyan-600" },
    { id: "about", name: "About me", icon: faUser, color: "from-purple-400 to-purple-600" },
    { id: "work", name: "Work", icon: faBriefcase, color: "from-pink-400 to-pink-600" },
    { id: "store", name: "Store", icon: faShoppingBag, color: "from-orange-400 to-orange-600" },
    { id: "resume", name: "Resume", icon: faFileAlt, color: "from-yellow-400 to-yellow-600" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      {/* Outer glass container with gradient border */}
      <div className="rounded-[55px] backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 p-1.5 shadow-2xl">
        {/* Inner container */}
        <div className="border border-white/10 rounded-[36px] bg-gray-900/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center p-2">
          {navItems.map((item) => (
            <div 
              key={item.id} 
              className="px-1.5"
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <a
                href={`#${item.id}`}
                className={`relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${
                  activePage === item.id
                    ? "bg-gradient-to-br " + item.color + " shadow-lg"
                    : "bg-gray-800/60 hover:bg-gray-700/60"
                }`}
                onClick={() => setActivePage(item.id)}
              >
                {/* Hover effect */}
                {(isHovered === item.id || activePage === item.id) && (
                  <div className="absolute -inset-2 bg-white/10 rounded-2xl blur-md opacity-50"></div>
                )}

                {/* Active indicator */}
                {activePage === item.id && (
                  <div className="absolute -top-1 w-1 h-1 bg-white rounded-full"></div>
                )}

                {/* Icon container - FIXED: Proper contrast for active state */}
                <div className="flex items-center justify-center w-10 h-10 rounded-xl">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`text-lg ${
                      activePage === item.id 
                        ? "text-white drop-shadow-md" 
                        : "text-white/70"
                    }`}
                  />
                </div>
              </a>

              {/* Tooltip on hover */}
              {isHovered === item.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap">
                  {item.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
            </div>
          ))}

          {/* Divider with gradient */}
          <div className="h-9 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent mx-2"></div>

          {/* Contact button with gradient */}
          <div className="pl-1.5">
            <a
              href="#contact"
              className="flex items-center justify-center w-auto h-14 px-5 rounded-[43px] bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 group relative overflow-hidden"
              onMouseEnter={() => setIsHovered("contact")}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <span className="text-white font-medium text-sm mr-2 relative z-10">
                Say Hello!
              </span>
              <FontAwesomeIcon
                icon={faMessage}
                className="text-white text-sm relative z-10"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;