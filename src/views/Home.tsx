import Navbar from '../Components/Navbar'
import NameSection from '../Components/NameSection'
import { NavLink } from 'react-router'
import "./../localizations/i18n";
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center pt-20 pb-24 px-4">
      </main>
      <footer>
        <div className="black-band">
          <section>
            <NavLink className="white-link" to="contact">{t("home.tab.contact")} </NavLink>&thinsp;<i className="fa-solid fa-envelope fa-bounce"></i>
          </section>
          <section>
            <a className="white-link" href="https://github.com/PyGaVS/portfolio-2025" target='_blank'>Made with 💖 by me</a>
          </section>
        </div>
      </footer>
    </>
  )
}

export default Home
