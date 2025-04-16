import {Code, Text} from '../../../types/DocData';

export const jsSyntaxElements: (Code | Text)[] = [
  {
    language: "javascript", 
    type: "code", 
    content: `
const a = 3
let b = 3
b = 4
console.log("hello world")
  `},
  {
    language: "javascript", type: "code", 
    content: `
function add(v1, v2){
  console.log(v1 + v2)
}
add(5,6)
    `, 
    result: {
      type: 'console', 
      content: ['11']
    }
  },
  {
    type: 'text',
    content: [
      `We use "let" to define a variable that can be modified, and "const" to define a variable that cannot be modified. 
      "var" is an old way to define variables`
    ]
  },
  {
    type: 'text',
    content: [
      `We use "console.log()" to display what we want in the console`
    ]
  }
]