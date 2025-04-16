import Header from '../../Components/Header'
import SummaryPart from '../../Components/SummaryPart'
import Prism from 'prismjs'
import { useEffect } from 'react';
import Doc from "../../Components/Doc"

//Doc elements
import { jsSyntaxElements } from './TypescriptDoc/Js_syntax';
import { typingVariablesElements } from './TypescriptDoc/Typing_variables';
import { indexedArraysElements } from './TypescriptDoc/Indexed_arrays'
import { conditionalStatementsElements } from './TypescriptDoc/Conditional_statements';
import { switchStatementsElements } from './TypescriptDoc/Switch_statements';
import { genericTypesElements } from './TypescriptDoc/Generic_types';
import { flexboxElements } from './CssDoc/Flexbox';

function Documentation() {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <Header>Documentation personelle</Header>
      <div className='paragraph-with-code'>
        <h2><strong>Summary</strong></h2>
        <div className='doc-summary'>
          {/*<SummaryPart parts={[
            'Header', 'Add CSS', 'Font Awesome', 'Lists', 'Tables', 'Images',
            'Hyperlinks', 'Forms'
            ]}>HTML / CSS</SummaryPart>*/}
          <SummaryPart parts={[
            'Flexbox'
            ]}>CSS</SummaryPart>
          <SummaryPart parts={[
            'JS syntax', 'Typing variables', 'Indexed arrays', 'Conditional statements', 'Switch statements',
            'Generic types', 'TS cheat sheets'
            ]}>JavaScript / TypeScript</SummaryPart>
          {/*<SummaryPart parts={[
            'PHP syntax', 'PHP indexed arrays', 'Associative arrays', 'Prepare and secure an SQL query'
            ]}>PHP</SummaryPart>*/}
          {/*<SummaryPart parts={[
            'Generate a feature', 'Create routes', 'Create migrations'
            ]}>Laravel</SummaryPart>*/}
        </div>
        <h2><strong>CSS</strong></h2>
        <Doc title="Flexbox" elements={flexboxElements}></Doc>

        <h2><strong>Javascript / Typescript</strong></h2>
        <Doc title="JS syntax" elements={jsSyntaxElements}></Doc>
        <Doc title="Typing variables" elements={typingVariablesElements}></Doc>
        <Doc title="Indexed arrays" elements={indexedArraysElements}></Doc>
        <Doc title="Conditional statements" elements={conditionalStatementsElements}></Doc>
        <Doc title="Switch statements" elements={switchStatementsElements}></Doc>
        <Doc title="Generic types" elements={genericTypesElements}></Doc>
        <Doc title="TS cheat sheets" elements={[
          { type: 'text', content: [{url: "https://www.typescriptlang.org/cheatsheets/"}] }
        ]}></Doc>
      </div>
      <a className="go-up" href="#"><i className="fa-solid fa-angles-up"></i></a>
    </>
  )
}

export default Documentation