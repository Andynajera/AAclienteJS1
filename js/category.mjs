import { addCategory } from "./fetch/fetch.mjs";

const form = document.querySelector('form');

form.addEventListener('submit',(e)=> {
e.preventDefault();
const {elements} = e.target;


const newCategory= {
    name: elements['name'].value,
    description: elements['description'].value,
};
addCategory(newCategory);
location.href = "./home.html";

});

