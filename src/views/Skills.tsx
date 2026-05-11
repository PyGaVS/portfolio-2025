import Layout from '@/Components/Layout'
import List from '@/Components/List'
import skills from '@/data/skills'

function Skills() {
  return (
    <Layout title="Mes compétences">
      <div className="skill">
        {skills.map((section, i) => (
          <details key={i} open={section.open}>
            <summary>{section.summary}</summary>
            <List style={section.bulleted} items={section.items} />
          </details>
        ))}
      </div>
    </Layout>
  )
}

export default Skills
