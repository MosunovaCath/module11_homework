export function definePrime(num) {
  //40
  let isPrime, result;
  isPrime = true; // Булева переменная показывающая простое число или нет,
  //изначально мы предполагаем что наше число простое то есть true

  if (num > 1 && num <= 1000) {
    for (let i = 2; i < num; i++) {
      //2 ->40(ne vkluchitelno)
      if (num % i === 0) {
        isPrime = false;
      }
    }
    result = isPrime
      ? `Число ${num} - простое число`
      : `Число ${num} - составное число`;
  } else if (num > 1000 || num < 1) {
    result = "Данные неверны";
  }
  return result;
}

export default function multiply(a, b) {
  return a * b;
}
