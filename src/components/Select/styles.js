import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  select:disabled {
    opacity: 0.2;
  }

  align-items: flex-start !important;

  label {
    margin-bottom: 8px;
  }
`;
