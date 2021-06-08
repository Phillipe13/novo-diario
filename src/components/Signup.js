import * as React from "react";
import { useForm } from "react-hook-form";

export default ()=> {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome")} placeholder="Digite seu nome" />
      <input {...register("email")} placeholder="Digite seu email" />
      <input {...register("usuario")} placeholder="Digite seu usuário" />
      <input {...register("senha")} placeholder="Digite sua senha" />
      <select {...register("category")}>
        <option value="">Selecione...</option>
        <option value="A">Professor</option>
        <option value="B">Aluno</option>
      </select>

      <input type="submit" />
    </form>
  );
}
