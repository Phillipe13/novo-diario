import React from 'react';
import { Formik } from 'formik';
import { Redirect,  } from 'react-router-dom';
import authService from './AuthService';

const VerifyTokenForm = ({user}) => (
  <div>
    <h1>Verify Token</h1>
    <Formik
      initialValues={{ user: user, token: '' }}
      initialStatus={{isRedirectToDashboardPage: false}}
      validate={values => {
        const errors = {};
        if (!values.user) {
          errors.user = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        setTimeout(() => {
          if (authService.isValidToken(values.user, values.token)) {
            authService.setIsAuthenticated();
            setStatus({isRedirectToDashboardPage: true});
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
            status.isRedirectToDashboardPage ? <Redirect to={{
              pathname: "/dashboard",
            }} /> : null
          }
          <input
            type="text"
            name="token"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.token}
          />
          {errors.token && touched.token && errors.token}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default VerifyTokenForm;
