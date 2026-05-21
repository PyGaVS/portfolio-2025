import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  type MotionValue,
} from 'motion/react'
import techs, { type Tech } from '@/data/tech'

const logoModules = import.meta.glob<{ default: string }>(
  '../assets/img/tech/*.{png,svg,webp}',
  { eager: true },
)

const getLogo = (slug: string): string | undefined =>
  logoModules[`../assets/img/tech/${slug}.svg`]?.default

type TechLogoProps = {
  tech: Tech
  itemAngle: number
  ringAngle: MotionValue<number>
}

function TechLogo({ tech, itemAngle, ringAngle }: TechLogoProps) {
  // var(--r) est défini sur le container parent via classnames Tailwind responsives
  const transform = useTransform(
    ringAngle,
    (a) =>
      `rotate(${itemAngle + a}deg) translateY(var(--r)) rotate(${-itemAngle - a}deg)`,
  )
  const logoUrl = getLogo(tech.slug)

  return (
    <motion.div
      className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 -translate-x-1/2 -translate-y-1/2"
      style={{ transform }}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={tech.name}
          title={tech.name}
          className="w-full h-full object-contain drop-shadow-[0_0_4px_rgba(255,255,255,1)] no-border hover:rotate-12 transition-all duration-300"
        />
      ) : (
        <div className="w-full h-full glassy flex items-center justify-center text-[10px] text-center text-white/70 p-1">
          {tech.name}
        </div>
      )}
    </motion.div>
  )
}

export default function TechRing() {
  const ringAngle = useMotionValue(0)

  useAnimationFrame((time) => {
    ringAngle.set(((time / 20_000) * 360) % 360)
  })

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* --r = rayon de l'anneau, scale avec la largeur d'écran */}
      <div
        className="relative [--r:110px] sm:[--r:160px]"
        style={{ width: 0, height: 0 }}
      >
        <i
          aria-hidden="true"
          className="fa-solid fa-toolbox absolute text-6xl sm:text-7xl md:text-8xl text-black drop-shadow-[0_0_4px_rgba(255,255,255,1)] -translate-x-1/2 -translate-y-1/2"
        />
        {techs.map((tech, i) => (
          <TechLogo
            key={tech.name}
            tech={tech}
            itemAngle={(i / techs.length) * 360}
            ringAngle={ringAngle}
          />
        ))}
      </div>
    </div>
  )
}
