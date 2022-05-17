import { ComponentProps } from 'react';
import { motion } from 'framer-motion';

/** hooks **/
import useTransition from '../../hooks/useTransition.hook';

interface IInfoBannerRight extends ComponentProps<any> {
  className?: string;
}
function InfoBannerRight({ children, className }: IInfoBannerRight) {
  const transition = useTransition({
    opacityStart: 0,
    xStart: 10
  });
  return <motion.div className={className} {...transition}>{children}</motion.div>;
}
export default InfoBannerRight;
