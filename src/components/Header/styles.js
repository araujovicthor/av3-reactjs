import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  height: 100px;
`;

export const Button = styled(NavLink)`
  display: flex;
  place-content: center;
  place-items: center;
  padding: 10px 50px;
  border-left: 0;
  text-decoration: none;
  color: #f4f4f4;

  border: 1px solid #f4f4f4;
  height: 44px;

  border-radius: 8px;
  margin: 0 8px;

  &.active {
    background: #f4f4f4;
    color: #169bd5;
    cursor: text;
  }
`;
