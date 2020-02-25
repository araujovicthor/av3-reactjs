import styled from 'styled-components';
import { Form } from '@unform/core';

export const Container = styled.div`
  border: 1px solid #333;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Botton = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Picker = styled(Form)``;

export const Table = styled.table`
  border-collapse: collapse;

  th {
    padding: 10px 100px;
    background-color: #169bd5;
  }

  td {
    padding: 3px 0;
    text-align: center;
  }
`;
