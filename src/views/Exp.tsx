import Header from '../Components/Header'
import "./../localizations/i18n";
import { useTranslation } from "react-i18next";

function Exp() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language)

  return (
    <>
      <Header>{t("exp.header")}</Header>
      
      <details>
        <summary>{t("exp.details.studies")}</summary>
        <div className="paragraph">
          <h2><strong>2018-2019</strong></h2>
          <p className="gray">{t("exp.studies.2018-2019")}</p>
          <h2><strong>2019-2022</strong></h2>
          <p className="gray">{t("exp.studies.2019-2022")}</p>
          <strong>{t("exp.studies.specialties.title")} : </strong>
          <p className="gray">{t("exp.studies.specialties.digitalScience")}</p>
          <p className="gray">{t("exp.studies.specialties.mathematics")}</p>
          <h2><strong>2022-2024</strong></h2>
          <p className="gray">{t("exp.studies.2022-2024")}</p>
        </div>
      </details>

      <details>
        <summary>{t("exp.details.profExp")}</summary>
        <div className="paragraph">
          <h2><strong>2019</strong></h2>
          <p className="gray">{t("exp.profExp.2019.text")}</p>
          <p className="gray">{t("exp.profExp.2019.duration")}</p>

          <h2><strong>Mai 2023</strong></h2>
          <p className="gray">{t("exp.profExp.Mai 2023.text")} <a href="https://mineral-foundation.org/" className="blue-link" target="_blank">
            Mineral</a>)</p>
          <p className="gray">{t("exp.profExp.Mai 2023.duration")}</p>

          <h2><strong>Janvier - Févirer 2024</strong></h2>
          <p className="gray">{t("exp.profExp.Jan/Feb 2024.text")} <a href="https://www.oomade.com/" className="blue-link" target="_blank">
            Oomade</a></p>
          <p className="gray">{t("exp.profExp.Jan/Feb 2024.duration")}</p>

          <h2><strong>Eté 2024 - Novembre 2024</strong></h2>
            <p className="gray">{t("exp.profExp.Sum/Nov 2024.text")}</p>
            <p className="gray"><strong>Mineral : </strong></p>
            <a href="https://github.com/mineral-dart/core/pull/180" className="blue-link" target="_blank">
              Remove member from cache when ban #180</a>
            <p className="gray">
              <a href="https://github.com/pagefaultgames/pokerogue/pull/3273" className="blue-link" target="_blank">
                Mineral</a> {t("exp.profExp.Sum/Nov 2024.mineralDetails")}</p>
            <br />
            <p className="gray"><strong>PokéRogue : </strong></p>
            <p><a href="https://github.com/pagefaultgames/pokerogue/pull/1831" className="blue-link" target="_blank">
                [Move] Add Retaliate double damage condition #1831</a></p>
            <p><a href="https://github.com/pagefaultgames/pokerogue/pull/3273" className="blue-link" target="_blank">
                [Ability] Implement Illusion #3273</a></p>
            <p><a href="https://github.com/pagefaultgames/pokerogue-locales/pull/26" className="blue-link" target="_blank">
                Add illusionBreak localizations #26</a></p>
            <p className="gray">{t("exp.profExp.Sum/Nov 2024.pokerogueDetails")}</p>
            <p className="gray">{t("exp.profExp.Sum/Nov 2024.gamelink")} : <a href="https://pokerogue.net/" className="blue-link" target="_blank">
                https://pokerogue.net/</a></p>
          <h2><strong>Novembre 2024</strong></h2>
          <p className="gray">{t("exp.profExp.Novembre 2024.text")} <a className="blue-link" href="https://www.thomasbrioche.com/" target="_blank">Thomas Brioche</a></p>
          <p className="gray">{t("exp.profExp.Novembre 2024.duration")}</p>

          <h2><strong>Décembre 2024 - Mars 2025</strong></h2>
          <p className="gray">{t("exp.profExp.Décembre 2024 - Mars 2025.text")} <a className="blue-link" href="http://www.servilegume-industrie.com/" target="_blank">Servilegume Industrie</a></p>

          <h2><strong>Mars 2025</strong></h2>
          <p className="gray">{t("exp.profExp.Mars 2025.text")} <a className="blue-link" href="https://www.r-p-ouest.fr/" target="_blank">RP-Ouest</a></p>
          <p className="gray">{t("exp.profExp.Mars 2025.duration")}</p>
        </div>
      </details>
    </>
  );
}

export default Exp;
