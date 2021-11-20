import { useEffect, useState } from 'react';

const useImageVerifier = (src) => {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const checkImage = async () => {
      try {
        const res = await fetch(src);
        const blob = await res.blob();
        setValid(blob.type.startsWith('image/'));
      } catch (err) {}
    };
    checkImage();
  }, [src]);

  return valid;
};

export default useImageVerifier;
