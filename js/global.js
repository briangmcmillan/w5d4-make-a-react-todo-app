import React from 'react'
import ReactDOM from 'react-dom'//'react-dom' is a node library
import Todos from '../components/Todos'//This corresponds

// Your code goes here
var todos = []
document.getElementById('inputBtn').addEventListener("click", addToDo)
document.getElementById('inputItems').addEventListener("keypress", searchEnter)

function searchEnter(event) {
    if (event.key === 'Enter') {
        addToDo()
    }
}

function addToDo() {
    var collectionOfItems = document.getElementById('inputItems')
    todos.push(collectionOfItems.value)
    collectionOfItems.value = ""
    renderView(todos)
    console.log(todos)
}

var renderView = function(data) {
    ReactDOM.render(
        <Todos data={data} />,
        document.getElementById('todos')
    )
}

renderView(todos)
