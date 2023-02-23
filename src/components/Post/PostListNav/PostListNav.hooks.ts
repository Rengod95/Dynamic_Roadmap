import { useState, useEffect } from 'react';

export const usePostListNav = (current: number, max: number) => {
  const [prevButtonDisabled, setPrevButtonDisabled] = useState<boolean>(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (current <= 1) setPrevButtonDisabled(true);
    else setPrevButtonDisabled(false);
    if (current === max) setNextButtonDisabled(true);
    else setNextButtonDisabled(false);
  }, [current, max]);

  return {
    prevButtonDisabled,
    nextButtonDisabled,
  };
};
