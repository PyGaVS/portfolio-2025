import Header from '../Components/Header'

function Exp() {

  return (
    <>
    <Header>Mes expériences</Header>
    <details>
      <summary> Mes études</summary>
      <div className ="paragraph">
          <h2><strong>2018-2019</strong></h2>
          <p className="gray">3eme au collège Pierre de Coubertin à Legé</p>
          <h2><strong>2019-2022</strong></h2>
          <p className="gray">Bac général Lycée Notre Dame du Roc à la Roche sur Yon (mention bien)</p>
          <strong>Spécialités :</strong>
          <p className="gray">Numérique et sciences de l'informatique (20/20 au bac)</p>
          <p className="gray">Mathématique (17/20 au bac)</p>
          <h2><strong>2022-2024</strong></h2>
          <p className="gray">BTS Service Informatique aux Organisations campus Notre Dame du Roc à la Roche sur Yon (acquis).</p>
      </div>
    </details>

    <details>
    <summary> Mes expériences professionnelles </summary>
    
    <div className ="paragraph">
        <h2><strong>2019</strong></h2>
        <p className="gray">Stage de découverte d'entreprise avec les employés communaux de Saint Etienne du Bois</p>
        <p className="gray">Durée : 1 semaine</p>
        <br />
        <h2><strong>Mai 2023</strong></h2>
        <p className="gray">Stage de développement d'application 
            chez Leadcode (autoentreprise fondateur de <a href="https://mineral-foundation.org/" className="blue-link" target="_blank">Mineral</a>) 
            à la Roche sur Yon</p>
        <p className="gray">Durée : 4 semaines</p>
        <br />
        <h2><strong>Janvier - Février 2024</strong></h2>
        <p className="gray">Stage de développement et de déploiement d'applications 
            chez <a className="blue-link" target='_blank' href="https://www.oomade.com/">Oomade</a>.</p>
        <p className="gray">Durée : 6 semaines</p>
        <br />
        <h2><strong>Eté 2024 - Novembre 2024</strong></h2>
        <p className="gray">N'ayant pas le permis de conduire à ce moment là, je me suis lancé dans deux contributions de projets sur GitHub (non rémunéré) dont le code est en open-source :</p>
        <p className="gray"><strong>Mineral : </strong></p>
        <a href="https://github.com/mineral-dart/core/pull/180" className="blue-link" target="_blank">Remove member from cache when ban #180</a>
        
        <p className="gray"><a href="https://github.com/pagefaultgames/pokerogue/pull/3273" className="blue-link" target="_blank">Mineral</a> 
            étant un framework en Dart permettant de créer des bots sur Discord.</p>
        <br />
        <p className="gray"><strong>PokéRogue : </strong></p>
        <p><a href="https://github.com/pagefaultgames/pokerogue/pull/1831" className="blue-link" target="_blank">
            [Move] Add Retaliate double damage condition #1831</a></p>
        <p><a href="https://github.com/pagefaultgames/pokerogue/pull/3273" className="blue-link" target="_blank">
            [Ability] Implement Illusion #3273</a></p>
        <p><a href="https://github.com/pagefaultgames/pokerogue-locales/pull/26" className="blue-link" target="_blank">
            Add illusionBreak localizations #26</a></p>
        <p className="gray">PokéRogue est un fangame Pokémon jouable sur navigateur avec un système de roguelite</p>
        <p className="gray">Lien du jeu : <a href="https://pokerogue.net/" className="blue-link" target="_blank">https://pokerogue.net/</a></p>
        <br />
        <h2><strong>Novembre 2024</strong></h2>
        <p className="gray">Travail en intérim chez <a className="blue-link" target="_blank" href="https://www.thomasbrioche.com/">Thomas Brioche</a> (1 semaine)</p>
        <h2><strong>Décembre 2024 - Mars 2025</strong></h2>
        <p className="gray">Travail en intérim chez <a className="blue-link" target="_blank" href="http://www.servilegume-industrie.com/">Servilegume Industrie</a></p>
        <h2><strong>Mars 2025</strong></h2>
        <p className="gray">Travail en intérim chez <a className="blue-link" target="_blank" href="https://www.r-p-ouest.fr/">RP-Ouest</a> (1 semaine)</p>
      </div>
      </details>
    </>
  )
}

export default Exp