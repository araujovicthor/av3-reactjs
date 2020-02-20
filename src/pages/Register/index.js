import React, { useRef } from 'react';
import * as Yup from 'yup';
// import DatePicker from 'react-datepicker';
import Input from '../../components/Input';
import Radio from '../../components/Radio';

import 'react-datepicker/dist/react-datepicker.css';

import Select from '../../components/Select';
import DatePicker from '../../components/DatePicker';

import { Container, Form, Button } from './styles';

export default function Register() {
  const countries = [
    { id: 1, title: 'asdf' },
    { id: 2, title: 'kgij' },
  ];

  const defa = 0;

  const formRef = useRef(null);
  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        joint: Yup.number().required('Option for Joint Account is requerid'),
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
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" label="Name:" />
        <DatePicker name="birthday" label="Date of Birth:" />
        <Input name="worth" label="Net Worth:" type="number" />
        <Input name="address" label="Address:" />
        <Select
          name="challenge_id"
          id="challenge"
          label="Country"
          options={countries}
        />
        {/* <input name="country" label="Country:" /> */}
        {/* <input name="state" label="State:" /> */}
        {/* <input name="city" label="City:" /> */}
        <Radio
          name="joint"
          label="Joint Account:"
          options={[
            { id: 1, label: 'Yes' },
            { id: 0, label: 'No' },
          ]}
          defaultValue={defa}
        />
        <Button>
          <button type="submit">Submit</button>
        </Button>
      </Form>
    </Container>
  );
}
