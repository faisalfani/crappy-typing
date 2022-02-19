import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledWord = styled.div`
  display: inline-block;
  margin: 0.3rem;
`;

const bounce = keyframes`
 from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: red;
    }
`;

export const Caret = styled.div`
  animation: ${bounce} 1s step-end infinite;
  border-left: 2px solid red;
`;
