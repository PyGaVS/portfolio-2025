import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import pp from '../assets/img/pp.png'

const items = [
  { route: 'exp',      key: 'home.tab.exp' },
  { route: 'skills',   key: 'home.tab.skills' },
  { route: 'hobbies',  key: 'home.tab.hobbies' },
  { route: 'projects', key: 'home.tab.projects' },
  { route: 'contact',  key: 'home.tab.contact' },
] as const

export default function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-bright-green/30 shadow-lg">
      <div className="flex items-center justify-between gap-4 px-4 md:px-8 py-3">
        {/* Brand : photo + nom à gauche, clic = retour home */}
        <NavLink
          to="/"
          className="flex items-center gap-3 no-underline shrink-0 group"
        >
          <img
            src={pp}
            alt="Profile pic"
            className="w-10 h-10 rounded-full border border-bright-green/50 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-white font-bold tracking-wide hidden sm:inline">
            Lylian BALL
            <i className="fa-solid fa-star fa-flip fa-2xs ml-1.5" />
          </span>
        </NavLink>

        {/* Menu de navigation */}
        <ul className="flex items-center gap-3 md:gap-8 m-0 list-none">
          {items.map((item) => (
            <li key={item.route}>
              <NavLink
                to={item.route}
                className={({ isActive }) =>
                  [
                    'text-white no-underline text-xs md:text-base',
                    'uppercase tracking-wider font-medium',
                    'transition-colors duration-200',
                    'hover:text-bright-green',
                    isActive ? 'text-bright-green' : '',
                  ].join(' ')
                }
              >
                {t(item.key)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
