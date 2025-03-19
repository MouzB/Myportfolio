import { useState, useContext } from "react";
import PortfolioContext from "../pages/portfoliocontext";

export default function Admin() {
  const { projects, setProjects, techSkills, setTechSkills } = useContext(PortfolioContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  function handleLogin() {
    if (username === "admin" && password === "your password") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  if (!loggedIn) {
    return (
      <div>
        <h2>Admin Login</h2>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  function addProject() {
    const title = prompt("Project Title:");
    const description = prompt("Project Description:");
    const tech = prompt("Technologies (comma separated):").split(",");
    setProjects([...projects, { title, description, tech }]);
  }

  function addSkill() {
    const skill = prompt("Enter a new tech skill:");
    setTechSkills([...techSkills, skill]);
  }

  function deleteProject(index) {
    setProjects(projects.filter((_, i) => i !== index));
  }

  function deleteSkill(index) {
    setTechSkills(techSkills.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={addProject}>Add Project</button>
      <button onClick={addSkill}>Add Tech Skill</button>

      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <button onClick={() => deleteProject(index)}>Delete</button>
        </div>
      ))}

      <h2>Tech Skills</h2>
      {techSkills.map((skill, index) => (
        <div key={index}>
          <p>{skill}</p>
          <button onClick={() => deleteSkill(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
