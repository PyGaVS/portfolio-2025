import { Code, Text } from "../../../types/DocData";

export const typingVariablesElements: (Code | Text)[] = [
  {
    type: 'code', language: 'javascript',
    content: `
const a: number = 3       
const c: string = 'this is a string'

function add(v1: number, v2: number){
  console.log(v1 + v2)
}       
    `
  },
  {
    type: 'text',
    content: [
      `Typescript allow us to type variables`
    ]
  }
]