// variables and block scope

const age = 30;
if (true) {
    const age = 40;
    const names = 'Khant'
    console.log('inside 1st code block :', age, names);

    if (true) {

        const age = 50;
        console.log('inside 2st code block :', age);
    }

}

console.log('outside code block :', age, names);