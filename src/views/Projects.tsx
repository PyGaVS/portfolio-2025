import { Fragment, type Key } from 'react'
import Layout from '@/Components/Layout'
import Project from '../Components/Project'
import projectSections from '../data/projects'
import type { Inline, ProjectBlock } from '../types/ProjectData'

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
        >{seg.label}</a>
      )
    case 'strong':
      return <strong key={key}>{seg.value}</strong>
  }
}

const renderBlock = (block: ProjectBlock, key: Key) => {
  switch (block.kind) {
    case 'p':
      return <p key={key} className="gray">{block.text}</p>
    case 'p-rich':
      return <p key={key} className="gray">{block.segments.map((s, i) => renderInline(s, i))}</p>
    case 'inline':
      return <Fragment key={key}>{block.segments.map((s, i) => renderInline(s, i))}</Fragment>
    case 'ul':
      return (
        <ul key={key} className="gray">
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      )
    case 'image':
      return <img key={key} src={block.source} alt="project pic" width={`${block.width}px`} />
    case 'iframe':
      return (
        <iframe
          key={key}
          className="ytb-embed"
          width={`${block.width}px`}
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

function Projects() {
  return (
    <Layout title="Mes réalisations">
      <div className="paragraph">
        {projectSections.map((section, si) => (
          <details key={si} className="big">
            <summary>{section.heading}</summary>
            {section.groups.map((group, gi) => (
              <Fragment key={gi}>
                {group.heading && <h2><strong>{group.heading}</strong></h2>}
                {group.projects.map((p, pi) => (
                  <Project key={pi} title={p.title} id={p.id} images={p.images}>
                    {p.body.map((block, bi) => renderBlock(block, bi))}
                  </Project>
                ))}
              </Fragment>
            ))}
          </details>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
