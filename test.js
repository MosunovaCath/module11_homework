// Задание 1. Настроить тестовое окружение JEST
// Можно склонировать репозиторий и вести разработку в нем, либо создать свой собственный.

// Задание 2. Выбрать любую реализованную функцию из тренажера JavaScript, раздел «Функции»
// добавить ее в репозиторий;
// продумать тест-кейсы (успешное/неуспешное выполнение функции);
// продумать корнер-кейсы;
// написать unit-тесты (минимум 3).

let assert = require("assert");

function multiply(a, b) {
  return a * b;
}

function definePrime(num) {
  let isPrime, result;
  isPrime = true;

  if (num > 1 && num <= 1000) {
    for (let i = 2; i < num; i++) {
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
//Напишите функцию countDown(n), которая получает число {n} в
//качестве аргумента и печатает в консоль обратный отсчет, начиная с этого числа. Например, countDown(3) напечатает: 3 2 1.

function countToZero(num) {
  if (num === Infinity || num === -Infinity) {
    return Infinity;
  }
  if (typeof num === "number" && num >= 0) {
    let resStr = num + " ";
    while (num > 1) {
      resStr += num - 1 + " ";
      num--;
    }
    return resStr;
  } else {
    return "Invalid data";
  }
}

describe("multiply", () => {
  test("should return 10", () => {
    expect(multiply(5, 2)).toEqual(10);
  });
  test("should return NaN", () => {
    expect(multiply(5, "ABC")).toEqual(NaN);
  });
  test("should return Infinity", () => {
    expect(multiply(5, Infinity)).toEqual(Infinity);
  });
  test("should return -NaN", () => {
    expect(multiply(5, -Infinity)).toEqual(-Infinity);
  });
});
// describe("multiply", () => { //mocha
//   it("should return 10", () => {
//     const result = multiply(5, 2);
//     assert.equal(result, 10);
//   });
//   it("should return NaN", () => {
//     const result = multiply(5, "ABC");
//     assert.equal(result, NaN);
//   });
//   it("should return Infinity", () => {
//     const result = multiply(5, Infinity);
//     assert.equal(result, Infinity);
//   });
//   it("should return -NaN", () => {
//     const result = multiply(0, -Infinity);
//     assert.equal(result, -NaN);
//   });
// });

describe("count to zero", () => {
  test("should return 10 9 8 7 6 5 4 3 2 1 ", () => {
    expect(countToZero(10)).toEqual("10 9 8 7 6 5 4 3 2 1 ");
  });
  test("should return 11 10 9 8 7 6 5 4 3 2 1 ", () => {
    expect(countToZero(11)).toEqual("11 10 9 8 7 6 5 4 3 2 1 ");
  });
  test("should return Infinity", () => {
    expect(countToZero(Infinity)).toEqual(Infinity);
  });
  test("should return Invalid data", () => {
    expect(countToZero("nity")).toEqual("Invalid data");
  });
  test("should return Invalid data", () => {
    expect(countToZero(-10)).toEqual("Invalid data");
  });
  test("should return 0", () => {
    expect(countToZero(0)).toEqual("0 ");
  });
});
