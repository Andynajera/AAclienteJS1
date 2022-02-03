const protocol ='http';
const host ='localhost';
const port= 3040;

window.onload = function() {
    console.log('document loaded');

    fetch('http://localhost:3040')
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
}
export async function getCategories(){
       
        const path = 'categories';

        const url = `${protocol}://${host}:${port}/${path}`;

        const options = {
            method:'GET',
        };

        try{
            const response = await fetch(url, options);
            return await response.json();           
        }catch(error){
            console.log(error);
        }
}

export async function addCategory(newCategory){
        const path = 'categories';
        const url =`${protocol}://${host}:${port}/${path}`;

        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
           
        };
        console.log(url);
        const response = await fetch(url,options);

}
export async function removeCategory(id){
    const path = `categories/${id}`;
    const url =`${protocol}://${host}:${port}/${path}`;
    const options = {
        method:'DELETE'};

        const response = await fetch(url,options);
    




    }
  
