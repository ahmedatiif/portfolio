const principles = [
  {
    id: 'maintainable-code',
    title: 'Maintainable Code',
    description: 'I value clear, modular code that is easier to understand, test, and maintain.',
  },
  {
    id: 'explicit-business-rules',
    title: 'Explicit Business Rules',
    description:
      'I prefer making business rules and edge cases explicit rather than hiding them in scattered logic.',
  },
  {
    id: 'testing-and-debugging',
    title: 'Testing and Debugging',
    description:
      'I’m interested in tracing failures systematically, testing important cases, and understanding the root cause of bugs.',
  },
  {
    id: 'api-and-system-design',
    title: 'API and System Design',
    description:
      'I’m interested in designing APIs and systems around clear responsibilities, predictable behavior, and maintainable boundaries.',
  },
]

function Approach() {
  return (
    <section
      className="approach section container"
      id="approach"
      aria-labelledby="approach-title"
    >
      <div className="section-header">
        <h2 className="section-title" id="approach-title">
          Engineering Approach
        </h2>
      </div>
      <ul className="approach__list">
        {principles.map((principle) => (
          <li className="approach__item" key={principle.id}>
            <article aria-labelledby={`${principle.id}-title`}>
              <h3 className="approach__title" id={`${principle.id}-title`}>
                {principle.title}
              </h3>
              <p className="approach__copy">{principle.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Approach