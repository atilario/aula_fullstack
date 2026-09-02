import { useState, useEffect } from "react";
import { portfolioData } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import JourneySection from "./components/JourneySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme_preference") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme_preference", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-wrapper">
      {/* Luzes de Fundo Ambientais */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection personal={portfolioData.personal} />
        <AboutSection personal={portfolioData.personal} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <JourneySection journey={portfolioData.journey} />
        <ContactSection personal={portfolioData.personal} />
      </main>
      <Footer personal={portfolioData.personal} />
    </div>
  );
}
