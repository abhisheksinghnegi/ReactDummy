import React, { useState } from 'react'
import style from '../Components/Post.module.css'
function Post(props) {
    const [open, setOpen] = useState(false)
    return (
        <div className={style.post} >
            <a href={props.post.urlToImage} target={"_blank"}><img className={style.newsimage} src={props.post.urlToImage} alt={"Image"} /></a>
            <h6>{props.post.author}</h6>
            <h3><a href={props.post.url} target={"_blank"} style={{ "textDecoration": "none", "color": "black" }}>{props.post.title}</a></h3>
            <p>{props.post.description}</p>
            <h6>{props.post.publishedAt}</h6>
            <span onClick={() => setOpen((prev)=>{return !prev})} style={{ "textDecoration": "none", "color": "blue", "cursor": "pointer" }}>{open? "Read Less...":"Read More..."}</span>
            <p hidden={!open}>{props.post.content}</p>
        </div>
    )
}


export default Post