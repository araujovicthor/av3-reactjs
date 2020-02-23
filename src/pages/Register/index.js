import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Scope } from '@unform/core';
// import * as Yup from 'yup';

import Input from '../../components/Input';
import DatePicker from '../../components/DatePicker';
import Select from '../../components/Select';
import Radio from '../../components/Radio';

import { registerProfileRequest } from '../../store/modules/register/actions';
import {
  countryRequest,
  stateRequest,
} from '../../store/modules/location/actions';

import { Container, Form, Partner, Button } from './styles';

// const schema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   joint: Yup.number().required('Option for Joint Account is required'),
// });

export default function Register() {
  const dispatch = useDispatch();
  const [showJoint, setShowJoint] = useState(false);
  const [disableState, setDisableState] = useState(true);

  useEffect(() => {
    dispatch(countryRequest());
  }, []); // eslint-disable-line

  const countries = useSelector(state => state.location.country);
  const states = useSelector(state => state.location.state);

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
        <Select
          name="country"
          id="country"
          label="Country:"
          placeholder="Select Country"
          options={countries}
          onChange={e =>
            // eslint-disable-next-line radix
            parseInt(e.target.value) === 0
              ? setDisableState(true)
              : (dispatch(stateRequest(e.target.value)), setDisableState(false))
          }
        />
        <Select
          name="state"
          id="state"
          label="State:"
          placeholder="Select State"
          options={states}
          disabled={disableState}
        />
        {/* <input name="city" label="City:" /> */}
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
            parseInt(e.target.value) === 1
              ? setShowJoint(true)
              : setShowJoint(false)
          }
        />
        {showJoint && (
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
