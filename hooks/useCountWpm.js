import React, { useState } from 'react';

const useCountWpm = () => {
  const [wpm, setWpm] = useState(0);

  return [wpm];
};

export default useCountWpm;
