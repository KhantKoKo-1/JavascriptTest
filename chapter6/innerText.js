const para = document.querySelector('p')

// console.log(para.innerText);

// para.innerText += 'Khantkokoko ae';


const paras =document.querySelectorAll('p');

paras.forEach(para => {

       console.log(para.innerText);
       para.innerText += ' new text'

})


const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>This is A New H2</h2>';

const people  =['Khant','KO','Nyi'];

people.forEach(person => {

     content.innerHTML += `<p>${person}</p`;
})