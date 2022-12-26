import React from "react";
import { NavLink, Outlet} from 'react-router-dom';

function MainLayout() {
   const isActive = ({isActive}) => isActive ? 'active-link navigation-list-item' : 'navigation-list-item';
   
   return(
      <div className="wrapper">
         <header>
            <div className='navigation-list'>
               <NavLink to="/" className={isActive} > Main </NavLink>
               <NavLink to="/posts" className={isActive}> Posts </NavLink>
               <NavLink to="/new" className={isActive}> Create Post </NavLink>
               <NavLink to="/contacts" className={isActive}> Contacts </NavLink>
            </div>
         </header>

         <div className="main-block">
            <Outlet />
         </div>

         <footer >
            <div className="footer-item-list">
               <div className="footer-item"> Get Help</div>
               <div className="footer-item">About Us</div>
               <div className="footer-item"> Contact Us</div>
            </div>
         </footer>
      </div>
   );
};

export { MainLayout };