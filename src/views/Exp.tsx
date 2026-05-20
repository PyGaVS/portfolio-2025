import { Fragment } from 'react'
import Layout from '@/Components/Layout'
import exp from '@/data/exp'
import type {
  ContribProfEntry,
  ExpEntry,
  Inline,
  InterimProfEntry,
  SimpleProfEntry,
  StudyEntry,
} from '@/types/ExpData'

// ─── Renderers ──────────────────────────────────────────────────────────────

const renderInline = (segments: Inline[]) =>
  segments.map((seg, i) =>
    seg.kind === 'text' ? (
      <Fragment key={i}>{seg.value}</Fragment>
    ) : (
      <a
        key={i}
        className={`${seg.style ?? 'blue'}-link`}
        href={seg.href}
        target="_blank"
        rel="noreferrer"
      >
        {seg.label}
      </a>
    ),
  )

function StudyCard({ entry }: { entry: StudyEntry }) {
  return (
    <div className="text-white">
      <i className="fa-solid fa-book text-2xl text-white/90 mb-3 block" />
      <p>
        {entry.text}
        {entry.link && (
          <a
            className={`${entry.link.style ?? 'blue'}-link`}
            href={entry.link.href}
            target="_blank"
            rel="noreferrer"
          >
            {entry.link.label}
          </a>
        )}
      </p>
      {entry.subtitle && (
        <>
          <p className="font-bold mt-3">{entry.subtitle.title} :</p>
          <ul className="list-disc list-inside mt-1">
            {entry.subtitle.items.map((it, i) => (
              <li key={i} className="text-white/85">{it}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

function SimpleCard({ entry }: { entry: SimpleProfEntry }) {
  return (
    <div className="text-white">
      <i className="fa-solid fa-briefcase text-2xl text-white/90 mb-3 block" />
      <p>{renderInline(entry.segments)}</p>
      <p className="text-white/70 text-sm mt-2 italic">{entry.duration}</p>
    </div>
  )
}

function ContribCard({ entry }: { entry: ContribProfEntry }) {
  return (
    <div className="text-white">
      <i className="fa-solid fa-briefcase text-2xl text-white/90 mb-3 block" />
      <p>{entry.intro}</p>
      {entry.contribs.map((c, i) => (
        <div key={i} className="mt-4">
          <p className="font-bold">{c.subtitle}</p>
          <ul className="list-disc list-inside mt-1">
            {c.prs.map((pr, j) => (
              <li key={j}>
                <a
                  className={`${pr.style ?? 'white'}-link`}
                  href={pr.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {pr.label}
                </a>
              </li>
            ))}
          </ul>
          {c.description && (
            <p className="mt-2 text-white/85">{renderInline(c.description)}</p>
          )}
          {c.detailsLink && (
            <p className="mt-2">
              <a
                className={`${c.detailsLink.style ?? 'blue'}-link`}
                href={c.detailsLink.href}
                target="_blank"
                rel="noreferrer"
              >
                {c.detailsLink.label}
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

function InterimCard({ entry }: { entry: InterimProfEntry }) {
  return (
    <div className="text-white">
      <i className="fa-solid fa-briefcase text-2xl text-white/90 mb-3 block" />
      <p>{entry.intro}</p>
      <ul className="list-disc mt-2 space-y-1">
        {entry.jobs.map((job, i) => (
          <li key={i}>
            <a
              className={`${job.link.style ?? 'blue'}-link`}
              href={job.link.href}
              target="_blank"
              rel="noreferrer"
            >
              {job.link.label}
            </a>{' '}
            <span className="text-white/70">({job.duration})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const renderCard = (entry: ExpEntry) => {
  switch (entry.kind) {
    case 'study':   return <StudyCard entry={entry} />
    case 'simple':  return <SimpleCard entry={entry} />
    case 'contrib': return <ContribCard entry={entry} />
    case 'interim': return <InterimCard entry={entry} />
  }
}

// ─── Vue ────────────────────────────────────────────────────────────────────

function Exp() {
  return (
    <Layout title={exp.header}>
      <div className="max-w-5xl mx-auto px-4 py-8 relative">
        {/* Ligne */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30 -translate-x-1/2" />

        <div className="space-y-12">
          {exp.entries.slice().reverse().map((entry, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={i} className="relative grid grid-cols-2 gap-12 items-start">
                {/* Sparkle */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 text-white z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                >
                  <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
                </svg>

                {/* Carte */}
                <div className={isLeft ? 'md:pr-8 pr-2 flex' : 'col-start-2 md:pl-8 pl-2 flex'}>
                  <div className="glassy p-5 max-w-md w-full">
                    {entry.media && (
                      <img
                        src={entry.media.url}
                        alt={entry.media.alt ?? ''}
                        className="w-full object-contain mb-3 no-border"
                      />
                    )}
                    <p className="text-white/70 text-sm font-bold mb-2">{entry.period}</p>
                    {renderCard(entry)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Exp
