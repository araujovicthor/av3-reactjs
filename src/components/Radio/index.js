import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Radio({ name, options, defaultValue, label, ...rest }) {
  const inputRefs = useRef([]);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRefs.current,
      getValue(refs) {
        return refs.find(ref => ref.checked).value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      {options.map((option, index) => (
        <label key={option.id} htmlFor={fieldName}>
          <input
            // eslint-disable-next-line no-return-assign
            ref={elRef => (inputRefs.current[index] = elRef)}
            type="radio"
            name={fieldName}
            value={option.id}
            defaultChecked={option.id === defaultValue}
            {...rest}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </Container>
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultValue: PropTypes.number,
};

Radio.defaultProps = {
  defaultValue: null,
};
