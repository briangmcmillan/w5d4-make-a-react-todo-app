import React, { Component } from 'react'

const TodoItem = (props) => (
    <div className="margin animated flipInX">
        {props.data}
    </div>
)

export default TodoItem
