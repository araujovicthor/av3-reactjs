import styled from 'styled-components';
import { Form } from '@unform/core';

export const Container = styled.div``;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > div {
    display: flex;
    align-items: center;
    width: 300px;

    select {
      height: 44px;
      border: 0;
      border-radius: 8px;
      padding: 0 8px;
      color: #f4f4f4;
      width: 100%;
      background: #333;
      margin: 8px;
    }
  }
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
