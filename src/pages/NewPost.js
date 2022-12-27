import React from "react";

function NewPost({create}) {

   return (
      <div>
         <div> CREATE NEW POST </div>
         <form >
            <input
               type='text'
               placeholder="postTitle"
               className="input-item"
            />
            <input
               type='text'
               placeholder="postBody"
               className="input-item"
            />
            <button className="button" >
               Save
            </button>
         </form>
      </div>    
   )
}

export { NewPost }