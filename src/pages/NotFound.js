import React from "react";
import { Link } from "react-router-dom";

function NotFound () {
   return (
      <div>
         <div> The page is not found  </div>
         <Link to='/'> HOME PAGE</Link>
      </div>
   )

}

export { NotFound }