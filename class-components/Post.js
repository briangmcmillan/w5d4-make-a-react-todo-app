import React, { Component } from 'react'//boiler plate code. Must import react for every component

//Make another constant. Pass in data.
// Renders 1 big master node. That can have children in it.
const Post = (props) => <div className="post">
    <img src={props.data.image} alt={props.data.title} />
    <h3>{props.data.title}</h3>
    <p className="lead">
    Published On {props.data.date} at {props.data.time}
    </p>
    <p>
        {props.data.body}
    </p>
    <span className="small">Author: {props.data.author}</span>
</div>

export default Post
