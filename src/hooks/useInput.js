import { useState } from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return [value, changeValue];
};

export default useInput;
