import Header from '../Components/Header'
import Project from '../Components/Project'
import fractions from '../assets/img/projects/fraction.jpg'
import mcwebsite from '../assets/img/projects/mcwebsite.jpg'
import htmlGenerator from '../assets/img/projects/htmlGenerator.jpg'
import reservations from '../assets/img/projects/reservation.jpg'
import alizon from '../assets/img/projects/alizon.jpg';
import inscription from '../assets/img/projects/inscription.jpg';
import selenium from '../assets/img/projects/Selenium.jpg';
import seleniumMcd from '../assets/img/projects/Selenium-mcd.jpg';
import seleniumReport from '../assets/img/projects/Selenium-report.jpg';
import seleniumSearch from '../assets/img/projects/Selenium-search.jpg';
import seven from '../assets/img/projects/Seven.jpg';
import sevenForm from '../assets/img/projects/Seven-form.jpg';
import sevenMcd from '../assets/img/projects/Seven-mcd.jpg';
import tui from '../assets/img/projects/tui.jpg';
import tuiHomeview from '../assets/img/projects/tui-homeview.jpg';
import tuiSearch from '../assets/img/projects/tui-search.jpg';

function Projects() {

  return (
    <>
      <Header>Mes réalisations</Header>
      <br />
      <div className='paragraph'>
        <details className='big'>
          <summary>Mes réalisations perso</summary>
          <Project title='Projet programmation orientée objet (POO) fraction : Python'
          images={[{source: fractions, width: 300}]}>
            <p className="gray">Algorithme python que j'ai fait au lycée lors des cours de Numérique Science Informatique.
                Ce code peut réaliser des calculs de fractions avec de la programmation orientée objet.</p>
            <p className="gray">Le jeu de test effectué ci-dessous :</p>
          </Project>
          <Project title='Site web sur minecraft : php/css/javascript'
          images={[{source: mcwebsite, width: 1000}]}>
            <p className="gray">
              Cette application web disposant d'un front-end css/js est munis de quelques fonctionnalités tel qu'un onglet chat ou l'on peut
              envoyer des messages ou bien changer de thème (sombre/lumineux).</p>
            <p className="gray">Lien du projet Github :
              <a className="white-link" target="_blank" href="https://github.com/PyGaVS/MCWebsite"> MCWebsite</a></p>
          </Project>
          <Project title='Générateur de html : adonisjs'
          images={[{source: htmlGenerator, width: 1000}]}>
            <p className="gray">
              Cette application me permet de générer du html pour ma <a className="blue-link" href="docs.html">documentation</a>. 
              J'ai du réaliser plusieurs CRUD, un héritage de classe et faire en sorte que l'utilisateur (moi) puisse décider de l'ordre 
              dans laquelle les données sont traitées.</p>
            <p className="gray">Lien du projet Github :
            <a className="white-link" href="https://github.com/PyGaVS/HtmlGeneratorPortfolio" target='_blank'> HtmlGenerator</a></p>
          </Project>
        </details>
        <details className='big'>
          <summary>Lors de mon BTS SIO</summary>
          <h2><strong>Année n°1</strong></h2>
          <Project title="Application web de réservation de visite d'entreprise: php"
          images={[{source: reservations, width: 900}]}>
            <p className="gray">
              Ce projet est une application web en php monolithique que j'ai réalisé en équipe avec un collègue.
              Cette application à été codé durant la semaine de projet de début janvier 2023.</p>
            <p className="gray">
              Aucun framework n'était utilisé c'était simplement du php codé "à la main" sans utilisation de la POO,
              car j'était encore débutant dans le développement web.</p>
            <p className="gray">
              Cette application permettait de se connecter, lister les visites de l'utilisateur connecté et de créer une visite.
              Puis en tant que utilisateur non connecté (visiteur) on pouvait voir la listes des visites disponibles.</p>
          </Project>
          <h2><strong>Stage n°1</strong></h2>
          <Project title="Sysème d'inscription et de connexion : adonisjs/css"
          images={[{source: inscription, width: 500}]}>
            <p className="gray">
              Système d'inscription et de connexion réalisé sur le framework Adonis lors de mon stage chez Leadcode qui rentre les 
              informations dans une base de données.</p>
            <p className="gray">
              Dans cet exercice j'ai réalisé des validateurs pour que l'utilisateur rentre des informations valides tel qu'un mot de passe
              d'une longueur comprise entre 8 et 255 caractères.</p>
            <p className="gray">
              Je me suis aussi entraîné en css et appris à utiliser des fonctions asynchrone.</p>
            <p className="gray">Lien du dépôt github : 
              <a className="white-link" href="https://github.com/PyGaVS/Adonis-register-practice" target='_blank'> Adonis-register-practice</a></p>
          </Project>
          <h2><strong>Année n°2</strong></h2>
          <Project title="Site de gestion de commandes : laravel"
          images={[{source: alizon, width: 1000}]}>
            <p className="gray">
              Application web de gestion de commandes réalisé sur laravel/adminlte.</p>
            <p className="gray">
              Cet application à été réalisée lors d'un exercice en cours durant une semaine afin de nous initier à Laravel.</p>
            <p className="gray">
              Fonctionnalitées codés :</p>
            <ul className="gray">
              <li>Système de connexion</li>
              <li>Afficher la liste des clients liés à l'utilisateur connecté</li>
              <li>Afficher la fiche d'un client ainsi que ses commandes</li>
              <li>Ajouter une commande à un client</li>
              <li>Voir les détails et modifier une commande d'un client</li>
            </ul>
            <p className="gray">Lien du dépôt github : 
              <a className="white-link" href="https://github.com/PyGaVS/Alisales-adminlte" target='_blank'> Alisales-adminlte</a></p>
          </Project>
          <Project title="Site de réservation de véhicule : laravel headless"
          images={[{source: seven, width: 1000}, {source: sevenForm, width: 1000}]}>
            <p className="gray">Ce projet constitue la situation professionnelle n°1 présenté lors de l'épreuve E5 du BTS SIO</p>
              <p className="gray">
              L'application Seven Travel donne accès à la liste des réservations de véhicule des clients et nous pouvons 
              ajouter une réservation à l'aide d'un formulaire composé de plusieurs pages fluides, les transitions entre les pages sont 
              fluides car ça a été fait en javascript donc le formulaire est entièrement chargé dès le début.
              </p>
              <p className="gray">Une fois le formulaire complété, un message informe l'utilisateur si la réservation 
              est possible ou non. J'ai utilisé la librairie 
              <a className="blue-link" href="https://github.com/CodeSeven/toastr?tab=readme-ov-file" target='_blank'> Toastr </a>
              pour afficher le message.</p>
              <p className="gray">
              Cet application utilise une API pour accéder à la base de données. J'ai réalisé cet API en équipe avec deux collègues 
              qui l'utiliseront aussi pour créer deux autres applications dans le même contexte.
              Nous utilision donc le GitLab du campus pour partager le code
              </p>
              <p className="gray">Framework utilisé pour l'API et l'application web : Laravel (php)</p>
              <p className="gray">Le modèle conceptuel des données :</p>
              <img src={sevenMcd} alt="project pic" width='900px' />
              <p className="gray">Lien du dépôt github de l'API : 
                  <a className="white-link" href="https://github.com/PyGaVS/BTS-SIO-sp1-api" target='_blank'> BTS-SIO-sp1-api</a>
              </p>
              <p className="gray">Lien du dépôt github de l'application web : 
                  <a className="white-link" href="https://github.com/PyGaVS/BTS-SIO-sp1-web" target='_blank'> BTS-SIO-sp1-web</a>
              </p>
          </Project>
          <Project title="Application de discussion : Dart Flutter"
          images={[{source: selenium, width: 300}, {source: seleniumSearch, width: 300}, {source: seleniumReport, width: 300}]}>
            <p className="gray">Ce projet constitue la situation professionnelle n°2 présenté lors de l'épreuve E5 du BTS SIO</p>
            <p className="gray"> Cet application mobile permet à des utilisateurs de communiquer entre eux, en accédant à 
              une conversation et en écrivant des messages.</p>
            <p className="gray">
              On peut créer une conversation avec plusieurs utilisateurs en les sélectionnant et aussi à l'aide d'un système de 
              recherche d'utilisateur.</p>
            <p className="gray">
              On peut aussi envoyer un signalement à des messages pouvant être jugé malveillant, un collègue à moi a créé une 
              application web permettant de traiter ces signalements.</p>
            <p className="gray">
              Les utilisateurs possèdent un score de “gentillesse” où des restrictions seront appliqués aux utilisateurs 
              ayant un score trop faible, à force de se faire signaler sur des messages visant à nuire l’expérience des autres utilisateurs.
              Dans l'api le score de gentillesse est codés mais il n'est pas traité sur l'application mobile. Moi et mon collègue n'avons
              pas eu le temps de coder entièrement cette fonctionnalitée. </p>
            <p className="gray">Avec mon collègue, nous avons conçu l'API à deux. 
              Nous utilision donc le GitLab du campus pour partager le code</p>
            <p className="gray">Framework utilisé pour l'API : Laravel (php)</p>
            <p className="gray">Framework utilisé pour l'application mobile : Flutter (dart)</p>
            <p className="gray">Le modèle conceptuel des données :</p>
            <img className="project-image" src={seleniumMcd} alt="project pic" width='900px' />
            <p className="gray">Lien du dépôt github de l'API : 
              <a className="white-link" href="https://github.com/PyGaVS/BTS-SIO-sp2-api" target='_blank'> BTS-SIO-sp2-api</a></p>
            <p className="gray">Lien du dépôt github de l'application mobile : 
              <a className="white-link" href="https://github.com/PyGaVS/BTS-SIO-sp2-mobile" target='_blank'> BTS-SIO-sp2-mobile</a></p>
          </Project>
          <h2><strong>Stage n°2</strong></h2>
          <Project title="Outil de gestion cloud en terminal de commande : react/typescript"
          images={[{source: tuiHomeview, width: 1000}, {source: tui, width: 1000}, {source: tuiSearch, width: 1000}]}>
            <p className="gray">
              Cet outil permet d'accéder au objets stockées dans un s3 AWS (une base de données permettant de stocker tout type de fichier).
              J'ai réalisé cet outil lors de mon stage à <a className="blue-link" target='_blank' href="https://www.oomade.com/">Oomade</a> qui 
              va permettre aux développeurs de cette entreprise de faire des tests pour leurs applications.
              J'ai fait mes tests pour cet outil en utilisant un pod k8s contenant une image 
              <a className="blue-link" target='_blank' href="https://min.io/"> Minio</a>.
              Le rendu des vues se fait avec la librairie 
              <a className="blue-link" target='_blank' href="https://github.com/vadimdemedes/ink"> ink</a>, et ce projet est réalisé avec 
              React TSX.</p>
            <p className="gray">Principales fonctionnalitées codées :</p>
            <p className="gray">⛵  Navigation :  'Enter' pour selectionner un un élément, 'b'  pour retourner au niveau précédent et 'esc' pour 
              retourner au menu.</p>
            <p className="gray">🚪  Exit : 'esc' quand on est au menu ou 'ctrl + q'</p>
            <p className="gray">⬇️  Download : 'd' pour télécharger un fichier (pas un dossier)</p>
            <p className="gray">📄  Copy Past : 'c' et 'v' de la même manière que ctrl + c ctrl + v à l'exception que l'on ne peut pas 
              sélectionner plusieurs fichier à la fois ou de dossier. Le presse-papier sera affiché dans la box jaune.</p>
            <p className="gray">🔄  Refresh : 'r' permet de refresh la page, et le refresh est automatique lorsqu'on past ou delete.</p>
            <p className="gray">🗑️  Delete : 'x' permet de supprimer définitivement un élément du s3 sans message de confirmation</p>
            <p className="gray">🔎  Search : 's' permet de focus sur la barre de recherche et cela va trier les objets de la manière suivante :</p>
            <p className="gray">-En priorité les objets où le nom commence par le str dans la barre de recherche. </p>
            <p className="gray">-En second les objets qui contiennent le str dans la barre de recherche.</p>
            <p className="gray">📁  Recursion : Les objets sont triés en fonction de leur nom avec récursivité dans des dossiers.</p>
            <p className="gray">↔️  Pagination : Le nombres d'objet possède une limite (par défaut 10) d'affichage par page et il suffit 
              d'utiliser les flèches latérales pour changer de page.</p>
            <p className="gray">🔀  Offset : Le offset est géré de sorte à pouvoir ce déplacer entre les extrémités des éléments rapidement.</p>
            <p className="gray">ℹ️  Highlight : Les infos du fichier que l'on survole sont affichés dans la box verte.</p>
            <p className="gray">💯  User info : Des messages tel que le loading pour un téléchargement seront affichés pour que l'utilisateur soit informé si il doit patienter lors d'une requête au s3 (comme un download).</p>
            <p className="gray">Lien du projet github : 
              <a className="white-link" href="https://github.com/Stage-2024/tui-diagnostic-tools" target='_blank'> tui-diagnostic-tools</a></p>
          </Project>
        </details>
        <details className='big'>
          <summary>Mes contributions</summary>
          <Project title='Pokérogue : typescript' images={[]}>
          <p className="gray"><a className="blue-link" href="https://pokerogue.net/" target="_blank">Pokérogue </a>
            est un fangame Pokémon inspiré du genre roguelite qui nous propose de faire uniquement des combats 
            tout en collectant des objets cumulables et en explorant divers biomes pour affronter des adversaires 
            de plus en plus puissants. Ce jeu se joue directement sur le navigateur, il est donc très facile d'accès.</p>
          <iframe className="ytb-embed" width='1000px' src="https://www.youtube.com/embed/bIpysAYaFZ0?si=kLA4RyvZHQAcn0DO" 
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="gray">Le jeu n'étant pas fini car il y a beaucoup de méchaniques différentes à coder, j'ai saisi cette opportunité 
            pour créer ma propre expérience sur un projet très complexe avec un enjeu important, au vu du nombre de joueurs 
            s'y connectant chaque jour. J'ai donc implémenté une capacité et un talent qui n'étaient pas encore codés car 
            leur méchaniques étaient uniques et complexes.</p>
          <strong>La capacité Vengeance - </strong>
            <a className="blue-link" href="https://www.pokepedia.fr/Vengeance" target="_blank">En savoir plus</a>
          <p className="gray">Découverte et prise de connaissance de la structure du code du jeu.</p>
          <p className="gray">Implémentation de la capacité ainsi que des tests unitaires avec l'outil Vitest.</p>
          <p className="gray">Cette capacité est maintenant implémenté dans le jeu !</p>
          <p className="gray">Lien du PR GitHub :
            <a href="https://github.com/pagefaultgames/pokerogue/pull/1831" className="white-link" 
            target="_blank"> [Move] Add Retaliate double damage condition #1831</a></p>
          <strong>Le talent Illusion - </strong>
            <a className="blue-link" href="https://www.pokepedia.fr/Illusion" target="_blank">En savoir plus</a>
          <p className="gray">Implémentation du talent ainsi que des tests unitaires correspondants.</p>
          <p className="gray">Collaboration avec une équipe de traduction pour traduire le message indiquant l'effet de l'illusion.</p>
          <p className="gray">Manipulation de l'UI du jeu.</p>
          <p className="gray">Ce talent est actuellement implémenté dans la version beta du jeu.</p>
          <p className="gray"> Lien du PR GitHub :
            <a href="https://github.com/pagefaultgames/pokerogue/pull/3273" className="white-link" 
            target="_blank"> [Ability] Implement Illusion #3273</a></p>
          </Project>
        </details>
      </div>
    </>
  )
}

export default Projects