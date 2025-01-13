// 1-for

//const k = parseInt(prompt("k sonini kiriting: "));
//const n = parseInt(prompt("n sonini kiriting (n > 0): "));

//if (n > 0) {
// for (let i = 0; i < n; i++) {
//console.log(k);
// }
//} else {
//console.log("n soni 0 dan katta bo'lishi kerak!");
//}

//
//   2-for
//const pricePerKg = parseFloat(prompt("1 kg konfetning narxini kiriting: "));

//if (pricePerKg > 0) {
// console.log("Konfetning narxlari:");
// for (let i = 0.1; i <= 1.0; i += 0.1) {
// console.log(`${i.toFixed(1)} kg = ${(pricePerKg * i).toFixed(2)} so'm`);
//  }
//} else {
//console.log("Narx musbat bo'lishi kerak!");
//}

//   3-for

//const n = parseInt(prompt("n sonini kiriting (n > 0): "));

//if (n > 0) {
// let S = 0;
// for (let i = n; i <= 2 * n; i++) {
// S += i ** 2;
// }
//console.log(`Yig'indi S = ${S}`);
//} else {
// console.log("n soni 0 dan katta bo'lishi kerak!");
//}

// 4-for

//const N = parseInt(prompt("N sonini kiriting (N > 0): "));

//if (N > 0) {
// let S = 0;
//for (let i = 1; i <= N; i++) {
//S += i ** (N - i + 1);
// }
// console.log(`Yig'indi S = ${S}`);
//} else {
//console.log("N soni 0 dan katta bo'lishi kerak!");
//}

// 5-for

//const A = parseInt(prompt("A sonini kiriting (A < B): "));
//const B = parseInt(prompt("B sonini kiriting (A < B): "));

//if (A < B) {//
// for (let i = A; i <= B; i++) {

//console.log(`${i}:`.repeat(i).slice(0, i).replace(/:/g, `\n`));
//  }
//} else {
//console.log("A soni B sonidan kichik bo'lishi kerak!");
//}

// 6-for

//const num = parseInt(prompt("Sonni kiriting (butun son): "));

//if (num > 0) {
// console.log(`${num} sonining bo'luvchilari:`);
// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//       console.log(i);
//     }
// }
//} else {
// console.log("Iltimos, musbat butun son kiriting.");
//}

// Uy ishi

// for 1

// const a = parseInt(prompt("a sonini kiriting (a < b): "));
// const b = parseInt(prompt("b sonini kiriting (a < b): "));

// if (a < b) {
//   let count = 0;
//   console.log("a va b orasidagi sonlar:");
//   for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++;
//   }
//   console.log(`Chiqarilgan sonlar soni: ${count}`);
// } else {
//   console.log("a soni b sonidan kichik bo'lishi kerak!");
// }

// for 2

//const a = parseInt(prompt("a sonini kiriting (a < b): "));
//const b = parseInt(prompt("b sonini kiriting (a < b): "));

//if (a < b) {
//let count = 0;
// console.log(
//  "a va b orasidagi sonlar (a va b dan tashqari, kamayish tartibida):"
//  );

// for (let i = b - 1; i > a; i--) {
//console.log(i);
// count++;
// }

// console.log(`Chiqarilgan sonlar soni: ${count}`);
//} else {
// console.log("a soni b sonidan kichik bo'lishi kerak!");
//}

// for 3

// const pricePerKg = parseFloat(prompt("1 kg konfetning narxini kiriting: "));

