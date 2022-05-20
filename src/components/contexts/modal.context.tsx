import { ComponentProps, createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';

/** hooks **/
import useTransition from '../../hooks/useTransition.hook';

/** components **/
import { Close } from 'styled-icons/evil';

interface IModalContext {
  modalContent?: ReactNode;
  modalOpen: boolean;
  setModalContent: (modalContent?: ReactNode) => void;
  setModalOpen: (modalOpen: boolean) => void;
}
const ModalContext = createContext<IModalContext  | null>(null);
function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  const { modalContent, setModalContent, modalOpen, setModalOpen } = context;

  useEffect(() => {
    let type = 'auto';
    if (modalOpen) type = 'hidden';
    document.body.style.overflow = type;
  }, [modalOpen]);

  return {
    modalContent,
    modalOpen,
    setModalContent,
    setModalOpen
  };
}
function ModalProvider(props: any) {
  const [modalContent, setModalContent] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  return <ModalContext.Provider value={{ modalContent, modalOpen, setModalContent, setModalOpen }} {...props} />;
}

function Modal({ ...otherProps }: ComponentProps<any>) {
  const { modalContent, modalOpen, setModalContent, setModalOpen } = useModal();
  const transition = useTransition({
    duration: 0.25,
    opacityEnd: !modalOpen ? 0 : 1,
    opacityStart: !modalOpen ? 0 : 0
  });
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setModalOpen(false);
  }, []);

  useEffect(() => {
    if (modalOpen) document.addEventListener('keydown', handleKeyPress, true);
    else document.removeEventListener('keydown', handleKeyPress, true);
  }, [modalOpen]);
  
  function handleClose() {
    setModalOpen(false);
  }

  return (
    <StyledModal className={classNames({ hidden: !modalOpen })}>
      <AnimatePresence onExitComplete={() => setModalContent()}>
        {modalOpen && <motion.div key="modal-overlay" className="overlay" {...transition} onClick={handleClose} />}
        {modalOpen && (
          <motion.div key="modal-main" className="modal" {...transition}>
            <div className="modal-header">
              <Close className="close-button" onClick={handleClose} />
            </div>
            <div className="modal-body">{modalContent}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledModal>
  );
}
const StyledModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  &.hidden {
    pointer-events: none;
  }
  .modal {
    width: 50%;
    max-height: 95%;
    min-height: 200px;
    min-width: 200px;
    z-index: 2002;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--white);
    .modal-body {
      flex: 1 1 auto;
      overflow: auto;
    }
    .modal-header {
      text-align: right;
      padding: 5px;
      box-shadow: 0 0 2px var(--opaque);
      .close-button {
        height: 20px;
        width: 20px;
        padding: 2px;
        cursor: pointer;
        color: var(--primary);
        transition: all 0.2s;
        &:hover,
        &:active {
          color: var(--secondary);
        }
      }
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2001;
    background-color: var(--opaque);
  }
  @media (max-width: ${({ theme }): number => theme.mobileWidth}px) {
    .modal {
      width: auto;
      margin: 20px;
    }
  }
`;
export { Modal, ModalProvider, useModal };
