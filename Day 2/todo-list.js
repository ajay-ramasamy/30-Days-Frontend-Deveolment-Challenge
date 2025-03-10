const todolist=[];
   

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        addtodo();
    }
    else if(event.key==='Delete'){

    }
});

function reenter(){
    let todohtml='';
    todolist.forEach(function(todoobject,index){
        //const name = todoobject.name variable name is same as property name;
        const {name}=todoobject;
        const {duedate}=todoobject;
        const html=`
           <div>${name}</div>
           <div>${duedate}</div> 
           <button onclick="
            todolist.splice(${index},1);
            reenter();"
            class="deletebtn"
        >delete</button>
        `;
        todohtml+=html;
    });
    document.querySelector('.result').innerHTML=todohtml;
}

function addtodo(){
    const k=document.querySelector('.js-todo');
    const p=document.querySelector('.js-date');
    const name = k.value;
    const date = p.value;
    todolist.push({
        name, //names are same
        duedate : date
    });
    reenter();
    k.value='';
    p.value='';
}