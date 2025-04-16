import {Code, Text} from '../../../types/DocData';

export const switchStatementsElements: (Code | Text)[] = [
  {
    language: "javascript",
    type: "code",
    content: `
let fruit: string = 'ba'

// ALTERNATIVE 1

switch (fruit){
    case 'ba':
        console.log('banana')
        break

    case 'ki':
        console.log('kiwi')
        break

    case 'ma':
        console.log('mango')
        break

    default:
        console.log('unknown fruit')
}

// ALTERNATIVE 2

// Create a type for the fruits variable
type Switch = {
    [key: string]: (...params: unknown[]) => void
    default:  (...params: unknown[]) => void
}

const fruits: Switch = {
    ba: () => console.log('banana'),
    ki: () => console.log('kiwi'),
    ma: () => console.log('mango'),
    default: console.log
}

// Use the switch with a constant
const fruit2: (...params: unknown[]) => void = fruits['apple'] ?? fruits.default
fruit2('unknown ', 'fruit'); // Use parameters for custom default value

// Use the switch without an intermediary
(fruits['ki'] ?? fruits.default)('unknown fruit')
    `,
    result: {
      type: 'console',
      content: [
        'banana',
        'unknown fruit',
        'kiwi'
      ]
    }
  },
  {
    type: 'text',
    content: ['If there is no "break" at the end of a "case", the default will also be executed']
  },
  {
    type: 'text',
    content: ["If the fruit is'nt found, the executed function will behave the same way as a console.log()"]
  }
];