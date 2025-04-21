import Header from '../Components/Header'
import "./../localizations/i18n";
import { useTranslation } from "react-i18next";



function Contact() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language)

  return (
    <>
    <Header>Me contacter</Header>
    <div className='contact-row'>
      <div>
      <form action="https://formspree.io/f/mdkgnddj" method="POST">
        <div className="holder">
          <input type='string' name='Nom' required />
          <span>{t("contact.form.name")}</span>
        </div>
        <div className="holder">
          <input type='tel' name='Téléphone' required />
          <span>{t("contact.form.phone")}</span>
        </div>
        <div className="holder">
          <textarea required name="Message"></textarea>
          <span>Message</span>
        </div>
        <button type="submit">{t("contact.form.submit")}</button>
      </form>
      </div>

      <div>
        <p><a className="white-link" href ="mailto:lylian270104@gmail.com"> 
          <i className="fa-regular fa-envelope"></i> lylian270104@gmail.com</a> </p>
        <p><a className="white-link" href ="https://github.com/PyGaVS" target="_blank"> 
          <i className="fa-brands fa-github"></i> PyGaVS</a> </p>
        <p><i className="fa-brands fa-discord"></i> pyga_vs </p>
        <p><a className="white-link" href ="https://www.linkedin.com/in/lylian-ball-8984a5278/" target="_blank"> 
          <i className="fa-brands fa-linkedin"></i> Lylian BALL</a> </p>
      </div>
    </div>
    </>
  )
}

export default Contact