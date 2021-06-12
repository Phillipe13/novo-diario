import React from 'react';
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    console.log(data)
    const req = new XMLHttpRequest();
    req.open('POST','https://fast-badlands-00990.herokuapp.com/api/v1/login')
    req.setRequestHeader('Content-Type','application/json');
    req.send(`{"username":"${data.username}","password":"${data.password}"}`)
    req.onload=()=>{
      console.log(req.status)
      if(req.status==200){
        alert("logged!!!")
        window.location.href='/'
      }else{
          alert("status: "+req.status);
      }
    }
  };
  const redirect = ()=>{
    window.location.href="/dashboard/signup"
  }
  return (
    <><h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} placeholder="Digite seu usuário" />
        <input {...register("password")} placeholder="Digite sua senha" />
        

        <input type="submit" />
      </form>
      <div>
        <button onClick={redirect} type="button" >Registre-se!</button>
      </div>
    </>
    
  )
}

export default LoginForm;