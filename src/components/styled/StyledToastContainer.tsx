import {ToastContainer} from 'react-toastify';
import styled from 'styled-components';

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast--error {
    background-color: var(--primary-hover);
  }
  .Toastify__toast--success {
    background-color: var(--quaternary);
  }
`;
export default StyledToastContainer;
