import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Posts() {
   const navigate = useNavigate();
   const goToEditPage = () => navigate("/edit", { state: { from: 'PostsPage' } });

   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(posts =>setPosts(posts))
   }, []);

   const postList = posts.map((post, idx) => (
      <div key={idx} className="post">
         <Link className="post-link" to={`/posts/${post.id}`}> {post.title} </Link>
         <div className="post-button-block">
            <button className="post-button" onClick={RemovePost}> Delete</button>
            <button className="post-button" onClick={goToEditPage}>Edit</button>
         </div>        
         <hr/> 
      </div>
   ))

   function RemovePost() {
      alert("Do you want to delete this post?")
   }

   return (
      <div className="post-block">
         {postList}
      </div>
   )
}

export { Posts }