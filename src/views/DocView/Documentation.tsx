import Header from '../../Components/Header'
import SummaryPart from '../../Components/SummaryPart'
import Prism from 'prismjs'
import { useEffect } from 'react';
import Doc from "../../Components/Doc"

//Doc elements
import { jsSyntaxElements } from './TypescriptDoc/Js_syntax';
import { typingVariablesElements } from './TypescriptDoc/Typing_variables';
import { indexedArrays } from './TypescriptDoc/Indexed_arrays'
import { conditionalStatements } from './TypescriptDoc/Conditional_statements';
import { switchStatements } from './TypescriptDoc/Switch_statements';
import { genericTypes } from './TypescriptDoc/Generic_types';

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
        
        <h2><strong>Javascript / Typescript</strong></h2>
        <Doc title="JS syntax" elements={jsSyntaxElements}></Doc>
        <Doc title="Typing variables" elements={typingVariablesElements}></Doc>
        <Doc title="Indexed arrays" elements={indexedArrays}></Doc>
        <Doc title="Conditional statements" elements={conditionalStatements}></Doc>
        <Doc title="Switch statements" elements={switchStatements}></Doc>
        <Doc title="Generic types" elements={genericTypes}></Doc>
        <Doc title="TS cheat sheets" elements={[
          { type: 'text', content: [{url: "https://www.typescriptlang.org/cheatsheets/"}] }
        ]}></Doc>
      </div>
      <a className="go-up" href="#"><i className="fa-solid fa-angles-up"></i></a>
    </>
  )
}

export default Documentation