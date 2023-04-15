//switch statements.js

const grade = 'D';

//using if statements 
if (grade === 'A') {
    console.log('Your grade is A');
} else if (grade === 'B') {

    console.log('Your grade is B');

} else if (grade === 'C') {

    console.log('Your grade is C');

} else if (grade === 'D') {

    console.log('Your grade is D');

} else if (grade === 'E') {

    console.log('Your grade is E');
} else {
    console.log('Your grade is undefine');
}

//using swtich statement
switch (grade) {
    case 'A':
        console.log('You got an A');
        brake;
    case 'B':
        console.log('You got an B');
        brake;
    case 'C':
        console.log('You got an C');
        brake;
    case 'D':
        console.log('You got an D');
        brake;
    case 'E':
        console.log('You got an E');
        brake;
    default:

        console.log('not a baild grade');



}