import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const BrowserPortal = ({ children, modalId }) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById(modalId);
    setMounted(true);
  }, [modalId]);

  return mounted ? createPortal(children, ref.current) : null;
};

export default BrowserPortal;
