//if statements
const age = 22;
if (age > 22) {
    console.log('you are over 22');

}

const names = ['khant', 'ko', 'ko'];
if (names.length < 4) {
    console.log('names length is less than four');
}
const password = 'p@@';
if (password.length >= 12 && password.includes('@')) {
    console.log('that password is mighty strong');

} else if (password.length >= 8 || password.includes('@') && password.length > 6) {
    console.log('that password is long enough');

} else {
    console.log('your password is not long enough');
}

//logical NOT(!)
let user = false;
if (!user) {

    console.log('you must be logged in to containue')
}
console.log(!true);
console.log(!false);