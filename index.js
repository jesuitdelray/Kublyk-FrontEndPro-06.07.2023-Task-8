console.log("1. Вивести на сторінку в один рядок через кому числа від 10 до 20")
let output = ""
for (let s = 10; s <= 20; s++) {
    output += s + ", "
}
console.log(output)

console.log("2. Вивести квадрати чисел від 10 до 20")
for (let d = 10; d <= 20; d++) {
    console.log(d ** 2)
}

console.log("3. Вивести таблицю множення на 7")
for (let q = 1; q <= 10; q++) {
    console.log(7 * q)
}

console.log("4. Знайти суму всіх цілих чисел від 1 до 15")
let sum1 = 0
for (let w = 1; w <= 15; w++) {
    sum1 += w
}
console.log(sum1)

console.log("5. Знайти добуток усіх цілих чисел від 15 до 35")
let product = 1
for (let e = 15; e <= 35; e++) {
    product *= e
}
console.log(product)

console.log("6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500")
let sum2 = 0
for (let r = 1; r <= 500; r++) {
    sum2 += r
}
let average = sum2 / 500
console.log(average)

console.log("7. Вивести суму лише парних чисел в діапазоні від 30 до 80")
let sum3 = 0
for (let t = 30; t <= 80; t++) {
    if (t % 2 === 0) {
        sum3 += t
    }
}
console.log(sum3)

console.log("8. Вивести всі числа в діапазоні від 100 до 200 кратні 3")
for (let y = 100; y <= 200; y++) {
    if (y % 3 === 0) {
        console.log(y)
    }
}

console.log("9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники")
const number = 36
for (let u = 1; u <= number; u++) {
    if (number % u === 0) {
        console.log(u)
    }
}

console.log("10. Визначити кількість його парних дільників")
let count = 0
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        count++
    }
}
console.log(count)

console.log("11. Знайти суму його парних дільників")
let sum4 = 0
for (let o = 1; o <= number; o++) {
    if (number % o === 0 && o % 2 === 0) {
        sum4 += o
    }
}
console.log(sum4)

console.log("12. Надрукувати повну таблицю множення від 1 до 10")
for (let p = 1; p <= 10; p++) {
    for (let a = 1; a <= 10; a++) {
        console.log(p + " * " + a + " = " + p * a)
    }
}
