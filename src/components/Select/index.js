import React, { useRef, useEffect } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { useField } from '@unform/core';

import { Container } from './styles';

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  defaultValue,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  const customStyles = {
    control: base => ({
      ...base,
      '&:hover': { borderColor: 'none' },
      border: 'none',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      span: {},
      svg: {
        backgroundColor: 'white',
        color: 'rgba(0,0,0,0.2)',
      },
    }),
  };

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.state.value;
    if (!multiple) {
      return selectValue ? selectValue.id : '';
    }

    return selectValue ? selectValue.map(option => option.id) : [];
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function getDefaultValue() {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find(option => option.id === defaultValue);
    }

    return options.filter(option => defaultValue.includes(option.id));
  }

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Select
        name={fieldName}
        aria-label={fieldName}
        styles={customStyles}
        options={options}
        isMulti={multiple}
        defaultValue={getDefaultValue()}
        ref={ref}
        getOptionValue={option => option.id}
        getOptionLabel={option => option.title}
        {...rest}
      />

      {error && <span>{error}</span>}
    </Container>
  );
}

ReactSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultValue: PropTypes.number,
};

ReactSelect.defaultProps = {
  multiple: false,
  defaultValue: null,
};
