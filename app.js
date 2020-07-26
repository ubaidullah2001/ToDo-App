var list = document.getElementById("list")

function addtodo(){
    var todo_item = document.getElementById("todo_item")

    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)


     var delbtn = document.createElement("button")
     var delText = document.createTextNode("DELETE")
     delbtn.setAttribute("class","btn")
     delbtn.setAttribute("onclick","deleteItem(this)")
     delbtn.appendChild(delText)
     li.appendChild(delbtn)

    
    var editbtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editbtn.setAttribute("class","edit")
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.appendChild(editText)
    li.appendChild(editbtn)


    todo_item.value = ""
    list.appendChild(li)
    console.log(li)
}

function deleteItem(e){
    e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML = ""
}
 
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value",val)
    e.parentNode.firstChild.nodeValue = editValue
}