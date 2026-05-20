import { motion } from 'motion/react'
import { Link } from 'react-router'
import StarBorder from './StarBorder'
import TimactiveSigle from '@/assets/img/exp/timactive-sigle.png'

type Entry = {
  period: string
  text: string
  icon: string
  picture?: string
}

const timeline: Entry[] = [
  { period: '2022 — 2024', text: 'BTS SIO',                          icon: 'graduation-cap' },
  { period: '2023',        text: 'Stage Leadcode',                   icon: 'briefcase' },
  { period: '2024',        text: 'Stage Oomade',                     icon: 'briefcase' },
  { period: '2024',        text: 'Open-source (Mineral, PokéRogue)', icon: 'code-branch' },
  { period: '2025 — 2026', text: 'Alternance Timactive (CDA)',       icon: 'rocket',        picture: TimactiveSigle },
]

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ExpTimeline() {
  return (
    <div className="absolute inset-0 p-4 md:p-6 flex flex-col">
      <div className="flex-1 flex items-center glassy p-4 md:p-6">
        <div className="w-full relative">
          {/* Ligne horizontale */}
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-px bg-white/30 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          {/* Grid */}
          <motion.div
            className="relative grid grid-flow-col auto-cols-fr"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
            }}
          >
            {timeline.map((entry, i) => {
              const isLast = i === timeline.length - 1
              return (
                // grid-rows-[1fr_auto_1fr] = above + star + below, étoile toujours au CENTRE vertical
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="grid grid-rows-[1fr_auto_1fr] justify-items-center group cursor-default"
                >
                  {/* above : icône + période — collé en bas de sa cellule (self-end) pour rester proche de l'étoile */}
                  <div className="self-end flex flex-col items-center pb-3">
                    {entry.picture ? (
                      <img src={entry.picture} alt={entry.text} className="w-10 h-10 mb-1 no-border" />
                    ) : (
                      <i className={`fa-solid fa-${entry.icon} text-white/60 group-hover:text-white text-base mb-1 transition-colors duration-300`} />
                    )}
                    <p className="text-xs md:text-sm text-white/70 whitespace-nowrap">{entry.period}</p>
                  </div>

                  {/* sparkle */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={
                      'text-white w-5 h-5 drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] group-hover:scale-150 transition-transform duration-300'
                      + (isLast ? 'animate-ping scale-150 group-hover:scale-200' : '')
                    }
                  >
                    <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
                  </svg>

                  {/* below : texte — collé en haut (self-start) */}
                  <p className="self-start text-xs md:text-sm text-center text-white pt-3 max-w-30 leading-tight group-hover:text-shadow-glow transition-all duration-300">
                    {entry.text}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <div className="text-center pt-4">
        <StarBorder
          as={Link}
          to="exp"
          className="no-underline hover:text-shadow-glow transition-all duration-300"
        >
          Voir tout →
        </StarBorder>
      </div>
    </div>
  )
}
