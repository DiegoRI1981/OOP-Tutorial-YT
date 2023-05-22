// //Constructor = Template = Class
// function Person(name) {
//     this.name = name;
//     this.greet = function () {
//         return `${this.name} dice hola`
//     }
//     // this.greetEnglish = function () {
//     //     return `${this.name} says hello!`
//     // }
// }

// Person.prototype.greetEnglish = function () {
//     return `${this.name} says hello!`
// }

// const juanito = new Person('Juanito')
// const pedrito = new Person('Pedrito')
// console.log(juanito)
// console.log(pedrito)
// console.log(juanito.greet())
// console.log(pedrito.greet())
// console.log(juanito.greetEnglish())
// console.log(pedrito.greetEnglish())


class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    get getName() {
        return this.name
    }
    set setName(name) {
        this.name = name
    }
    greet() {
        return `${this.name} dice hola`
    }
    static proveGreet(name) {
        return `${name} probando saludo`
    }
}

const juanito = new Person('Juanito')
const pedrito = new Person('Pedrito')
juanito.name = 'Fernandito'
console.log(juanito)
console.log(pedrito)
console.log(juanito.greet())
console.log(pedrito.greet())

//getter & setter
juanito.setName = 'Carlitos '
console.log(juanito.getName)
console.log(juanito.greet())

//static
console.log(Person.proveGreet('Daniel'))

//Inheritance  - extends and Polymorphism : polimorfismo se compone de dos raices griegas poli que significa mucho 
//y morfo que significa forma, en resumen es la capacidad que tiene un objeto de tomar muuchas formas.
class Student extends Person {
    constructor(name, age, sex, career, grade = []) {
        super(name, age, sex)
        this.career = career
        this.grade = grade
    }
    set setGrade(grade) {
        this.grade.push(grade)
    }
    get getGrade() {
        return this.grade
    }

    greet() {
        return `Soy ${this.name}, soy ${this.sex}, tengo ${this.age} años y soy estudiante de ${this.career}, mis notas son ${this.grade}`
    }
}


const jaimito = new Student('Jaimito', 25, 'hombre', 'medicina')
jaimito.setGrade = 7
jaimito.setGrade = 10
jaimito.setGrade = 5

console.log(jaimito.getGrade)

console.log(jaimito)
console.log(jaimito.greet())


//Private Class Fields usando elprefijo #hash
class University extends Student {
    #university = []
    set setUniversity(university) {
        this.#university.push(university)
    }
    get getUniversity() {
        return this.#university
    }
    newGreet() {
        return `Soy ${this.name}, soy ${this.sex}, tengo ${this.age} años y soy estudiante de ${this.career}, entudio en la ${this.#university} mis notas son ${this.grade}`
    }
}

const danielito = new University('Danielito', 25, 'hombre', 'medicina')
danielito.setGrade = 7
danielito.setGrade = 10
danielito.setGrade = 5
danielito.setUniversity = "Universidad Las Lomas"

console.log(danielito.getGrade)
console.log(danielito.getUniversity)
console.log(danielito)
console.log(danielito.newGreet())

