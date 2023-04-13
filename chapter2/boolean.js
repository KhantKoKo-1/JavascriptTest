//booleans & comparisons
console.log(true, false, "true", "false");

//methods can return booleans
let email = 'khantkoko5352@gmali.com';
let names = ['khant', 'ko', 'ko'];

// let result = email.includes('@');
let result = names.includes('khant');

console.log(result);

//comparison operators

let age = 22;
console.log(age == 22);
console.log(age == 30);
console.log(age != 30);
console.log(age < 20);
console.log(age > 20);

let names_1 = 'khant';
console.log(names_1 == 'khant');
console.log(names_1 == 'jhon');
console.log(names_1 != 'jhon');
console.log(names_1 < 'zinn');
console.log(names_1 > 'zinn');

let age_1 = 22;

//loose comparison(==)(different types can still be equal)
console.log(age == 22);
console.log(age == '22');
console.log(age != 25);
console.log(age != '25')

//strict comparison(===)(different types cannot be equal)console.log(age == 22);
console.log(age === 22);
console.log(age === '22');
console.log(age !== 25);
console.log(age !== '25')