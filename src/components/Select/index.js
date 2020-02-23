import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Select({
  name,
  options,
  disabled,
  placeholder,
  label,
  ...rest
}) {
  const inputRefs = useRef([]);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRefs.current,
      getValue(refs) {
        const selected = refs.find(ref => ref.selected);
        if (selected) {
          const { value } = selected;
          return value;
        }
        return null;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <select disabled={disabled} {...rest}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option
            // eslint-disable-next-line no-return-assign
            ref={elRef => (inputRefs.current[index] = elRef)}
            name={fieldName}
            key={option.id}
            value={option.id}
          >
            {option.title}
          </option>
        ))}
      </select>
      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </Container>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  placeholder: 'Select your option',
};
