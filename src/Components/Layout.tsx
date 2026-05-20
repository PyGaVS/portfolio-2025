import type { PropsWithChildren } from 'react'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import Navbar from '@/Components/Navbar'
import { RetroGrid } from './ui/retro-grid'

interface Props {
  title?: string
  footer?: boolean
}

export default function Layout({
  children,
  title,
  footer = true,
}: PropsWithChildren<Props>) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-1 pt-16">
        {title && (
          <h1
            className={[
              'w-fit mx-auto mb-10 mt-4',
              'px-6 md:px-8 py-3 md:py-4',
              'text-4xl md:text-6xl font-bold text-center',

              'glow-text glassy',
            ].join(' ')}
          >
            {title}
          </h1>
        )}
        {children}
      </main>

      {footer && (
        <footer className='relative h-18 w-full'>
          <RetroGrid cellSize={80} angle={78} darkLineColor='rgba(255, 255, 255, 1)' lightLineColor='white' />
          <div className="
            flex justify-between items-center h-full px-[4vw] bg-black/50
            border-t border-white/40
          ">
            <section className='glassy px-3 md:px-4 py-1 md:py-2'>
              <NavLink className="white-link" to="contact">
                {t('home.tab.contact')}{' '}
              </NavLink>
            </section>
            <section className='glassy px-3 md:px-4 py-1 md:py-2'>
              <a
                className="white-link"
                href="https://github.com/PyGaVS/portfolio-2025"
                target="_blank"
                rel="noreferrer"
              >
                Made with 💖 by me
              </a>
            </section>
          </div>
        </footer>
      )}
    </div>
  )
}
