import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  border: 1px solid #333;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  font-size: 14px;

  label {
    width: 100px;
    text-align: end;
    padding-right: 5px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;

  button {
    padding: 10px 40px;
    border-radius: 5px;
    background-color: #169bd5;
    color: #fff;
  }
`;
