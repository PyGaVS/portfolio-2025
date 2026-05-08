import Header from '../Components/Header'
import List from '../Components/List'
import skills from '../data/skills'

function Skills() {
  return (
    <>
      <Header>Mes compétences</Header>
      <div className="skill">
        {skills.map((section, i) => (
          <details key={i} open={section.open}>
            <summary>{section.summary}</summary>
            <List style={section.bulleted} items={section.items} />
          </details>
        ))}
      </div>
    </>
  )
}

export default Skills
