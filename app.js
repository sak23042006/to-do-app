// input variable
var inputText =  document.getElementById("input");

// Button variable
var btn = document.getElementById("button")

//todo list
var todo = document.getElementById("todolist")

// array to store todo
var todoArr=[]

// Adding input too arr
btn.addEventListener("click",addToArr)

// click enter to add list
inputText.addEventListener("keypress",(event)=>{

    if(event.key=="Enter"){
        addToArr()
    }

})


// creating a func to add input to list
function addToArr() {

    // preventing from not adding empty input
    if(inputText.value!=""){
    // pushing value to todoArr
    todoArr.push(inputText.value)
    // reseting input box empty
    inputText.value=""
    // displaying the input
    display()
    }
}

function display() {
    
    // clear out previous ones
    todo.innerHTML=""

    todoArr.map((cur,i)=>{
        var listItem = `<li id="item${i}">
        <div>${cur}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
    </li>`
        todo.innerHTML += listItem;

    })
}

function deleteItem(i) {

    todoArr.splice(i,1)
    display()
    
}

function editItem(i) {
    
    var newValue=prompt("Edit");
    todoArr.splice(i,1,newValue);
    display();
}

var resetbtn = document.getElementById("reset")

resetbtn.addEventListener("click",(reset)=>{
    location.reload()
})