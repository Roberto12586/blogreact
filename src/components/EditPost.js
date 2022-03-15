import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";


const EditPost = () => {
    const { id } = useParams();              //id es path de app
    const [article, setArticle] = useState([]);   //inicial
    const navigate = useNavigate();

    useEffect(() => {
        const ObtainData = async () => {
            const data = await fetch(`http://localhost:8000/posts/${id}`);    //llamada a url
            const posts = await data.json();                                  //transform a json
            setArticle(posts);                                               //seteamos el json a la data articles
        }
        ObtainData();             //llamada a funcion con el id como valor
    }, [id]);

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [author, setAuthor] = useState();
    

    const editPost = (e) => {
        e.preventDefault();
        const blog = { title, content, author };

        fetch(`http://localhost:8000/posts/${id}`, {
            method: 'PUT', headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate(`/posts/${id}`);
        })
    }


    return (
        <div className="container-new">
            <h1>Edit post</h1>
            <hr></hr>
            <h2>{article.title}</h2>
            <form className="form" onSubmit={editPost}>
                <label>Title:</label>
                <input type="text" name="title"  placeholder={article.title} required onChange={(e) => setTitle(e.target.value)} /><br />
                <label>Author:</label>
                <input type="text" name="author" placeholder={article.author} required onChange={(e) => setAuthor(e.target.value)} /><br />
                <label>Content:</label>
                <textarea  placeholder={article.content} required onChange={(e) => setContent(e.target.value)}></textarea><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditPost;