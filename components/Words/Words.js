import { Word } from '..';
import { WordsContainer } from './styled';
import useKeyPress from '../../hooks/useKeyPress';
import { useEffect, useState } from 'react';

const Words = () => {
  const [restructuredData, isIdle, correctCount, currentWord] = useKeyPress();
  const [wpm, setWpm] = useState(0);

  return (
    <WordsContainer>
      {restructuredData.map((word) => {
        return <Word word={word} key={word._id} currentWord={currentWord} />;
      })}
    </WordsContainer>
  );
};

export default Words;
