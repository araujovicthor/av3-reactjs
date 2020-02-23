import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Select({
  name,
  options,
  defaultValue,
  disabled,
  placeholder,
  label,
  ...rest
}) {
  const inputRefs = useRef([]);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRefs.current,
      getValue(refs) {
        return refs.find(ref => ref.selected).value;
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
            defaultChecked={option.id === defaultValue}
          >
            {option.title}
          </option>
        ))}
      </select>
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
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  defaultValue: null,
  disabled: false,
  placeholder: 'Select your option',
};
