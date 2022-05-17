import { ComponentProps, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

/** hooks **/
import { useAppSelector } from '../../hooks/useStore.hook';

import { images } from '../../stores/Img.store';

interface IStop {
  color: string;
  percent: number;
}
interface ILeftGradientConfig {
  angle: string;
  stops: IStop[];
}
interface IInfoBanner extends ComponentProps<any> {
  config: {
    height?: string,
    leftGradientConfig?: ILeftGradientConfig
    rightGradientCover?: string | null;
  },
  className?: string;
  slotLeft: ReactElement;
  slotRight: ReactElement;
  style: Record<string, string>
}
function InfoBanner({ children, className, config, slotLeft, slotRight, style }: IInfoBanner) {
  const { isMobile } = useAppSelector(store => store.app);
  const [leftGradientConfig, setLeftGradientConfig] = useState<ILeftGradientConfig>({
    angle: '120deg',
    stops: [
      {
        color: 'rgb(255, 0, 40)',
        percent: 0
      },
      {
        color: 'rgb(255, 0, 40)',
        percent: 50
      },
      {
        color: 'transparent',
        percent: 50
      },
      {
        color: 'transparent',
        percent: 100
      }
    ]
  });
  const [height, setHeight] = useState('300px');
  const [rightGradientCover, setRightGradientCover] = useState<string | null>(null);
  const [styles, setStyles] = useState<Record<string, any>>({});

  useEffect(() => {
    if (config?.leftGradientConfig) {
      setLeftGradientConfig({
        ...leftGradientConfig,
        ...config.leftGradientConfig
      });
    }
    setHeight(config?.height ?? height);
    setRightGradientCover(config?.rightGradientCover !== undefined ? config.rightGradientCover : rightGradientCover);
  }, [config]);
  useEffect(() => {
    const newStyles = style;
    const leftGradientCover = getLinearGradient(leftGradientConfig);
    if (leftGradientCover && newStyles?.backgroundImage) newStyles.backgroundImage = `${leftGradientCover}, ${newStyles.backgroundImage}`;
    if (leftGradientCover && newStyles?.backgroundPosition) newStyles.backgroundPosition = `center, ${newStyles.backgroundPosition}`;
    if (leftGradientCover && newStyles?.backgroundSize) newStyles.backgroundSize = `100%, ${newStyles.backgroundSize}`;
    setStyles(newStyles);
  }, [isMobile, leftGradientConfig, style]);

  function getLinearGradient(config: ILeftGradientConfig): string {
    let linearGradient = '';
    if (config?.angle && config?.stops?.length) {
      let configAngle = config.angle;
      let configStops = config.stops;
      if (isMobile) {
        configAngle = '90deg';
        const firstStop = config.stops[0];
        const secondStop = {
          color: firstStop.color,
          percent: 100
        };
        configStops = [firstStop, secondStop];
      }
      const stops = configStops.map(stop => `${stop.color || 'white'} ${stop.percent || 0}%`);
      linearGradient = `linear-gradient(${configAngle}, ${stops.join(', ')})`;
    }
    return linearGradient;
  }

  return (
    <StyledInfoBanner
      className={className}
      rightGradientCover={rightGradientCover}
      style={{
        ...styles,
        height: !isMobile && height ? height : 'auto'
      }}
    >
      {rightGradientCover && <div className="right-cover" />}
      {children}
      <div className="grass" />
      <div className="slot-left">{slotLeft}</div>
      <div className="slot-right">{slotRight}</div>
    </StyledInfoBanner>
  );
}
const StyledInfoBanner = styled.div<{rightGradientCover?: string | null;}>`
  position: relative;
  display: flex;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  margin: 8px 0;
  overflow: hidden;
  .grass {
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 40%;
    width: 5%;
    background: url(${images.grassWhite}) no-repeat 50% 100% / contain;
  }
  .right-cover {
    background-image: ${({rightGradientCover}) => rightGradientCover ?? ''};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .slot-left {
    flex: 45%;
    max-width: 600px;
    display: flex;
    justify-content: flex-end;
  }
  .slot-right {
    flex: 55%;
    display: flex;
  }

  @media (max-width: var(--mobile-width)px) {
    flex-direction: column;
    background-size: 160%;
    .slot-left {
      margin: 0;
    }
    .slot-right {
      margin: 0;
    }
  }
`;
export default InfoBanner;