// if (pricePerKg > 0) {
//   console.log("Konfetning narxlari:");
//   console.log(`1 kg = ${(pricePerKg * 1).toFixed(2)} so'm`);
//   console.log(`2 kg = ${(pricePerKg * 2).toFixed(2)} so'm`);
//   console.log(`3 kg = ${(pricePerKg * 3).toFixed(2)} so'm`);
//   console.log(`4 kg = ${(pricePerKg * 4).toFixed(2)} so'm`);
//   console.log(`5 kg = ${(pricePerKg * 5).toFixed(2)} so'm`);
//   console.log(`6 kg = ${(pricePerKg * 6).toFixed(2)} so'm`);
//   console.log(`7 kg = ${(pricePerKg * 7).toFixed(2)} so'm`);
//   console.log(`8 kg = ${(pricePerKg * 8).toFixed(2)} so'm`);
//   console.log(`9 kg = ${(pricePerKg * 9).toFixed(2)} so'm`);
//   console.log(`10 kg = ${(pricePerKg * 10).toFixed(2)} so'm`);
// } else {
//   console.log("Iltimos, musbat narx kiriting!");
// }

// for 4

//const pricePerKg = parseFloat(prompt("1 kg konfetning narxini kiriting: "));

//if (pricePerKg > 0) {
// console.log("Konfetning narxlari:");
// for (let kg = 1.2; kg <= 2; kg += 0.2) {
//     console.log(`${kg.toFixed(1)} kg = ${(pricePerKg * kg).toFixed(2)} so'm`);
// }
//} else {
// console.log("Iltimos, musbat narx kiriting!");
//}

// for 5

//const a = parseInt(prompt("a sonini kiriting (a < b): "));
//const b = parseInt(prompt("b sonini kiriting (a < b): "));

//if (a < b) {
//let sum = 0;

// for (let i = a; i <= b; i++) {
//sum += i;
// }

//console.log(`a dan b gacha bo'lgan sonlar yig'indisi: ${sum}`);
//} else {
// console.log("a soni b sonidan kichik bo'lishi kerak!");
//}

// for 6

// const a = parseInt(prompt("a sonini kiriting (a < b): "));
// const b = parseInt(prompt("b sonini kiriting (a < b): "));
// sonlarKopaytmasi(a, b);
// function sonlarKopaytmasi(a, b) {
//   if (a >= b) {
//     console.log("a soni b dan kichik bo'lishi kerak!");
//     return;
//   }

//   let kopaytma = 1;
//   for (let son = a; son <= b; son++) {
//     kopaytma *= son;
//   }

//   console.log(
//     `${a} dan ${b} gacha bo'lgan barcha sonlar ko'paytmasi: ${kopaytma}`
//   );
// }

// for 7

// const a = parseInt(prompt("a sonini kiriting (a < b): "));
// const b = parseInt(prompt("b sonini kiriting (a < b): "));
// sonlarKvadratlarYigindisi(a, b);
// function sonlarKvadratlarYigindisi(a, b) {
//   if (a >= b) {
//     console.log("a soni b dan kichik bo'lishi kerak!");
//     return;
//   }

//   let yigindi = 0;
//   for (let son = a; son <= b; son++) {
//     yigindi += son * son; // Kvadratini qo'shish
//   }

//   console.log(
//     `${a} dan ${b} gacha bo'lgan barcha sonlar kvadratlarining yig'indisi: ${yigindi}`
//   );
// }

// for 8

// function calculateSum(n) {
//   if (n <= 0) {
//     throw new Error("n > 0 bo'lishi kerak.");
//   }

//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
//   }

//   return sum;
// }

// const n = 10;
// console.log(`Yig'indi: ${calculateSum(n)}`);

// for 9

// function calculateProduct(n) {
//   if (n <= 0) {
//     throw new Error("n > 0 bo'lishi kerak.");
//   }

//   let product = 1;

//   for (let i = 1; i <= n; i++) {
//     product *= 1 + i / 10;
//   }

//   return product;
// }

// const n = 10;
// const result = calculateProduct(n);
// console.log(`n = ${n} bo'lganda, ko'paytma: ${result}`);

// for 10

// function printSquares(n) {
//   if (n <= 0) {
//     console.log("n soni 0 dan katta bo'lishi kerak");
//     return;
//   }

