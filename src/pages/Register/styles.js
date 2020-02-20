import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  border: 1px solid #333;
`;

export const RegisterForm = styled(Form)`
  flex-direction: column;
`;
