import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  background: #3b4242;
  border-radius: 8px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  padding: 50px;
  font-size: 14px;

  div + div {
    margin-top: 8px;
  }

  > div {
    display: flex;
    align-items: center;
    width: 100%;

    input {
      height: 44px;
      border: 0;
      border-radius: 8px;
      padding: 0 8px;
      color: #f4f4f4;
      width: 100%;
      background: #262e2e;
    }

    select {
      height: 44px;
      border: 0;
      border-radius: 8px;
      padding: 0 8px;
      color: #f4f4f4;
      width: 100%;
      background: #262e2e;
    }
  }
`;

export const Partner = styled.div`
  padding: 10px;
  margin-top: 10px;
  background-color: #e4e4e4;
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
