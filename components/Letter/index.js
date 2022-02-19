import PropTypes from 'prop-types';
import React from 'react';
import { LetterWrapper } from './styled';

const Letter = ({ letterProps }) => {
  const { letter, status, isActive } = letterProps;
  return (
    <LetterWrapper status={status} isActive={isActive}>
      {letter}
    </LetterWrapper>
  );
};

Letter.propTypes = {
  letterProps: PropTypes.object,
};

export default Letter;
