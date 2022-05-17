import styled from 'styled-components';

/** hooks **/
import { useAppSelector } from '../../hooks/useStore.hook';

function LogoStripe() {
  const {
    images: { logoMain2 }
  } = useAppSelector(store => store.img);
  return (
    <StyledLogoStripe>
      <img src={logoMain2} alt="logo" />
    </StyledLogoStripe>
  );
}
const StyledLogoStripe = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 100px;
    object-fit: contain;
    object-position: center;
  }
`;
export default LogoStripe;
