// function declaration

function greet() {
    console.log('hello there');
}

//function expression
const speak = function() {
    console.log('good day!');
};

greet();
speak();

//argument & parameters

// const speak_1 = function(names, time) {
//     console.log(`good ${time} ${ names }`);
// }

// speak_1('Khant', 'morning');

const speak_1 = function(names = 'Khant', time = 'morning') {
    console.log(`good ${time} ${ names }`);
}

speak_1();
speak_1('Ko', 'night');


const calcArea = function(radius) {

        // let area = 3.14 * radius ** 2;
        // // console.log(area);
        // return area;
        return 3.14 * radius ** 2;
    }
    // calcArea(5);
const area_1 = calcArea(5);
console.log(area_1);