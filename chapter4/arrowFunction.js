// arrows function
const calcArea = (radius) => {

    return 3.14 * radius ** 2;
};

// for one prameter, we can remove parentheses
const calcArea_1 = radius => 3.14 * radius ** 2;;

// const area = calcArea(5);
// console.log('area is : ', area);

const area = calcArea_1(5);
console.log('area is : ', area);

// praitice
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;

}
console.log(bill([10, 15, 30], 0.2));