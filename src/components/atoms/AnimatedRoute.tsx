import React, { ComponentProps, ReactNode } from 'react';
import { motion } from 'framer-motion';

/** hooks **/
import useTransition, { EaseTypes, TransitionTypes } from '../../hooks/useTransition.hook';

/** components **/
import { RouteLayoutWithRef } from './RouteLayout';

const RouteLayoutWithMotion = motion(RouteLayoutWithRef);
interface IAnimatedRouteProps extends ComponentProps<any> {
  children: ReactNode;
  className?: string;
  duration?: number;
}
function AnimatedRoute({ children, className, duration = 1 }: IAnimatedRouteProps) {
  const transition = useTransition({
    duration,
    ease: EaseTypes.LINEAR,
    opacityEnd: 1,
    opacityStart: 0,
    xStart: '20px',
    type: TransitionTypes.SPRING
  });
  return <RouteLayoutWithMotion children={children} className={className} {...transition} />;
}
export default AnimatedRoute;
