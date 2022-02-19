import React from 'react';
import { DynamicComponentWithNoSSR } from '../components';
import Container from './styled';
export default function Home() {
  return (
    <Container>
      <DynamicComponentWithNoSSR />
    </Container>
  );
}
