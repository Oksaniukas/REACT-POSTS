import React from "react";
import { useLocation } from "react-router-dom";


function EditPost() {
   useLocation()
   return (
      <div>
         <div> EDIT POST PAGE</div>
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

export { EditPost }