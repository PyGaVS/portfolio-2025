import { useState } from 'react'
import { NavLink } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import pp from '../assets/img/pp.png'

const items = [
  { route: '/exp',      key: 'home.tab.exp' },
  { route: '/skills',   key: 'home.tab.skills' },
  { route: '/hobbies',  key: 'home.tab.hobbies' },
  { route: '/projects', key: 'home.tab.projects' },
] as const

// Helper : renvoie la fonction className attendue par NavLink, avec classes extra concaténées.
const linkClassFor = (extra: string) =>
  ({ isActive }: { isActive: boolean }) =>
    [
      'text-white no-underline',
      'uppercase tracking-wider font-medium',
      'transition-[text-shadow] duration-200',
      'hover:text-shadow-glow',
      isActive ? 'text-shadow-glow' : '',
      extra,
    ].join(' ')

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-bright-green/30 shadow-lg">
      <div className="flex items-center justify-between gap-4 px-4 md:px-8 py-3">
        {/* Brand */}
        <NavLink
          to="/"
          className="flex items-center gap-3 no-underline shrink-0 group"
          onClick={() => setOpen(false)}
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

        {/* Menu desktop — caché sur mobile */}
        <ul className="hidden md:flex items-center xl:gap-8 m-0 list-none gap-4 xl:text-base text-sm">
          {items.map((item) => (
            <li key={item.route}>
              <NavLink to={item.route} className={linkClassFor('')}>
                {t(item.key)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Bouton burger — visible sur mobile uniquement */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="md:hidden text-white text-2xl w-10 h-10 flex items-center justify-center hover:text-shadow-glow transition-[text-shadow] duration-200 bg-transparent"
        >
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>

      {/* Dropdown mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/60 backdrop-blur-md border-t border-bright-green/30"
          >
            <ul className="flex flex-col list-none m-0 p-2 gap-1">
              {items.map((item) => (
                <li key={item.route}>
                  <NavLink
                    to={item.route}
                    onClick={() => setOpen(false)}
                    className={linkClassFor(
                      'block px-4 py-3 text-base rounded hover:bg-white/5',
                    )}
                  >
                    {t(item.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
