import { Link } from 'react-router'
import Layout from '@/Components/Layout'
import ProjectSlideshow from '@/Components/ProjectSlideshow'
import TechRing from '@/Components/TechRing'
import ExpTimeline from '@/Components/ExpTimeline'
import approved from '@/assets/img/approved-meme.jpg'
import StarBorder from '@/Components/StarBorder'

function Home() {
  return (
    <Layout footer>
      <div className="grid grid-cols-1 md:grid-cols-10 xl:grid-cols-12 gap-4 p-4 md:p-6 max-w-5/6 max-w-9xl mx-auto">
        {/* Tech ring */}
        <div className="md:col-span-6 xl:col-span-5 relative min-h-105">
          <TechRing />
        </div>

        {/* Projects slideshow */}
        <div className="md:col-span-4 xl:col-span-7 relative min-h-105">
          <ProjectSlideshow />
        </div>

        {/* Exp timeline */}
        <div className="md:col-span-6 xl:col-span-8 relative min-h-60 mb-10">
          <ExpTimeline />
        </div>

        {/* CTA Knuckles */}
        <div className="md:col-span-4 glassy min-h-60 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <img
            src={approved}
            alt="Knuckles approuvé"
            className="w-44 max-w-full rounded-lg no-border"
          />
          <p className="text-xl md:text-2xl font-bold glow-text">
            Travaillons ensemble
          </p>
          <StarBorder
            as={Link}
            to="contact"
            className="no-underline hover:text-shadow-glow transition-all duration-300"
          >
            Me contacter →
          </StarBorder>
        </div>
      </div>
    </Layout>
  )
}

export default Home
