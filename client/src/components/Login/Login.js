import React from 'react';
import { MdLockOutline } from "react-icons/md";
import { Button, Container, ErrorText } from '../../styles/custom';
import { Title, LoginForm, TextField } from './style';
import InputBox from '../../styles/components/InputBox';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export default function Login({ onSubmit, errorMsg }) {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onSubmit({
            email: values.email,
            password: values.password
          });
          setSubmitting(false);
        }, 500);
      }}
    >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit
      } = props;
    return (
      <Container sign>
        <Title>
          <span><MdLockOutline /></span>
          Sign in
        </Title>
        <LoginForm onSubmit={handleSubmit}>
          <InputBox 
            type="email"
            name="email"
            id="email"
            label="Email Address *"
            value={values.email}
            onChange={handleChange}
            errors={errors.email}
            touched={touched.email}
          />
          <InputBox 
            type="password"
            name="password"
            id="password"
            label="Password *"
            value={values.password}
            onChange={handleChange}
            errors={errors.password}
            touched={touched.password}
            autocomplete="off"
          />
          {
            errorMsg && <ErrorText >{errorMsg}</ErrorText>
          }
          <Button blue type="submit"  onClick={handleSubmit} disabled={isSubmitting}>SIGN UP</Button>
        </LoginForm>
        <TextField>Don't have an account? <Link to="/register">Create an account.</Link></TextField>
      </Container>
      )
    }}
    </Formik>
  );
}