import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";


export const ViewIndividual = () => {
  const { id } = useParams();              //id del path
  const [articles, setArticles] = useState([]);   //inicial
  const navigate = useNavigate();

  useEffect(() => {
    const ObtainData = async () => {
      const data = await fetch(`http://localhost:8000/posts/${id}`);    //llamada a url
      const posts = await data.json();                                  //pasamos a json
      setArticles(posts);                                               //seteamos el json a la data articles
    }
    ObtainData();
  }, [id]);


  const deletePost = () => {
    fetch(`http://localhost:8000/posts/${id}`, { method: 'DELETE' }).then(() => {
      navigate('/');
    })
  }


  return (
    <div className='container'>
      <div className='content'>
        <h1>{articles.title}</h1>
        <h4>Post by {articles.author}</h4>
        <p>{articles.content}</p>
      </div>
      <div className='btn-container'>
        <button className='btn' onClick={deletePost}>
          Delete
        </button>
        <button className='btn'><Link to={`/posts/${id}/edit`}>Edit</Link></button>
      </div>

    </div>

  )
}

export default ViewIndividual;