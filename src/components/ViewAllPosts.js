import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const ViewAllPosts = () => {

    const [db, setDb] = useState([]);

    const fetchData = async () => {
        const data = await fetch("http://localhost:8000/posts");    //llamada a url 
        const posts = await data.json();                            //pasamos a json

        setDb(posts);                   //seteamos los valores del json al db
    }
    useEffect(() => {
        fetchData();
    }, [])              //lo llamamos 

    return (

        <div className="all-posts">
            <div className='top'>
                <h1>POSTS EXERCISE</h1>
                <button>
                    <Link to={`/posts/new`}>New Post</Link>
                </button>
            </div>
            <hr></hr>
            {db.map((el) =>
                <article key={el.id}>
                    <Link to={`/posts/${el.id}`}>
                        <h2>{el.title}</h2>
                        <h4>by {el.author}</h4>
                    </Link>
                </article>)
            }
        </div>
    )
};


export default ViewAllPosts;