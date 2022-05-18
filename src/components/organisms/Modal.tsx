import { ComponentProps, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import classNames from 'classnames';

/** stores **/
import { registerModal, setModalStatus } from '../../stores/App.store';

/** hooks **/
import { useAppSelector, useAppDispatch } from '../../hooks/useStore.hook';
import useTransition from '../../hooks/useTransition.hook';

/** components **/
import { Close } from 'styled-icons/evil';

interface IModal extends ComponentProps<any> {
  modalID: string;
}
function Modal({ children, modalID }: IModal) {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector(store => store.app);
  const [modalOpen, setModalOpen] = useState(false);
  const transition = useTransition({
    opacityEnd: !modalOpen ? 0 : 1,
    opacityStart: !modalOpen ? 0 : 0
  });

  useEffect(() => {
    if (!Object.prototype.hasOwnProperty.call(modals, modalID)) dispatch(registerModal(modalID));
  }, [modalID]);
  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(modals, modalID)) setModalOpen(modals[modalID] ?? false);
  }, [modals]);
  useEffect(() => {
    let type = 'auto';
    if (modalOpen) type = 'hidden';
    document.body.style.overflow = type;
  }, [modalOpen]);

  function handleClose() {
    dispatch(setModalStatus({ modalID, open: false }));
  }

  return (
    <StyledModal className={classNames({ hidden: !modalOpen })}>
      <motion.div className="overlay" {...transition} onClick={handleClose}/>
      <motion.div className="modal">
        <div className="modal-header">
          <Close className="close-button" onClick={handleClose} />
        </div>
        <div className="modal-body">
          {children}
        </div>
      </motion.div>
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
export default Modal;
