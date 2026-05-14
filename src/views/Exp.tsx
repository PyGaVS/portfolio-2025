import { Fragment, type Key } from 'react';
import Layout from '@/Components/Layout';
import exp from '@/data/exp';
import type { Inline, Link, ProfExpEntry } from '@/types/ExpData';

const renderInline = (seg: Inline, key: Key) => {
  if (seg.kind === 'text') return <Fragment key={key}>{seg.value}</Fragment>;
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
  );
};

const renderLink = ({ label, href, style }: Link) => (
  <a
    className={`${style ?? 'blue'}-link`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {label}
  </a>
);

const renderProfEntry = (entry: ProfExpEntry, i: number) => {
  switch (entry.kind) {
    case 'simple':
      return (
        <Fragment key={i}>
          <h2><strong>{entry.period}</strong></h2>
          <p className="gray">{entry.segments.map((s, j) => renderInline(s, j))}</p>
          <p className="gray">{entry.duration}</p>
        </Fragment>
      );

    case 'contrib':
      return (
        <Fragment key={i}>
          <h2><strong>{entry.period}</strong></h2>
          <p className="gray">{entry.intro}</p>
          {entry.contribs.map((c, ci) => (
            <Fragment key={ci}>
              {ci > 0 && <br />}
              <p><strong>{c.title} </strong></p>
              {c.prs.map((pr, pi) => (
                <p key={pi}>{renderLink(pr)}</p>
              ))}
              {c.description && (
                <p className="gray">{c.description.map((s, j) => renderInline(s, j))}</p>
              )}
              {c.detailsLink && <p>{renderLink(c.detailsLink)}</p>}
            </Fragment>
          ))}
        </Fragment>
      );

    case 'interim':
      return (
        <Fragment key={i}>
          <h2><strong>{entry.period}</strong></h2>
          <p className="gray">{entry.intro}</p>
          {entry.jobs.map((job, ji) => (
            <p key={ji} className="gray">
              {renderLink(job.link)} ({job.duration})
            </p>
          ))}
        </Fragment>
      );
  }
};

function Exp() {
  return (
    <Layout title={exp.header}>
      <details>
        <summary>{exp.studies.summary}</summary>
        <div className="paragraph">
          {exp.studies.entries.map((entry, i) => (
            <Fragment key={i}>
              <h2><strong>{entry.period}</strong></h2>
              <p className="gray">{entry.text}</p>
              {entry.specialties && (
                <>
                  <strong>{entry.specialties.title} : </strong>
                  {entry.specialties.items.map((item, ii) => (
                    <p key={ii} className="gray">{item}</p>
                  ))}
                </>
              )}
            </Fragment>
          ))}
        </div>
      </details>

      <details>
        <summary>{exp.profExp.summary}</summary>
        <div className="paragraph">
          {exp.profExp.entries.map(renderProfEntry)}
        </div>
      </details>
    </Layout>
  );
}

export default Exp;
