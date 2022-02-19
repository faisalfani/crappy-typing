import React from 'react';
import { LetterWrapper } from './styled';

const Letter = ({ letterProps, isLast }) => {
  const { letter, status, isActive } = letterProps;

  return (
    <LetterWrapper status={status} isActive={isActive} isLast={isLast}>
      {letter}
    </LetterWrapper>
  );
};

export default Letter;
