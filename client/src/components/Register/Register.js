import React from 'react';
import { MdLockOutline } from "react-icons/md";
import InputBox from '../../styles/components/InputBox';
import { Button, Container } from '../../styles/custom';
import { Title, RegisterForm } from './style';
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Register({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required('Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onSubmit({
            name: values.name,
            email: values.email,
            password: values.password,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
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
          Sign up
        </Title>
        <RegisterForm onSubmit={handleSubmit}>
          <InputBox 
            type="text"
            name="name"
            id="name"
            label="Name *"
            value={values.name}
            onChange={handleChange}
            errors={errors.name}
            touched={touched.name}
            hasFeedback 
            validateStatus={errors.name && touched.name ? "error" : 'success'}
          />
          <InputBox 
            type="email"
            name="email"
            id="email"
            label="Email Address *"
            value={values.email}
            onChange={handleChange}
            errors={errors.email}
            touched={touched.email}
            hasFeedback 
            validateStatus={errors.email && touched.email ? "error" : 'success'}
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
            hasFeedback 
            validateStatus={errors.password && touched.password ? "error" : 'success'}
          />
          <InputBox 
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            label="Confirm Password *"
            value={values.confirmPassword}
            onChange={handleChange}
            errors={errors.confirmPassword}
            touched={touched.confirmPassword}
            hasFeedback
          />
          <Button blue type="submit" onClick={handleSubmit} disabled={isSubmitting}>SIGN UP</Button>
        </RegisterForm>
      </Container>
      )
    }}
    </Formik>
  );
};