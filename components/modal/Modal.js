import { useRef } from 'react';
import { bool, func, node, string } from 'prop-types';
import * as styles from './Modal.styles';

const Modal = ({ children, label, labelledBy, onClose, open }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (!modalRef.current?.contains(event.target)) {
      onClose(event);
    }
  };

  return open ? (
    <div
      aria-label={label}
      aria-labelledby={labelledBy}
      aria-modal="true"
      className={styles.modalRoot}
      onClick={handleClickOutside}
      onKeyDown={handleClickOutside}
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
  ) : null;
};

Modal.defaultProps = {
  children: null,
  label: null,
  labelledBy: null,
  onClose: () => {},
  open: false,
};

Modal.propTypes = {
  children: node,
  label: string,
  labelledBy: string,
  onClose: func,
  open: bool,
};

export default Modal;
