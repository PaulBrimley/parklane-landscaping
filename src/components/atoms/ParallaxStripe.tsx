import { ComponentProps, useEffect, useState } from 'react';
import styled from 'styled-components';

interface IParallaxStripe extends ComponentProps<any> {
  backgroundRepeat: string;
  backgroundSize: string;
  backgroundUrl: string;
  className: string;
  height: string;
  offsetAdjustment: number;
  parallaxStart?: number;
  parallaxStrength: number;
}
function ParallaxStripe({ backgroundRepeat, backgroundSize = '110%', backgroundUrl, children, className, height, offsetAdjustment = -200, parallaxStart, parallaxStrength = 0.2 }: IParallaxStripe) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      if (parallaxStart) setOffset(Math.max(0, window.scrollY - Number(parallaxStart)));
      else setOffset(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <StyledParallaxStripe
      backgroundSize={backgroundSize}
      backgroundUrl={backgroundUrl}
      className={className}
      style={{
        backgroundPosition: `60% ${offsetAdjustment + offset * parallaxStrength}px`,
        backgroundRepeat: backgroundRepeat ?? 'no-repeat',
        height: height ?? 'auto'
      }}
    >
      {children}
    </StyledParallaxStripe>
  );
}
const StyledParallaxStripe = styled.div<{ backgroundSize: string; backgroundUrl: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-repeat: repeat;
  background-size: ${({ backgroundSize }) => backgroundSize};
`;
export default ParallaxStripe;
