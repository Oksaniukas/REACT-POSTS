import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function SinglePostPage() {
   const {id} = useParams();
   const [post, setPost] = useState([]);
   const navigate = useNavigate();
   const backToPosts = () => navigate('/posts')

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id} `)
      .then(resp => resp.json())
      .then(postData =>setPost(postData))
   }, [id]);

   return (
      <div className="single-post-block">  
         <h2>{post.title}</h2>
         <p>{post.body}</p>
         <div className="single-post-block-btn">
            <button className="back-to-post-button" onClick={backToPosts}>Back to Posts</button>
         </div>
      </div> 
   )
}

export { SinglePostPage }