/** Простой поиск простых чисел в диапазоне */
export const findPrimesSimple = (startValue, finishValue)  => {
  if (startValue > finishValue)
    throw new Error("Invalid number range")

  const primes = new Array()

  for (let value = startValue; value <= finishValue; value++) {
    if (value === 1) {
      primes.push(value)
      continue
    }

    let isPremis = true;
    for (let j = 2; j < value && isPremis; j++) {
      if (value % j === 0) 
        isPremis = false
    }
  
    if (isPremis)
      primes.push(value)
  }

  return primes
}
