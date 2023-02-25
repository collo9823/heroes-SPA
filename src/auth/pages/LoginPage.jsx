import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  
  const { login } = useContext(AuthContext)
  const navigate = useNavigate();
  
  const onLogin = ()=>{
    const lastPath = localStorage.getItem('lastPath') || "/"
    //Al login del AuthContext (AuthProvider) le envío el nombre Leonardo Collado
    login('Leonardo Collado');
    
    navigate(lastPath, {
      replace: true
    });
  }



  console.log()
  return (
    <div
      className='container mt-5'
    >
      <h1>Login </h1>
      <hr />

      <button 
        className='btn btn-primary'
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
