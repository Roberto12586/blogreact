import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateNewPost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();             //para redireccion al enviar

    const handleSubmit = (e) => {
        e.preventDefault();                     //evitamos la actualizacionSS
        const blog = { title, content, author };

        fetch('http://localhost:8000/posts', {              
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/');
        })
    }




    return (
        <div className="container-new">
            <h1>Create new post</h1>
            <hr></hr>
            <form className="form" onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" placeholder="Title" required onChange={(e) => setTitle(e.target.value)} /><br />
                <label>Author:</label>
                <input type="text" name="author" placeholder="Author" required onChange={(e) => setAuthor(e.target.value)} /><br />
                <label>Content:</label>
                <textarea placeholder="Enter content here" required onChange={(e) => setContent(e.target.value)}></textarea><br />
                <button type="submit" className="btn-new">Submit</button>
            </form>
        </div>
    );
}




export default CreateNewPost;