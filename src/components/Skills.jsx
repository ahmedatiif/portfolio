import skills from '../data/skills.js'

function Skills() {
  const pathways = skills.filter((group) => !group.supporting)
  const supportingGroup = skills.find((group) => group.supporting)

  return (
    <section className="skills section container" id="skills" aria-labelledby="skills-title">
      <div className="section-header">
        <h2 className="section-title" id="skills-title">
          Technical Capabilities
        </h2>
      </div>
      <div className="skills__pathways">
        {pathways.map((pathway) => (
          <section className="skills__pathway" key={pathway.id} aria-labelledby={`${pathway.id}-title`}>
            <h3 className="skills__pathway-title" id={`${pathway.id}-title`}>
              {pathway.title}
            </h3>
            {pathway.categories.map((category) => (
              <div className="skills__category" key={category.id}>
                <h4 className="skills__category-title">{category.title}</h4>
                <ul className="skills__list" aria-label={category.title}>
                  {category.items.map((item) => (
                    <li className="skills__item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
      {supportingGroup && (
        <div className="skills__supporting" aria-labelledby={`${supportingGroup.id}-title`}>
          <div className="skills__supporting-heading">
            <h3 className="skills__supporting-title" id={`${supportingGroup.id}-title`}>
              {supportingGroup.title}
            </h3>
            <span className="skills__supporting-label">Supporting</span>
          </div>
          <ul className="skills__list" aria-label={`${supportingGroup.title} skills`}>
            {supportingGroup.items.map((item) => (
              <li className="skills__item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Skills