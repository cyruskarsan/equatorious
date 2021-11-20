import { useMemo, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storageValue) : value;
      setStorageValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {}
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => [storageValue, setValue], [storageValue]);
  return value;
};

export default useLocalStorage;
