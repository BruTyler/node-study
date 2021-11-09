import colors from "colors/safe.js"
import { findPrimesSimple } from "./utils/prime-numbers.js"
import { multiPrint } from "./utils/printer.js";
const { red, green, yellow } = colors

const startValue = Number(process.argv[2])
const finishValue = Number(process.argv[3])

if (isNaN(startValue) || isNaN(finishValue))
  throw new Error("Invalid numbers")

const primes = findPrimesSimple(startValue, finishValue)

primes.length === 0
  ? console.log(red("Empty list"))
  : multiPrint(
    primes,
    first => console.log(red(first)),
    second => console.log(yellow(second)),
    third => console.log(green(third))
    //fourth => console.log(fourth)
  )
