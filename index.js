const billion = 1.86e9;
const ms = 1e-6;
const question = 36 / 1.5;
const question2 = 0.75 + 0.43 - 0.957;
const question3 = 0.3 * 0.008 * 4;

console.log(billion);
console.log(ms);
console.log(question.toString(2));
console.log(question2.toFixed(3));
console.log(question3.toString(36));
console.log("");

let question4 = true;
console.log(`True = ${Number(question4)}`);
question4 = false;
console.log(`False = ${Number(question4)}`);
question5 = "54321";
console.log(`54321 = ${Number(question5)}`);
question6 = "1+2+3+4";
console.log(`1+2+3+4 = ${Number(question6)}`);
question6 = parseInt(question6);
console.log(`1+2+3+4 = ${Number(question6)}`);
