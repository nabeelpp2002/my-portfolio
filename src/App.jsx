import React, { useState, useEffect } from "react";
import ExperienceSkillsConnect from "./components/ExperienceSkillsConnect";
import Navigation from "./components/Navigation";
import ProfileSection from "./components/ProfileSection";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation Bar */}
      <Navigation />


      <ProfileSection />

      <ExperienceSkillsConnect/>
    </div>
  );
}
