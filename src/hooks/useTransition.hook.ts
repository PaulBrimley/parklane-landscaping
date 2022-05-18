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
  onComplete?: (...args: any[]) => any;
  opacityEnd?: number;
  opacityStart?: number;
  xEnd?: string;
  xStart?: string;
  yEnd?: string;
  yStart?: string;
  type?: TransitionTypes;
}
export default function useTransition({ duration = 1, ease = EaseTypes.EASE_IN_OUT, onComplete, opacityEnd = 1, opacityStart = 1, xEnd = '0', xStart = '0', yEnd = '0', yStart = '0', type = TransitionTypes.TWEEN }: ITransition): MotionProps {
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
    onAnimationComplete: onComplete ?? undefined,
    transition: {
      duration,
      ease,
      type
    }
  };
}