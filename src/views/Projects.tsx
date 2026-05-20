import { Fragment, type Key } from 'react'
import Layout from '@/Components/Layout'
import projectSections from '@/data/projects'
import type { Inline, ProjectBlock, ProjectData } from '@/types/ProjectData'

// ─── Renderers ──────────────────────────────────────────────────────────────

const renderInline = (seg: Inline, key: Key) => {
  switch (seg.kind) {
    case 'text':
      return <Fragment key={key}>{seg.value}</Fragment>
    case 'link':
      return (
        <a
          key={key}
          className={`${seg.style ?? 'blue'}-link`}
          href={seg.href}
          target="_blank"
          rel="noreferrer"
        >
          {seg.label}
        </a>
      )
    case 'strong':
      return <strong key={key}>{seg.value}</strong>
  }
}

const renderBlock = (block: ProjectBlock, key: Key) => {
  switch (block.kind) {
    case 'p':
      return <p key={key} className="text-white/85 mb-2">{block.text}</p>
    case 'p-rich':
      return (
        <p key={key} className="text-white/85 mb-2">
          {block.segments.map((s, i) => renderInline(s, i))}
        </p>
      )
    case 'inline':
      return (
        <Fragment key={key}>
          {block.segments.map((s, i) => renderInline(s, i))}
        </Fragment>
      )
    case 'ul':
      return (
        <ul key={key} className="list-disc list-inside text-white/85 mb-2 space-y-1">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )
    case 'image':
      return (
        <img
          key={key}
          src={block.source}
          alt="project pic"
          className="rounded-lg my-3 w-full max-h-96 object-contain"
        />
      )
    case 'iframe':
      return (
        <iframe
          key={key}
          className="ytb-embed rounded-lg my-3"
          width={`${block.width ?? 1000}px`}
          src={block.src}
          title={block.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )
  }
}

// ─── Card projet ────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: ProjectData }) {
  const cover = project.images[0]

  return (
    <details
      id={project.id}
      className="glassy overflow-hidden group transition-shadow duration-300 hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)]"
    >
      <summary className="cursor-pointer list-none flex items-center gap-4 p-4 hover:bg-white/5 transition-colors">
        {cover && (
          <img
            src={cover.source}
            alt={project.title}
            className="w-16 h-16 object-cover rounded shrink-0 no-border"
          />
        )}
        <h3 className="flex-1 text-base md:text-lg font-bold text-white group-hover:text-shadow-glow transition-all">
          {project.title}
        </h3>
        <i className="fa-solid fa-chevron-down text-white/60 transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <div className="px-5 py-4 border-t border-white/10">
        {project.body.map((block, bi) => renderBlock(block, bi))}
        {project.images.length > 0 && (
          <div
            className="flex flex-wrap gap-3 mt-4"
          >
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img.source}
                alt="project pic"
                className="rounded-lg max-h-96 object-contain"
              />
            ))}
          </div>
        )}
      </div>
    </details>
  )
}

// ─── Vue ────────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <Layout title="Mes réalisations">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-12">
        {projectSections.map((section, si) => (
          <section key={si}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 glow-text">
              {section.heading}
            </h2>

            {section.groups.map((group, gi) => (
              <div key={gi} className="mb-6 last:mb-0">
                {group.heading && (
                  <h3 className="text-base md:text-lg font-bold text-white/70 uppercase tracking-wider mb-3">
                    {group.heading}
                  </h3>
                )}
                <div className="space-y-3">
                  {group.projects.map((p, pi) => (
                    <ProjectCard key={pi} project={p} />
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
