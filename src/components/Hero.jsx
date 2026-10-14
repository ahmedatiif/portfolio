function Hero() {
  return (
    <section className="hero section container" id="home" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="hero__eyebrow">Welcome / Developer Portfolio</p>
        <h1 className="hero__title" id="hero-title">
          Ahmed Atif Mostafa
        </h1>
        <p className="hero__intro">
          Computer Science graduate (Faculty of Science, Zagazig University, 2026)
          focused on building reliable backend systems and decentralized applications.
        </p>
        <div className="hero__focus">
          <p className="hero__focus-heading">Focus Areas</p>
          <ul className="hero__focus-list" aria-label="Career focus">
            <li className="hero__focus-item">
              <span className="hero__focus-index" aria-hidden="true">
                01
              </span>
              <span className="hero__focus-label">Backend Engineering</span>
            </li>
            <li className="hero__focus-item">
              <span className="hero__focus-index" aria-hidden="true">
                02
              </span>
              <span className="hero__focus-label">Web3 Development</span>
            </li>
          </ul>
        </div>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            Explore My Portfolio
          </a>
        </div>
      </div>
      <div className="hero-diagram" aria-hidden="true">
        {[0, 1].map((path) => (
          <div className="hero-diagram__path" key={path}>
            <span className="hero-diagram__node" />
            <span className="hero-diagram__line" />
            <span className="hero-diagram__node" />
            <span className="hero-diagram__line" />
            <span className="hero-diagram__node" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero