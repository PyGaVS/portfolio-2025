import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router'
import projectSections from '@/data/projects'

const CYCLE_MS = 3500

const featuredImages = projectSections
  .flatMap((s) => s.groups.flatMap((g) => g.projects))
  .flatMap((p) => p.images)
  .filter((img) => img.featured)

export default function ProjectSlideshow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || featuredImages.length === 0) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % featuredImages.length)
    }, CYCLE_MS)
    return () => window.clearInterval(id)
  }, [paused])

  if (featuredImages.length === 0) return null
  const current = featuredImages[index]

  return (
    <div
      className="absolute inset-0 flex flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Link to="projects" className="flex-1 relative no-underline">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.source}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={current.source}
              alt="featured project"
              className="max-w-full max-h-full object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
        </AnimatePresence>
      </Link>

      <div className="flex justify-center gap-2 py-4">
        {featuredImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Image ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? 'bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
