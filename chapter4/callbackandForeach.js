//callback & foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc((value) => {
    // do somthing
    console.log(value);
});

let people = ['khant', 'koko', 'NyiNYi', 'OoOo', 'DawDaw'];

const logPerson = (person, index) => {
    console.log(`${index}- heelo ${person}`)
};

// people.forEach((person, index) => {
//     console.log(index, person);
// });
people.forEach(logPerson);