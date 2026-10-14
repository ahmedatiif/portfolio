import projects from '../data/projects.js'

function Projects() {
  return (
    <section className="projects section container" id="projects" aria-labelledby="projects-title">
      <div className="projects__heading">
        <h2 className="section-title" id="projects-title">
          Selected Projects
        </h2>
        <p className="projects__eyebrow">01 / Current work</p>
      </div>
      <ul className="projects__list">
        {projects.map((project) => (
          <li key={project.id}>
            <article className="project" aria-labelledby={`${project.id}-title`}>
              <div className="project__content">
                <div className="project__title-row">
                  <h3 className="project__title" id={`${project.id}-title`}>
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="badge badge--accent">{project.status}</span>
                  )}
                  {project.projectType && (
                    <span className="project__type">{project.projectType}</span>
                  )}
                </div>
                <p className="project__summary">{project.summary}</p>
                {project.role && (
                  <div className="project__role">
                    <span className="project__role-label">My Role:</span>{' '}
                    <span className="project__role-text">{project.role}</span>
                  </div>
                )}
                {project.stack?.length > 0 && (
                  <ul className="project__stack" aria-label={`${project.title} technologies`}>
                    {project.stack.map((technology) => (
                      <li className="badge" key={technology}>
                        {technology}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="project__media">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="project__image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project__media-slot" aria-label={`Screenshot area for ${project.title}`}>
                    <span className="project__media-slot-text">Screenshot slot</span>
                  </div>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects