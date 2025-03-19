import ProjectCard from './ProjectCard';
import { useProjects } from "../Context/PortfolioContext";


export default function Projects() {
  const { projects } = useProjects();
  return (
    <section className="py-10 bg-base-200">
      <h2 className="text-2xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}