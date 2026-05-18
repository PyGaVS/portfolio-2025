import Layout from '@/Components/Layout'
import ProjectSlideshow from '@/Components/ProjectSlideshow'
import TechRing from '@/Components/TechRing'

function Home() {
  return (
    <Layout footer>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 max-w-5/6 max-w-9xl mx-auto">
        {/* Tech carousel */}
        <div className="md:col-span-5 relative min-h-105">
          <TechRing />
        </div>
      
        {/* Projects slideshow */}
        <div className="md:col-span-7 relative min-h-105">
          <ProjectSlideshow />
        </div>

        {/* Exp timeline */}
        <div className="md:col-span-8 border-2 border-dashed border-white/50 rounded-2xl min-h-90 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-bold text-white/70">
            EXP TIMELINE <span className="text-base font-normal">(col-span-8)</span>
          </p>
        </div>

        {/* CTA Knuckles */}
        <div className="md:col-span-4 border-2 border-dashed border-white/50 rounded-2xl min-h-90 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-bold text-white/70 text-center px-4">
            CTA KNUCKLES <span className="text-base font-normal block">(col-span-4)</span>
          </p>
        </div>

        
      </div>
    </Layout>
  )
}

export default Home
