import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const bounce = keyframes`
 from,
    to {
      border-color: red;
    }
    50% {
      border-color: transparent;
    }
    100%{
      border-color:red
    }
`;

const renderCaret = (props) => {
  let before;
  if (props.isActive && !props.isLast) {
    before = css`
      content: '';
      left: 0;
      animation: ${bounce} 1s step-end infinite;
      border-left: 2px solid red;
    `;
  }
  return before;
};
const renderAfter = (props) => {
  let after;
  if (props.isLast) {
    after = css`
      content: '';
      animation: ${bounce} 1s step-end infinite;
      border-left: 2px solid red;
    `;
  }
  return after;
};

const renderColor = (props) => {
  let color;
  switch (props.status) {
    case 'correct':
      color = css`
        color: black;
      `;
      break;

    case 'wrong':
      color = css`
        color: red;
      `;
      break;

    default:
      color = css`
        color: #00000050;
      `;
      break;
  }
  return color;
};

export const LetterWrapper = styled.span`
  display: inline;
  font-size: x-large;
  font-weight: 400;
  ::before {
    ${renderCaret}
  }
  ::after {
    ${renderAfter}
  }
  ${renderColor}
`;
