// IF GA OID MASALALAR

// 1-masala

// let age = +prompt(`Yoshingizni kiriting!`);

// let res;

// if (age >= 18) {
//     res = `Siz katta yoshdagisiz`;
// } else {
//     res = `Siz hali yoshsiz`
// }

// console.log(res);

// 2-masala

// let son = +prompt(`Son kiriting!`);

// if (son % 2 == 0) {
//     console.log(`Juft`);
// } else {
//     console.log(`Toq`);
// }

// 3-masala

// let son = +prompt("Istalgan sonni kiriting: ");
// if (son > 0) {
//     console.log("Kiritilgan son musbat.");
// } else if (son < 0) {
//     console.log("Kiritilgan son manfiy.")
// } else {
//     console.log("Kiritilgan son nolga teng.")
// }

// 4-masala

// let harorat = +prompt("Hozirgi haroratni kiriting")
// if (harorat > 20) {
//     console.log("Yengil kiying")
// } else {
//     console.log("Qalin kiying")
// }

// 5-masala

// let baho = +prompt("Imtihon natijasini kiriting: ")
// if (baho >= 90) {
//     console.log("A'lo")
// } else if (baho >= 70) {
//     console.log("Yaxshi")
// } else if (baho >= 50) {
//     console.log("Qoniqarli")
// } else {
//     console.log("Yomon")
// }

// 6-masala

// let name = prompt(`Ism kiriting!`)

// if (name == `Ali`) {
//     console.log(`Salom, Ali!`);
// } else {
//     console.log(`Salom, mehmon!`);
// }

// 7-masala

// let summa = +prompt(`Summani kiriting!`);

// if (summa >= 100) {
//     console.log(`Chegirma qo'llanildi`);
// } else {
//     console.log(`Chegirma mavjud emas`);   
// }

// TERNARY

//1-masala
// let temperature = +prompt("Haroratni kiriting");
// temperature >= 25 ? console.log("Issiq") : console.log("Sovuq");

//2-masala
// let point = +prompt("Ballni kiriting");
// point >= 50 ? console.log("O`tdi") : console.log("Yiqildi");

//3-masala
// let num = +prompt("Sonni kiriting");
// num > 0 ? console.log("Musbat") : console.log("Manfiy");

// For ga oid masalalar

//1-masala
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//2-masala
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

//3-masala
// for (let i = 2; i <= 100; i+=2) {
//     console.log(i);
// }

//4-masala
// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

//5-masala
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

//6-masala
// let kopaytma = 1;
// for (let i = 1; i <= 10; i++) {
//   kopaytma = kopaytma * i;
// }
// console.log(kopaytma);

//7-masala
// let p = 1;
// let num = +prompt("Sonni kiriting");
// for (let i = 1; i <= num; i++) {
//   p *= i;
// }
// console.log(p);

//8-masala
// for (let i = 1; i <= 50; i++) {
//   console.log(i ** 2);
// }

//9-masala
// for (let i = 1; i <= 20; i++) {
//   console.log(i ** 3);
// }

//10-masala
// let sum = 0;
// for (let i = 1; i <= 1000; i++) {
//   sum += i;
// }
// console.log(sum);

//11-masala
// for (let i = 1; i <= 5; i++) {
//   console.log("Salom");
// }

//12-masala
// for (let i = 1; i <= 100; i++) {
//   console.log(i * i);
// }

//13-masala
// for (let i = 1; i <= 10; i++) {
//   console.log(2 ** i);
// }

//14-masala
// let num = +prompt("Sonni kiriting");
// for (let i = 1; i <= num; i++) {
//   console.log(i ** 2);
// }

// 15-masala

for (i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
}

//  Boolean ga oid masalalar

//1-masala
// let A = +prompt("A sonni kiriting");
// let B = +prompt("B sonni kiriting");
// if ((A % 2 == 0 && B % 2 == 0)  (A % 3 == 1 && B % 2 == 1)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//2-masala
// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let c = +prompt("c sonni kiriting");
// if (a > 0 && b > 0 && c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//3-masala
// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let c = +prompt("c sonni kiriting");
// if (a > 0  b > 0  c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//4-masala
// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let c = +prompt("c sonni kiriting");
// if (
//   (a > 0 && b < 0 && c < 0) 
//   (a < 0 && b > 0 && c < 0) 
//   (a < 0 && b < 0 && c > 0)
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//5-masala
// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let c = +prompt("c sonni kiriting");
// if (
//   (a > 0 && b > 0 && c < 0) 
//   (a < 0 && b > 0 && c > 0) ||
//   (a > 0 && b < 0 && c < 0)
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//6-masala
// let num = 57;
// if (num > 9 && num < 100 && num % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }