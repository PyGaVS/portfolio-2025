import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  type MotionValue,
} from 'motion/react'
import techs, { type Tech } from '@/data/tech'

const RADIUS = 160
const LOGO_SIZE = 56
const ROTATION_PERIOD_MS = 20_000

const logoModules = import.meta.glob<{ default: string }>(
  '../assets/img/tech/*.{png,svg,webp}',
  { eager: true },
)

const getLogo = (slug: string): string | undefined => {
  return logoModules[`../assets/img/tech/${slug}.svg`]?.default
}

type TechLogoProps = {
  tech: Tech
  itemAngle: number
  ringAngle: MotionValue<number>
}

function TechLogo({ tech, itemAngle, ringAngle }: TechLogoProps) {
  const transform = useTransform(
    ringAngle,
    (a) =>
      `rotate(${itemAngle + a}deg) translateY(${RADIUS}px) rotate(${-itemAngle - a}deg)`,
  )
  const logoUrl = getLogo(tech.slug)

  return (
    <motion.div
      className="absolute top-0 left-0"
      style={{
        width: `${LOGO_SIZE}px`,
        height: `${LOGO_SIZE}px`,
        marginTop: `-${LOGO_SIZE / 2}px`,
        marginLeft: `-${LOGO_SIZE / 2}px`,
        transform,
      }}
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

export default function techRing() {
  const ringAngle = useMotionValue(0)

  useAnimationFrame((time) => {
    ringAngle.set(((time / ROTATION_PERIOD_MS) * 360) % 360)
  })

  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <div className="relative" style={{ width: 0, height: 0 }}>
        <i
          aria-hidden="true"
          className="fa-solid fa-toolbox absolute text-8xl text-black drop-shadow-[0_0_4px_rgba(255,255,255,1)]"
          style={{ transform: 'translate(-50%, -50%)' }}
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