//   for (let i = 1; i <= n; i++) {
//     let square = 0;
//     console.log(`Son: ${i}`);

//     for (let j = 1; j <= i; j++) {
//       square += 2 * j - 1;
//       console.log(`Qo'shiluvchilar yig'indisi: ${square}`);
//     }

//     console.log(`\n${i} sonining kvadrati: ${square}\n`);
//   }
// }

// let n = 2;
// printSquares(n);

// for 11

// function power(a, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= a;
//   }
//   return result;
// }

// let a = 2.5;
// let n = 4;
// let result = power(a, n);
// console.log(result);

// for 12

// function printPowers(a, n) {
//   for (let i = 1; i <= n; i++) {
//     let result = Math.pow(a, i);
//     console.log(`a^${i} = ${result}`);
//   }
// }

// let a = 2;
// let n = 4;
// printPowers(a, n);

// for 13

// function calculateSum(a, n) {
//   let sum = 1;

//   for (let i = 1; i <= n; i++) {
//     sum += Math.pow(a, i);
//   }

//   return sum;
// }

// let a = 2;
// let n = 4;
// let result = calculateSum(a, n);
// console.log(`S = ${result}`);

// for 14

// function factorialSum(n) {
//   if (n <= 0) {
//     return "n musbat butun son bo'lishi kerak!";
//   }

//   let sum = 0;

//   function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//       result *= i;
//     }
//     return result;
//   }

//   for (let i = 1; i <= n; i++) {
//     sum += factorial(i);
//   }

//   return sum;
// }

// let n = 5;
// console.log("Yig'indi:", factorialSum(n));

// for 15

// function powerSum(N, K) {
//   if (N <= 0 || K < 0) {
//     return "N musbat bo'lishi va K manfiy bo'lmasligi kerak!";
//   }

//   let sum = 0;

//   for (let i = 1; i <= N; i++) {
//     sum += Math.pow(i, K);
//   }

//   return sum;
// }

// let N = 5;
// let K = 2;
// console.log("Yig'indi:", powerSum(N, K));

// for 16

// let N = parseInt(prompt("N butun sonini kiriting: "));

// let S = 0;

// for (let i = 1; i <= N; i++) {
//   S += Math.pow(i, i);
// }

// console.log("Yig'indi S =", S);

// for 17

// function printNumbers(A, B) {
//   if (A >= B) {
//     console.error("A soni B dan kichik bo'lishi kerak.");
//     return;
//   }

//   for (let i = A; i <= B; i++) {
//     for (let j = 0; j < i - A + 1; j++) {
//       console.log(i);
//     }
//   }
// }

// const A = 3;
// const B = 6;
// printNumbers(A, B);

// for18

// Sonning barcha bo'luvchilarini, ularning sonini va yig'indisini chiqaruvchi dastur.

// function findDivisors(number) {
//   if (number <= 0) {
//     console.error("Musbat butun son kiriting.");
//     return;
//   }

//   let divisors = [];
//   let sum = 0;

//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       divisors.push(i);
//       sum += i;
//     }
//   }

//   console.log("Bo'luvchilar:", divisors.join(", "));
//   console.log("Bo'luvchilar soni:", divisors.length);
//   console.log("Bo'luvchilar yig'indisi:", sum);
// }

// const number = 28;
// findDivisors(number);

// for 19

// function isPrime(n) {
//   if (n <= 1) {
//     console.error("n soni 1 dan katta bo'lishi kerak.");
//     return;
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       console.log(`${n} tub emas.`);
//       return;
//     }
//   }

//   console.log(`${n} tub son.`);
// }

// const n = 30;
// isPrime(n);

// for 20

// function printPattern(N) {
//  if (N <= 0) {
//     console.error("N musbat butun son bo'lishi kerak.");
//     return;
//   }

//   for (let i = 1; i <= N; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//       line += j + " ";
//     }
//     console.log(line.trim());
//   }
// }

// const N = 10;
// printPattern(N);
