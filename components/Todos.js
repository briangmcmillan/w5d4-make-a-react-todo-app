import React, { Component } from 'react'
import TodoItem from './TodoItem'

//var varName = (function) returning"=>" {}
const Todos = (props) => {
    //props.data refers to the yellow data on global.js in your render function.
    var items = props.data.map((input, i) => {
        return <TodoItem data={input} key={i} />
    })

    return (
        <div>
            {items}
        </div>
    )
}

export default Todos
