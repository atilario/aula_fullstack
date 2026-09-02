import { useState, useMemo } from "react";
import SkillCard from "./SkillCard";

function SkillsSection({ skills }) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = useMemo(() => {
    const cats = ["Todos"];
    skills.forEach((s) => {
      if (!cats.includes(s.category)) cats.push(s.category);
    });
    return cats;
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "Todos") return skills;
    return skills.filter((s) => s.category === selectedCategory);
  }, [selectedCategory, skills]);

  return (
    <section id="tecnologias">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag blue">Competências Técnicas</span>
          <h2 className="section-title">Habilidades & <span>Tecnologias</span></h2>
          <p className="section-subtitle">
            Ferramentas, linguagens e frameworks que compõem meu conjunto de habilidades na Engenharia da Computação.
          </p>
        </div>

        <div className="skills-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

