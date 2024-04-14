let tasks = [{item:'Milk', date:'10-2-2024'},
             {item:'Curd', date:'11-2-2024'},
];
let displayElement = document.querySelector('#todo-text');
let displayText = document.querySelector('.task-container');
let dateElement = document.querySelector('#todo-date');
let text;
let newHtml=``;
let date;
display();
function addTodo(){
    text = displayElement.value;
    date = dateElement.value;
    tasks.push({'item':text, 'date':date});
    display();
    displayElement.value=''; 
    dateElement.value='';
}

function display(){
    newHtml=``;
    
    for(let i=0; i<tasks.length; i++){
        let {item, date} = tasks[i];
        newHtml = newHtml+`
        
        <span>${item}</span>
        <span> ${date}</span>   
        <button onclick="tasks.splice(${i},1); display();" class="btn-delete">Delete</button>             
        `;
    }
    displayText.innerHTML = newHtml;


}