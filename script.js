const input = document.querySelector('input');
const addBtn = document.querySelector('#addBtn')
const mainContainer = document.querySelector('#mainContainer');
const form = document.querySelector('form');


// Inbuilt Code
form.addEventListener('submit' , (event)=>{
    event.preventDefault()
})

addBtn.addEventListener('click' , ()=>{

    if(input.value === '') {
        console.log("Please Enter a Item");
        return;
    }

    const div = document.createElement('div');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    span.textContent = input.value;
    deleteButton.textContent = 'Delete';

    div.classList.add("item");
    div.appendChild(span);
    div.appendChild(deleteButton)

    mainContainer.appendChild(div)
    input.value = ''
    input.focus()


    deleteButton.addEventListener('click' , (event)=>{
        console.log(deleteButton.parentElement)
        deleteButton.parentElement.parentElement.removeChild(deleteButton.parentElement)
    });

})

