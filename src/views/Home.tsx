import NameSection from '../Components/NameSection'
import IndexLink from '../Components/IndexLink'
import { NavLink } from 'react-router'
import "./../localizations/i18n";
import { useTranslation } from 'react-i18next'

function Home() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <NameSection />
      <section className='row-center'>
        <IndexLink route="documentation">{t("home.tab.doc")}</IndexLink>
        <IndexLink route="exp">{t("home.tab.exp")}</IndexLink>
        <IndexLink route="skills">{t("home.tab.skills")}</IndexLink>
      </section>
      <section className='row-center'>
        <IndexLink route="hobbies">{t("home.tab.hobbies")}</IndexLink>
        <IndexLink route="projects">{t("home.tab.projects")}</IndexLink>
      </section>
      <footer>
      <div className="black-band">
      <NavLink className="white-link" to="contact">{t("home.tab.contact")} </NavLink>&thinsp;<i className="fa-solid fa-envelope fa-bounce"></i>
      </div>
      </footer>
    </>
  )
}

export default Home