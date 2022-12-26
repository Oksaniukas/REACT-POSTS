import React from "react";
import { Outlet } from "react-router-dom";


function LoginLayout() {
   
   return (
      <div className="wrapper">
         <h1> LOGIN PAGE</h1>
         <div>
            <Outlet />
         </div>
         <footer>
            <div className="footer-item-list">
               <div>Contacts</div>
               <div>Terms of Use</div>
               <div>Privacy Policy</div>
            </div>
         </footer>
      </div>
   );
};

export { LoginLayout };