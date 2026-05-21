import esport from '../assets/img/hobbies/esport.jpg';
import hspu from '../assets/img/hobbies/hspu.jpg';
import code from '../assets/img/hobbies/code.jpg';
import Hobbie from '../Components/Hobbie';
import Layout from '@/Components/Layout';

function Hobbies() {

  return (
    <Layout title="Mes centres d'intérêt">
      <div className='flex justify-around flex-wrap'>
      <Hobbie img={esport} title='Compétition esportive (Super Smash Bros Ultimate)'>
        <p className='bubble blue-bg'>gestion du stress</p>
        <p className='bubble purple-bg'>concentration</p>
        <p className='bubble purple-bg'>apprentissage</p>
        <p className='bubble yellow-bg'>sociabilisation</p>
        <p className='bubble purple-bg'>réflexion</p>
      </Hobbie>
      <Hobbie img={hspu} title='Musculation / Callisthénie'>
        <p className='bubble orange-bg'>goût de l'effort</p>
        <p className='bubble blue-bg'>forme physique</p>
        <p className='bubble orange-bg'>rigueur</p>
        <p className='bubble orange-bg'>discipline</p>
      </Hobbie>
      <Hobbie img={code} title='Programmation'>
        <p className='bubble purple-bg'>apprentissage</p>
        <p className='bubble red-bg'>passion</p>
        <p className='bubble purple-bg'>veille technologique</p>
        <p className='bubble purple-bg'>algorithmie</p>
        <p className='bubble orange-bg'>autonomie</p>
      </Hobbie>
      </div>
      <div className ="paragraph">
          <h2><strong>Mes centres d'intérêts secondaires</strong></h2>
          <p className="gray">Manga, roller, jeux vidéos</p>
      </div>
    </Layout>
  )
}

export default Hobbies