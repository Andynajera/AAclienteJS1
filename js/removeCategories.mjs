import{removeCategory}from './fetch/fetch.mjs'
import{addCategory} from './fetch/fetch.mjs'

export function drawElements(data){
    const removeCategories = document.getElementById('removeCategories');
    data.map((item)=> generateHtmlForItem(item)).forEach((htmlItem) => removeCategories.appendChild(htmlItem));
    
}
function generateHtmlForItem(item){
    const button =document.createElement('button');
    button.textContent="delete";
    button.classList.add('btn');
    button.classList.add('btn-danger');
    button.dataset.id= item.id;
    button.addEventListener('click',(e) =>{
         removeCategory(item.id );

location.reload();


});

    const li = document.createElement('li');
    
    li.textContent = item.name;
    li.classList.add('list-group-item');
    li.classList.add('a-flex');
    li.classList.add('justify-content-between');
    li.classList.add('align-items-center');
    //li.dataset.id=item.id;
   

    li.appendChild(button);
    return li;

}

