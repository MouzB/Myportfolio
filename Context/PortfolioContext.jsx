import { createContext, useState, useEffect, useContext } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    const storedTechSkills = localStorage.getItem("techSkills");
    if (storedProjects) setProjects(JSON.parse(storedProjects));
    if (storedTechSkills) setTechSkills(JSON.parse(storedTechSkills));
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [projects, techSkills]);

  return (
    <PortfolioContext.Provider value={{ projects, setProjects, techSkills, setTechSkills }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export const useProjects = () => useContext(PortfolioContext);