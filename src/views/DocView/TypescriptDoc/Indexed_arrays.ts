import {Code, Text} from '../../../types/DocData';

export const indexedArraysElements: (Code | Text)[] = [
  {
    type: 'code', language: 'javascript',
    content: `
let list0: number[] = [3, 7, 4.9, 3+6]
// An array that must contain only numbers

let list1: any[] = [5, "t"]
// An array that can contain elements of any type

let list2: [number, string, boolean] = [3, "a", false]
// Fixed length and order

let list3: (number | string)[] = ["a", 4, 5]
// Only number and string type

console.log(list0[0])   // Display the first element on list0


// Browse an array :

for(let i in list1){
  console.log(n°\${i} : \${list1[i]})
}

for(let i of list1){
  console.log(i)
}
    `,
    result: {
      type: 'console',
      content: [
        '3',
        'n°0 : 5',
        'n°1 : t',
        '5',
        't'
      ]
    }
  },
  {
    type: 'text',
    content: [`In a "for" loop, you can use "in" to retrieve the index or "of" to directly retrieve the value`]
  }
]