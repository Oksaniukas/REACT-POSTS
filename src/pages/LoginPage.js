import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
   let navigate = useNavigate()

   let [loginFormData, setLoginFormData] = useState(
      {
        userName: '',
        password: '',  
      }
   );

   let correctDataLogin = {
      userName: 'Cursor',
      password: '123',  
   }
   
   function handleChange(event) {
      const {name, value} = event.target;
  
      setLoginFormData(prev => {
        return {
          ...prev,
          [name]: value
        }
      })
   }
  
   function checkLoginForm(event) {
      event.preventDefault();

      if (loginFormData.userName !== '' && loginFormData.password !== '') {
         checkLoginData();
      } else {
         alert('Please fill the form')
      }
   }

   function checkLoginData() {
      if (loginFormData.userName !== correctDataLogin.userName || loginFormData.password !== correctDataLogin.password) {
         alert("Password/Username error");
      } else {
         navigate('/')
      }
   }
     
   return (
      <div >
         <form onSubmit={checkLoginForm} >
            <input
               type='text'
               placeholder="userName"
               className="input-item"
               onChange={handleChange}
               name="userName"
               value={loginFormData.userName}
            />
            <input
               type='password'
               placeholder="password"
               className="input-item"
               onChange={handleChange}
               name="password"
               value={loginFormData.password}
            />
            <button className="button" >
               Login
            </button>
         </form>
      </div>
   )
}

export { LoginPage }