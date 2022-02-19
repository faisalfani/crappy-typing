import PropTypes from 'prop-types';
import React from 'react';
import Letter from '../Letter';
import { StyledWord } from './styled';

const Word = ({ word, currentWord }) => {
  return (
    <StyledWord>
      {word.word.map((letter, i) => {
        const isLast = word.word.length === i + 1;
        const isLastActive = isLast && word === currentWord;
        const isLetterActive = word.word[i]?.status;
        return (
          <Letter
            key={word._id + i}
            letterProps={letter}
            isLast={isLastActive && isLetterActive}
          />
        );
      })}
    </StyledWord>
  );
};

export default Word;
