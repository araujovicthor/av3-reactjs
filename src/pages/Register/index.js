import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Scope } from '@unform/core';
// import * as Yup from 'yup';

import Input from '../../components/Input';
import DatePicker from '../../components/DatePicker';
import Select from '../../components/Select';
import Radio from '../../components/Radio';

import { registerProfileRequest } from '../../store/modules/register/actions';
import { countryRequest } from '../../store/modules/location/actions';

import { Container, Form, Partner, Button } from './styles';

// const schema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   joint: Yup.number().required('Option for Joint Account is required'),
// });

export default function Register() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([]);

  const dataCountry = useSelector(state => state.location.country);

  useEffect(() => {
    dispatch(countryRequest());
  }, []); // eslint-disable-line

  useEffect(() => {
    setCountries(dataCountry);
  }, [dataCountry]);

  function handleSubmit(data) {
    dispatch(registerProfileRequest(data));
  }

  // const formRef = useRef(null);
  // async function handleSubmit(data) {
  // try {
  // formRef.current.setErrors({});

  // await schema.validate(data, {
  //   abortEarly: false,
  // });
  // Validation passed
  // console.log(data);
  // } catch (err) {
  //   const validationErrors = {};
  //   if (err instanceof Yup.ValidationError) {
  //     err.inner.forEach(error => {
  //       validationErrors[error.path] = error.message;
  //     });
  //     formRef.current.setErrors(validationErrors);
  //   }
  // }
  // }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" label="Name:" />
        <DatePicker name="birthday" label="Date of Birth:" />
        <Input name="worth" label="Net Worth:" type="number" />
        <Input name="address" label="Address:" />
        {countries.lenght && (
          <Select
            name="challenge_id"
            id="challenge"
            label="Country"
            options={countries.options}
            disabled={false}
          />
        )}
        {/* <input name="state" label="State:" />
         <input name="city" label="City:" /> */}
        <Radio
          name="joint"
          label="Joint Account:"
          options={[
            { id: 1, label: 'Yes' },
            { id: 0, label: 'No' },
          ]}
          defaultValue={0}
          onChange={e =>
            // eslint-disable-next-line radix
            parseInt(e.target.value) === 1 ? setShow(true) : setShow(false)
          }
        />
        {show && (
          <Partner>
            <Scope path="spouse">
              <Input name="name" label="Spouse Name:" />
              <DatePicker name="birthday" label="Spouse DoB:" />
            </Scope>
          </Partner>
        )}
        <Button>
          <button type="submit">Submit</button>
        </Button>
      </Form>
    </Container>
  );
}
