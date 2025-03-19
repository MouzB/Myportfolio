import React from "react";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFigma } from "react-icons/si";

export default function TechSkills() {
  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Figma", icon: <SiFigma /> },
  ];

  return (
    <section className="py-10 bg-base-200">
      <h2 className="text-2xl font-bold text-center">Tech Skills</h2>
      <div className="flex justify-center mt-4 space-x-4">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 flex items-center space-x-2"
          >
            <span>{skill.icon}</span>
            <span>{skill.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}