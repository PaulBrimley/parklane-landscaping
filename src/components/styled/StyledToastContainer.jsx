import {ToastContainer} from 'react-toastify';
import styled from 'styled-components';

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast--error {
    background-color: ${({theme}) => theme.colorPrimaryHover};
  }
  .Toastify__toast--success {
    background-color: ${({theme}) => theme.colorQuaternary};
  }
`;
export default StyledToastContainer;
