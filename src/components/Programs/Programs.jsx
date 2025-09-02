import React, { useState } from "react";
import "./Programs.css";

const experiences = [
  {
    company: "PT. Pro Sistimatika Automasi",
    role: "Programmer Intern",
    duration: "Feb 2025 – Aug 2025",
    details: [
      "Built and optimized scalable features for the Inatrade app, making the experience smooth and comfortable for user to use.",
      "Collaborated closely with system analysts and senior developers to design, develop, and enhance application features aligned with user requirements.",
      "Improved code readability, maintainability, and performance by refactoring legacy code and fixing critical bugs."
    ]
  },
  {
    company: "Guidance School",
    role: "Creative Staff Intern",
    duration: "Apr 2022 – Sep 2022",
    details: [
      "Designed and developed interactive UI components using HTML, CSS, and JavaScript to improve the usability and visual appeal of the school website.",
      "Collaborated with the creative team to produce eye-catching posters, banners, and digital promotional materials, helping to strengthen the school’s branding and outreach.",
      "Assisted in brainstorming and executing creative content ideas that engaged both students and parents."
    ]
  }
];

const Experience = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="experience-section">
      <div className="experience-container">
        {/* Sidebar */}
        <ul className="experience-list">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className={selected === index ? "active" : ""}
              onClick={() => setSelected(index)}
            >
              {exp.company}
            </li>
          ))}
        </ul>

        {/* Details */}
        <div className="experience-details">
          <h3>
            {experiences[selected].role} @{" "}
            <span className="company">{experiences[selected].company}</span>
          </h3>
          <span className="duration">{experiences[selected].duration}</span>
          <ul>
            {experiences[selected].details.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
