import React from 'react';

import { Container, Button } from './styles';

export default function Header() {
  return (
    <Container>
      <Button exact to="/">
        Watch
      </Button>
      <Button to="/register">Register</Button>
    </Container>
  );
}
