import {Code, Text} from '../../../types/DocData';

export const conditionalStatements: (Code | Text)[] = [
  {
    type: 'code', language: 'javascript',
    content: `
let x: number = 4;

if (x > 4){
    console.log('x is greater than 4')
} else if (x==4){
    console.log('x equal 4')
} else {
    console.log('x is less than 4')
}

while(x >= 0){
    console.log(x)
    x -= 1
}    
    `,
    result: {
      type: 'console', css: false,
      content: [
        'x is greater than 4',
        '4',
        '3',
        '2',
        '1',
        '0'
      ]
    }
  },
  {
    type: 'text',
    content: [`"x -= 1" is a shortcut for "x = x - 1"`]
  },
  {
    type: 'code', language: 'javascript',
    content: `
function check(age: number): string {
    return age >= 18 ? "adult" : age > 0 ? "minor" : "invalid"
}

console.log(check(18));
console.log(check(17));
    `,
    result: {
      type: 'console', css: false,
      content: [
        'majeur',
        'mineur'
      ]
    }
  }
]