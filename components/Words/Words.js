import { Word } from '..';
import { WordsContainer } from './styled';
import useKeyPress from '../../hooks/useKeyPress';
import { useEffect, useState } from 'react';

const Words = () => {
  const [restructuredData, correctCount] = useKeyPress();
  const [wpm, setWpm] = useState(0);
  useEffect(() => {}, [correctCount]);

  return (
    <WordsContainer>
      {restructuredData.map((word) => {
        return <Word word={word} key={word._id} />;
      })}
    </WordsContainer>
  );
};

export default Words;
