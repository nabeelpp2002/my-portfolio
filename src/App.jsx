import React from "react";
import Navigation from "./components/Navigation";
import ProfileSection from "./components/ProfileSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white noise-bg relative">
      <Navigation />
      <ProfileSection />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
