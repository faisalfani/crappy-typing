import React from 'react';
import Letter from '../Letter';
import { StyledWord } from './styled';

const Word = ({ word }) => {
  return (
    <StyledWord>
      {word.word.map((letter, i) => {
        return <Letter key={word._id + i} letterProps={letter} />;
      })}
    </StyledWord>
  );
};

export default Word;
