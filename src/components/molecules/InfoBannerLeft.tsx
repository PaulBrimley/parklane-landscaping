import { ComponentProps, ReactElement } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

/** hooks **/
import useTransition from '../../hooks/useTransition.hook';

interface IInfoBannerLeft extends ComponentProps<any> {
  action: ReactElement;
  className?: string;
  message: ReactElement;
}
function InfoBannerLeft({ action, className, message }: IInfoBannerLeft) {
  const messageTransition = useTransition({
    opacityStart: 0,
    yStart: 10
  });
  const actionTransition = useTransition({
    opacityStart: 0,
    xStart: -10
  });

  return (
    <StyledInfoBannerLeft className={className}>
      <motion.div {...messageTransition}>{message}</motion.div>
      <motion.div {...actionTransition}>{action}</motion.div>
    </StyledInfoBannerLeft>
  );
}
const StyledInfoBannerLeft = styled.div`

`;
export default InfoBannerLeft;
