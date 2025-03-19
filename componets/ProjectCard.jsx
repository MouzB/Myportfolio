export default function ProjectCard({ project }) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <p>{project.description}</p>
          <div className="badge badge-outline">{project.tech}</div>
        </div>
      </div>
    );
  }