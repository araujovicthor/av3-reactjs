import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const Button = styled(NavLink)`
  position: relative;
  padding: 10px 50px;
  border: 1px solid #333;
  text-decoration: none;
  color: #333;
  font-size: 13px;

  :last-child {
    left: -1px;
  }

  &.active {
    cursor: text;
  }
`;
