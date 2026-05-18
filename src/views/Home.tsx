import Layout from '@/Components/Layout'

function Home() {
  return (
    <Layout footer>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 max-w-7xl mx-auto">
        {/* Projects slideshow — gros tile à gauche */}
        <div className="md:col-span-8 border-2 border-dashed border-white/50 rounded-2xl min-h-105 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-bold text-white/70">
            PROJECTS SLIDESHOW <span className="text-base font-normal">(col-span-8)</span>
          </p>
        </div>

        {/* Tech carousel — petit tile à droite */}
        <div className="md:col-span-4 border-2 border-dashed border-white/50 rounded-2xl min-h-105 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-bold text-white/70 text-center px-4">
            TECH CAROUSEL <span className="text-base font-normal block">(col-span-4)</span>
          </p>
        </div>
        
        {/* CTA Knuckles — petit tile à droite */}
        <div className="md:col-span-4 border-2 border-dashed border-white/50 rounded-2xl min-h-90 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-bold text-white/70 text-center px-4">
            CTA KNUCKLES <span className="text-base font-normal block">(col-span-4)</span>
          </p>
        </div>

        {/* Exp timeline — gros tile à gauche */}
        <div className="md:col-span-8 border-2 border-dashed border-white/50 rounded-2xl min-h-90 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-bold text-white/70">
            EXP TIMELINE <span className="text-base font-normal">(col-span-8)</span>
          </p>
        </div>

        
      </div>
    </Layout>
  )
}

export default Home
