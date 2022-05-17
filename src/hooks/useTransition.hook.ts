import { MotionProps } from 'framer-motion';

export enum EaseTypes {
  EASE_IN = 'easeIn',
  EASE_IN_OUT = 'easeInOut',
  EASE_OUT = 'easeOut',
  LINEAR = 'linear'
}
export enum TransitionTypes {
  INERTIA = 'inertia',
  SPRING = 'spring',
  TWEEN = 'tween'
}
interface ITransition {
  duration?: number;
  ease?: EaseTypes;
  opacityEnd?: number;
  opacityStart?: number;
  xEnd?: number;
  xStart?: number;
  yEnd?: number;
  yStart?: number;
  type?: TransitionTypes;
}
export default function useTransition({ duration = 1, ease = EaseTypes.EASE_IN_OUT, opacityEnd = 1, opacityStart = 1, xEnd = 0, xStart = 0, yEnd = 0, yStart = 0, type = TransitionTypes.SPRING }: ITransition): MotionProps {
  return {
    animate: {
      opacity: opacityEnd,
      x: xEnd,
      y: yEnd
    },
    initial: {
      opacity: opacityStart,
      x: xStart,
      y: yStart
    },
    transition: {
      duration,
      ease,
      type
    }
  };
}