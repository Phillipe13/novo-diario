import React from 'react';
import { Formik } from 'formik';
import { Redirect, useHistory} from 'react-router-dom';
import authService from './AuthService';

const LoginForm = () => {

  const history = useHistory();

    const handleClick = () => {
        history.push("/dashboard/signup");
    }
  
  return(

  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ user: '', password: '' }}
      initialStatus={{isRedirectToVerifyPage: false}}
      validate={values => {
        const errors = {};
        if (!values.user) {
          errors.user = 'Login is Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        setTimeout(() => {
          if (authService.isValidPassword(values.user, values.password)) {
            setStatus({isRedirectToVerifyPage: true});
          }
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
          values,
          errors,
          touched,
          status,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          {
            status.isRedirectToVerifyPage ? <Redirect to={{
              pathname: "/verify",
              search: `?user=${values.user}`,
            }} /> : null
          }
          <input
            type="text"
            name="user"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.user}
            placeholder="Digite seu usuário"
          />
          {errors.user && touched.user && errors.user}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Digite sua senha" 
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    <div>
      <button onClick={handleClick} type="button" >Registre-se!</button>
    </div>
  </div>
);}

export default LoginForm;
