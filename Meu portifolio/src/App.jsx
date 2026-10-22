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

  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "en";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme_preference", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
    localStorage.setItem("portfolio_lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLang = (selectedLang) => {
    if (selectedLang) {
      setLang(selectedLang);
    } else {
      setLang((prev) => (prev === "en" ? "pt" : "en"));
    }
  };

  const content = portfolioData[lang] || portfolioData.en;

  return (
    <div className="app-wrapper">
      <Navbar
        nav={content.nav}
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
      />
      <main>
        <HeroSection
          personal={content.personal}
          hero={content.hero}
          lang={lang}
        />
        <AboutSection
          personal={content.personal}
          about={content.about}
        />
        <SkillsSection
          skillsData={content.skills}
        />
        <ProjectsSection
          projectsData={content.projects}
        />
        <JourneySection
          journeyData={content.journey}
        />
        <ContactSection
          contact={content.contact}
          personal={content.personal}
        />
      </main>
      <Footer
        footer={content.footer}
        personal={content.personal}
      />
    </div>
  );
}
