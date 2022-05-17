import React, { ComponentProps, ReactNode } from 'react';
import { motion } from 'framer-motion';

/** components **/
import { RouteLayoutWithRef } from './RouteLayout';
const RouteLayoutWithMotion = motion(RouteLayoutWithRef);

interface Props extends ComponentProps<any>{
  children: ReactNode;
  className?: string;
  duration?: number;
  slide?: number;
  slideUp?: number;
}
function AnimatedRoute({ children, className, duration = 1, slide = 0, slideUp = 0 }: Props) {
  return <RouteLayoutWithMotion children={children} className={className} exit={{ opacity: 0, x: slide, y: slideUp }} initial={{ opacity: 0, x: slide, y: slideUp }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ type: 'spring', duration }} />;
}
export default AnimatedRoute;
