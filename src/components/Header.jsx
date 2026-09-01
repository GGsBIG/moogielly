import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const links = [
  ['/', '入門'],
  ['/palaces', '十二宮'],
  ['/stars', '十四主星'],
  ['/terms', '四化・術語'],
  ['/linyan', '林晏命盤'],
  ['/jiasong', '田家菘命盤'],
  ['/couple', '兩人合盤'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="siteHeader">
      <div className="headerBar">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brandMark">✷</span> 紫微斗數入門
        </NavLink>

        <button
          className="navToggle"
          aria-label="選單"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={'burger' + (open ? ' isOpen' : '')} />
        </button>
      </div>

      <nav className={'siteNav' + (open ? ' open' : '')}>
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
