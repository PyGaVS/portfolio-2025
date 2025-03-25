import { useState } from 'react'
import "../assets/home.css"
import NameSection from '../Components/NameSection'
import IndexLink from '../Components/IndexLink'
import { NavLink } from 'react-router'

function Home() {

  return (
    <>
      <NameSection />
      <section className='row-center'>
        <IndexLink route="documentation">Documentation personelle</IndexLink>
        <IndexLink route="exp">Mes expériences</IndexLink>
        <IndexLink route="skills">Mes compétences</IndexLink>
      </section>
      <section className='row-center'>
        <IndexLink route="hobbies">Mes centres d'intérêt</IndexLink>
        <IndexLink route="projects">Mes réalisations</IndexLink>
      </section>
      <footer>
      <div className="black-band">
      <NavLink className="white-link" to="contact">Me contacter  </NavLink>&thinsp;<i className="fa-solid fa-envelope fa-bounce"></i>
      </div>
      </footer>
    </>
  )
}

export default Home