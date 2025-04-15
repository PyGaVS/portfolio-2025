import {Code, Text} from '../../../types/DocData';

export const genericTypes: (Code | Text)[] = [
  {
    type: 'text',
    content: [
      `Generic types allow you to define functions that can operate on various input and output types, with the specific 
      types specified when the function is called`
    ]
  },
  {
    type: 'text',
    content: [
      `In the example below, both parameters "v1" and "v2" must be of the same type "T", which can vary depending on how the function is invoked`
    ]
  },
  {
    type: 'code', language: 'javascript',
    content: `
function add<T extends number | string | unknown[]>(v1: T, v2: T): T {

  if (typeof v1 == "string"){
    return v1 + v2 as T
  } else if (typeof v1 == "number" && typeof v2 == "number"){
    return v1 + v2 as T
  } else if (v1 instanceof Array && v2 instanceof Array){
    return [...v1, ...v2] as T
  } else {
    return "params not valid" as T
  }
}

console.log(add<(string | number)[]>([1, 2, 3], ["a", "u"]))
console.log(add<string>("hello ", "world"))
console.log(add<number>(6, 4))
console.log(add(6, 4)) // Also works
    `,
    result: {
      type: 'console', css: false,
      content: [
        "[ 1, 2, 3, 'a', 'u' ]",
        "hello world",
        "10",
        "10"
      ]
    }
  }
]