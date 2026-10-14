import certificationsData from '../data/certifications.js'

function Certifications() {
  return (
    <section
      className="certifications section container"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      <div className="certifications__heading">
        <h2 className="section-title" id="certifications-title">
          Training &amp; Certifications
        </h2>
        <p className="certifications__eyebrow">02 / Verified Credentials &amp; Coursework</p>
      </div>

      <div className="certifications__groups">
        {certificationsData.map((group) => (
          <div className="certifications__group card" key={group.id}>
            <div className="certifications__group-header">
              <div>
                <h3 className="certifications__group-title">{group.organization}</h3>
                {group.description && (
                  <p className="certifications__group-desc">{group.description}</p>
                )}
              </div>
              <span className={`badge ${group.id === 'iti' ? 'badge--accent' : ''}`}>
                {group.category}
              </span>
            </div>

            <ul className="certifications__list" aria-label={`${group.organization} entries`}>
              {group.items.map((item) => (
                <li
                  className={`certifications__item ${item.isPlaceholder ? 'certifications__item--placeholder' : ''}`}
                  key={item.id}
                >
                  <div className="certifications__item-info">
                    <span className="certifications__item-title">{item.title}</span>
                    <span className="certifications__item-type">{item.type}</span>
                  </div>
                  <span className="badge certifications__item-issuer">{item.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
