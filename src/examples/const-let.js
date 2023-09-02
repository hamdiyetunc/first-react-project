// degisebilir:
// var nameVar = 'Hamdiye';
// console.log(nameVar);

// sabit degismeyecek olan:
// let nameLet = 'Hamdiye';
// console.log(nameLet);

// sabit degismeyecek olan:
// const nameConst = 'Hamdiye';
// console.log(nameConst);

// function scope: let NameLet'in tam tersidir
// disaridan ulasilamaz ama o disari ulasabilir orn:
// let age = 25;
// function getAge() {
//     let age = 30;
//     console.log('Function scope:', age)
// }
// console.log(age);
// getAge();
// boylece iki age tanimlandi. let var'da olabilir sonuc degismez.

// bunu if scope'u icinde yaparsak var ile calismaz let key wordu ile caisir.
// let city = 'Kocaeli';
// if(true) {
//    let city = 'Istanbul';
//    console.log(city);
//}
// console.log(city);
// let iceriyi disaridan ayirir ve ikisinide yazdirir, var sadece iceriyi kabul eder.
// var if'i ayri scope olarak kabul etmez yani. yinede hatasiz degildir bazi durumlarda.