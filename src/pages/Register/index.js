import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';

import { Container, RegisterForm } from './styles';

export default function Register() {
  const formRef = useRef(null);
  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string()
          .min(6)
          .required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      console.log(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <RegisterForm ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" label="Full name" />
        <Input name="email" label="E-mail" type="email" />

        <Scope path="address">
          <Input name="street" label="Street name" />
          <Input name="zipcode" label="ZIP code" />
        </Scope>

        <button type="submit">Enviar</button>
      </RegisterForm>
    </Container>
  );
}
