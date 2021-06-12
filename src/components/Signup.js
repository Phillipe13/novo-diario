import * as React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom';
export default ()=> {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    console.log(data)
    const req = new XMLHttpRequest();
    req.open('POST','https://fast-badlands-00990.herokuapp.com/api/v1/signup')
    req.setRequestHeader('Content-Type','application/json');
    req.send(`{"function": "${data.function}","registration":${data.registration},"username":"${data.username}","password":"${data.password}"}`)
    req.onload=()=>{
      console.log(req.status)
      if(req.status==200){
        alert("Account created!!!")
        window.location.href='/'
      }else{
          alert("status: "+req.status);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("function")}>
        <option value="TRAINEE">TRAINEE</option>
        <option value="JUNIOR">JUNIOR</option>
        <option value="PLENO">PLENO</option>
      </select>
      <select {...register("registration")}>
        <option value="1">ADMIN</option>
        <option value="0">NORMAL</option>
      </select>
      <input {...register("username")} placeholder="Digite seu usuário" />
      <input {...register("password")} placeholder="Digite sua senha" />
      

      <input type="submit" />
    </form>
  );
}
