import type { PropsWithChildren } from 'react'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import Navbar from '@/Components/Navbar'

interface Props {
  /**
   * Affiche le footer (black-band fixe en bas) en plus de la navbar.
   * À true uniquement sur la Home.
   */
  footer?: boolean
}

/**
 * Layout standard du portfolio :
 *   - Navbar fixe en haut (toujours)
 *   - <main> avec padding-top pour ne pas empiéter sur la navbar
 *   - Footer optionnel (black-band fixe en bas) — seulement sur Home
 *
 * Les vues l'enveloppent autour de leur contenu :
 *   <Layout>            // pour les vues classiques
 *     {…contenu…}
 *   </Layout>
 *
 *   <Layout footer />    // pour la Home (avec footer, contenu vide possible)
 */
export default function Layout({
  children,
  footer = false,
}: PropsWithChildren<Props>) {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />

      {/* pt-20 (~5rem) = espace réservé pour la navbar fixe (h ≈ 64px + bordure)
          pb-24 ajouté quand le footer fixe est présent, pour ne pas masquer
          le bas de la page. */}
      <main className={`pt-20 min-h-screen${footer ? ' pb-24' : ''}`}>
        {children}
      </main>

      {footer && (
        <footer>
          <div className="black-band">
            <section>
              <NavLink className="white-link" to="contact">
                {t('home.tab.contact')}{' '}
              </NavLink>
              &thinsp;
              <i className="fa-solid fa-envelope fa-bounce" />
            </section>
            <section>
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
    </>
  )
}
