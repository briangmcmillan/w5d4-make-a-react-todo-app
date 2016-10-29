import React, { Component } from 'react'//must import react for every component
import Post from './Post'//importing individual blog post

//**** Below is called a stateless component. Do this when you have a fairly simplistic app
const Posts = (props) => {//Const is an immutable variable. Can't change. This is the master container that goes around everything. This is a function. Takes in 1 argument, props. Props is just an object coming in that has all the properties.
    const PostItems = props.data.map((post, i) => {//Creates an array. Map is a method. Map transforms data. Takes 1 array and remaps them.
        return <Post data={post} key={i} />//Passing in the data from the original post. Have to include 'key={i}'. Do not leave this off.
    })

    // Can only return one node. Must wrap in some type of tag!!
    return (
        <div>
            {/* Put the name of the array of post components here. */}
            <h1>Blog Posts</h1>
            {PostItems}
        </div>
    )
}

export default Posts
