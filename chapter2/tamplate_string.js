//template strings

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//concetenation way
let result = 'The blog called' + 'title' + 'by' + author + 'has' + likes + 'likes';
console.log(result);

//template string way
let result_1 = 'The blog called ${title} by ${author} has ${likes} likes';
console.log(result_1);

// creating html templates

let html = `
    
    <h2 >${title}< /h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>


`;
console.log(html);