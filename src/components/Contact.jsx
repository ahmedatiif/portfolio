import links from '../data/links.js'

function Contact() {
  return (
    <section className="contact section container" id="contact" aria-labelledby="contact-title">
      <div className="section-header">
        <h2 className="section-title" id="contact-title">
          Contact
        </h2>
      </div>
      <ul className="contact__list" aria-label="Contact channels">
        {links.map((channel) => (
          <li className="contact__item" key={channel.id}>
            <h3 className="contact__label">{channel.label}</h3>
            {channel.pending ? (
              <p className="contact__pending">Link pending</p>
            ) : channel.type === 'email' ? (
              <a className="contact__link" href={`mailto:${channel.value}`}>
                {channel.value}
              </a>
            ) : (
              <a
                className="contact__link"
                href={channel.value}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${channel.label} (opens in a new tab)`}
              >
                {channel.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact