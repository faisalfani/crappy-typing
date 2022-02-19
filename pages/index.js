import React from 'react';
import { Container } from './styled';
import { DynamicComponentWithNoSSR } from '../components';
export default function Home() {
  return (
    <Container>
      <DynamicComponentWithNoSSR />
    </Container>
  );
}
