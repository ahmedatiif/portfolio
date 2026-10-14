import { useEffect, useState } from 'react'
import navItems from '../data/navigation.js'

function getActiveSectionId() {
  const offset = 120
  let currentId = navItems[0].id

  for (const item of navItems) {
    const section = document.getElementById(item.id)
    if (!section) {
      continue
    }

    if (section.getBoundingClientRect().top - offset <= 0) {
      currentId = item.id
    }
  }

  return currentId
}

function Navbar() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveId(getActiveSectionId())
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('hashchange', updateActiveSection)
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('hashchange', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <ul className="site-nav__list">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              className="site-nav__link"
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'page' : undefined}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
