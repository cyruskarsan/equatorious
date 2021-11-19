import { useEffect, useRef, useState } from 'react';
import { bool, func, node, string } from 'prop-types';
import { BrowserPortal } from '@src/components';
import { getFocusableChildNodes } from '@src/helpers';
import { useThemeSwitcher } from '@src/hooks';
import * as styles from './Dialog.styles';

const Dialog = ({ children, label, labelledBy, onClose, open }) => {
  const [focusableNodes, setFocusableNodes] = useState([]);
  const modalRef = useRef();
  const [theme] = useThemeSwitcher();
  const firstFocusableNode = focusableNodes[0];
  const lastFocusableNode = focusableNodes[focusableNodes.length - 1];

  const handleClickOutside = (event) => {
    if (!modalRef.current?.contains(event.target)) {
      onClose(event);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'Tab': {
        if (event.shiftKey && event.target.isEqualNode(firstFocusableNode)) {
          event.preventDefault();
          lastFocusableNode.focus();
        }
        if (!event.shiftKey && event.target.isEqualNode(lastFocusableNode)) {
          event.preventDefault();
          firstFocusableNode.focus();
        }
        break;
      }
      case 'Escape': {
        onClose(event);
        break;
      }
    }
  };

  useEffect(() => {
    const focusable = getFocusableChildNodes(modalRef.current);
    setFocusableNodes(focusable);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return open ? (
    <BrowserPortal modalId="modal">
      <div
        aria-label={label}
        aria-labelledby={labelledBy}
        aria-modal="true"
        className={styles.modalRoot}
        data-theme={theme}
        onClick={handleClickOutside}
        onKeyDown={() => {}}
        role="dialog"
      >
        <section className={styles.modalSection} ref={modalRef}>
          {children}
        </section>
        <style jsx>{`
          :global(body) {
            overflow: hidden;
          }
        `}</style>
      </div>
    </BrowserPortal>
  ) : null;
};

Dialog.defaultProps = {
  children: null,
  label: null,
  labelledBy: null,
  onClose: () => {},
  open: false,
};

Dialog.propTypes = {
  children: node,
  label: string,
  labelledBy: string,
  onClose: func,
  open: bool,
};

export default Dialog;
