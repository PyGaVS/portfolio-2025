import {Code, Text} from '../../../types/DocData';

export const flexboxElements: (Code | Text)[] = [
  {
    type: 'text',
    content: [
      {name: "Complete Flexbox guide here ", url:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},
      "and one example below :"
    ]
  },
  {
    type: 'code', language: 'html',
    content: `
<div class="container">
    <div class="item1"></div>
    <div class="item2"></div>
</div>
    `,
    result: {
      type: 'web', content: null,
      css: {
        type: 'code', language: 'css',
        content: `
div {
    border: solid black;
    min-height: 60px;
    min-width: 60px;
    padding: 5px;
    margin: 5px;
}

.container {
    background-color: gray;
    height: 150px;

    display: flex;
    flex-direction: row;    /* Direction de la Flexbox */
    flex-wrap: wrap;    /* Gérer le débordement de la Flexbox*/
    flex-flow: row wrap;    /* Un raccourci qui rassemble les deux propriétés si-dessus*/
    justify-content: center;    /* Position des éléments par rapport à la flex-direction */
    align-items: flex-start;    /* Alignement des éléments */
    gap : 20px;     /* Espace entre les éléments */
}

.item1, .item2{
    background-color: lightblue;
}    
        `
      }
    }
  }
]