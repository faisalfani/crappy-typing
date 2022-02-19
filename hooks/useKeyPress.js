import { useEffect, useState } from 'react';
import faker from '@faker-js/faker';
import { nanoid } from 'nanoid';
import { isEmpty } from 'lodash';

const useKeyPress = () => {
  const [keyPressed, setKeyPressed] = useState();
  const [isIdle, setIsIdle] = useState(false);
  const [randomWords, setRandomWords] = useState(
    faker.random.words(50).split(' ')
  );
  const [correctCount, setCorrectCount] = useState(0);

  const [restructuredData, setRestructuredData] = useState(
    randomWords.map((word, wordIndex) => {
      const letter = {
        word: [...word].map((letter, letterIndex) => {
          if (wordIndex == 0 && letterIndex == 0) {
            return { letter, isActive: true };
          }
          return {
            letter,
          };
        }),
        _id: nanoid(),
      };
      return letter;
    })
  );

  const [letterIndex, setLetterIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(restructuredData[wordIndex]);
  const [currentLetter, setCurrentLetter] = useState(
    currentWord.word[letterIndex]?.letter
  );

  useEffect(() => {
    const downHandler = ({ key, keyCode }) => {
      if (keyPressed !== key && key.length === 1) {
        setIsIdle(false);
      }
      if (isEmpty(currentWord.word[letterIndex])) {
        setWordIndex(wordIndex + 1);
        setCurrentWord(restructuredData[wordIndex + 1]);
        setLetterIndex(0);
        setCurrentLetter(restructuredData[wordIndex + 1].word[0].letter);
      } else if (key === currentLetter) {
        setCorrectCount(correctCount + 1);
        setLetterIndex(letterIndex + 1);
        setCurrentLetter(currentWord.word[letterIndex + 1]?.letter);
        const tempData = [...restructuredData];
        tempData[wordIndex].word[letterIndex].status = 'correct';
        if (!isEmpty(tempData[wordIndex].word[letterIndex + 1])) {
          tempData[wordIndex].word[letterIndex + 1].isActive = true;
        }
        if (!isEmpty(tempData[wordIndex].word[letterIndex])) {
          tempData[wordIndex].word[letterIndex].isActive = false;
        }
        setRestructuredData(tempData);
      } else if (
        (keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 65 && keyCode <= 90)
      ) {
        setLetterIndex(letterIndex + 1);
        setCurrentLetter(currentWord.word[letterIndex + 1]?.letter);
        const tempData = [...restructuredData];
        tempData[wordIndex].word[letterIndex].status = 'wrong';
        tempData[wordIndex].word[letterIndex + 1].isActive = true;
        if (!isEmpty(tempData[wordIndex].word[letterIndex])) {
          tempData[wordIndex].word[letterIndex].isActive = false;
        }
        setRestructuredData(tempData);
      }
    };

    const upHandler = () => {
      setTimeout(() => {
        setIsIdle(true);
      }, 1000);
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return [restructuredData, isIdle, correctCount];
};

export default useKeyPress;
