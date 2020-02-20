import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, label, ...rest }) {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: ref => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <ReactDatePicker
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        placeholderText="dd/mm/aaaa"
        {...rest}
      />

      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </Container>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
