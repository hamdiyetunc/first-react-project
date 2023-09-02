// Class - ES5:
// var Person = function() {}

// Class - ES6:
class Person {
    // buradaki guest otomatik atama icindir tanimlanmasada olur.
    constructor(name = 'Guest', age = 20) {
        // buradaki ilk name isimlendirme ikincisi parametredir ikisinin ayni yazilmamasi sonucu gostermez bunun cozumu heryerde ayni yazmak olacaktir.
        this.name = name;
        this.age = age;
        console.log('Constructor calisti!')
    }

    // bunlar icinde bulundugu classa hizmet eden fonksiyondur bu tip fonksiyonlara methot denir, zaten yazilisida fonksiyon gibi degildir
    calculateAge() {
        return new Date().getFullYear() - this.age;
    }
    greeting(text) {
        return `${text}, My name is ${this.name}`;
    }
}

// bunlar class person yardimci classidir, tum person ozelliklerine sahiptir.
class Student extends Person {
    constructor(name,age,studentNumber) {
        super(name,age);
        this.studentNumber = studentNumber;
    }
    study() {
        console.log('I am learning')
    }
    greeting(text) {
        let str = super.greeting(text);
        str += `My student number is ${this.studentNumber}`;
        return str;
    }
}
class Teacher extends Person {
    constructor(name,age,department) {
        super(name,age,department);
        this.department = department;
    }
    teach() {
        console.log('I am teaching chemical');
    }
    greeting(text) {
        let str = super.greeting(text);
        str += `My department is ${this.department}`;
        return str;
    }
}

// Object - Nesne:
const p1 = new Student("Abuzittin ", 32, 120);
const p2 = new Teacher("Muhittin ", 30, 'Chemical');
const p3 = new Person();

p1.study();
p2.teach();

console.log(p1);
console.log(p2);
console.log(p3);

console.log(p1.greeting('Hello'));
console.log(p2.greeting('Hi'));
console.log(p3.greeting('Whats up'));

console.log(p1.calculateAge());
console.log(p2.calculateAge());
console.log(p3.calculateAge());