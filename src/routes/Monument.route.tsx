import { ComponentProps, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

/** stores **/
import { images } from '../stores/Img.store';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';
import { useAppSelector } from '../hooks/useStore.hook';

/** components **/
import AnimatedRoute from '../components/atoms/AnimatedRoute';
import InfoBanner from '../components/molecules/InfoBanner';
import InfoBannerLeft from '../components/molecules/InfoBannerLeft';
import PageDivider1 from '../components/atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/styled/StyledInfoBodyMessage';
import SVGIcon, { SVGTypes } from '../components/atoms/SVGIcon';

/** images **/
import videoFoxGroveMedium from '../assets/video/video-fox-grove-medium.mp4';
import videoFoxGroveLarge from '../assets/video/video-fox-grove-large.mp4';
const { imgFoxGroveVideoThumbnail, imgMonument1, imgMonument4, imgMonument5, imgMonument10 } = images;

interface IMonumentRoute extends ComponentProps<any> {}
function MonumentRoute({ ...otherProps }: IMonumentRoute) {
  const { companyInfo, width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = useMemo(() => {
    if (width >= 1080) return videoFoxGroveLarge;
    return videoFoxGroveMedium;
  }, [width]);

  function calcBackgroundPosition() {
    let offset = 40;
    if (width < 800) offset = 30;
    if (width < 700) offset = 40;
    if (width < 400) offset = 100;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '110%';
    if (width < 800) size = '130%';
    if (width < 700) size = '150%';
    if (width < 600) size = '190%';
    return size;
  }
  function handleVideoDataLoaded() {
    setTimeout(async () => {
      setVideoLoaded(true);
      if (videoRef?.current) await videoRef.current.play();
    }, 1000);
  }

  return (
    <StyledMonumentRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgMonument10})`,
          backgroundPosition: `center calc(${calcBackgroundPosition()}% + ${offset.y}px)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: calcBackgroundSize()
        }}
        config={{
          height: '350px'
        }}
        slotLeft={
          <InfoBannerLeft
            className="info-banner-left"
            message={
              <StyledInfoBannerMessage>
                <div className="title">
                  <div>
                    <SVGIcon height="100%" width="63px" type={SVGTypes.MONUMENT} style={{ fill: 'white', marginRight: '7px' }} />
                    <span className="isBold">HOA</span>
                  </div>
                  <div>MONUMENT</div>
                </div>
                <div className="hr" />
                <div className="message">
                  <div>Celebrating A Decade</div>
                  <div>Specializing in HOA Landscapes</div>
                </div>
              </StyledInfoBannerMessage>
            }
          />
        }
      />

      <PageDivider1 />

      <br />
      <br />

      <div className="monument-header uppercase">HOA Monument</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin) 20px">
        From HOA logo design, to masonry creations, from state of the art lighting installations, to water-saving irrigation systems, Parklane Landscaping has the capability to create the monument an HOA envisions. A well-designed monument sets the stage for how the community portrays itself to the public. Parklane Landscaping specializes in monument creation for developers, monument revitalization for those HOA entries looking for a thoughtful refresh, and monument repair for those that experience the occasional damage.
      </StyledInfoBodyMessage>

      <div className="monument-info-subsection lower">
        <div className="subsection-images">
          <img src={imgMonument4} alt="monument 4" />
        </div>
        <div className="subsection-info">
          <StyledInfoBodyMessage fontSize="1.6em" fontStyle="italic" margin="0">
            Here is an example of a request Parklane received from one of its HOA clients. They asked for a renewed HOA logo and sign as well as an overall monument redesign and landscaping plan to accent the entire look and feel utilizing materials to match their current structures.
          </StyledInfoBodyMessage>
        </div>
      </div>

      <div className="monument-info-images">
        <img src={imgMonument5} alt="monument 5" style={{ height: '230px' }} />
      </div>

      <br/>
      <br/>
      <br/>

      <div className="video-container">
        <div className={classNames('video-thumbnail', { visible: !videoLoaded })} />
        <video
          ref={videoRef}
          className={classNames('video', { visible: videoLoaded })}
          playsInline
          muted
          loop
          src={videoSrc}
          onLoadedData={handleVideoDataLoaded}
        />
      </div>

      <div className="contact-info">For estimates call {companyInfo.phone}</div>
    </StyledMonumentRoute>
  );
}
const StyledMonumentRoute = styled(AnimatedRoute)`
  padding-bottom: 100px;
  .contact-info {
    color: var(--primary);
    margin: 30px var(--side-margin) 0;
    text-align: center;
    font-size: 1.4em;
    font-weight: 300;
    text-transform: uppercase;
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .monument-header,
  .monument-header-2 {
    font-size: 3em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
    text-align: center;
  }
  .monument-header-2 {
    font-size: 2em;
  }
  .monument-info-images {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 0 var(--side-margin);
    img {
      flex: 0 1 auto;
      width: 100%;
      object-fit: cover;
      object-position: center 45%;
    }
  }
  .monument-info-subsection {
    display: flex;
    margin: 10px var(--side-margin);
    .subsection-images {
      margin-right: 10px;
      flex: 49% 0 0;
      img {
        width: 100%;
        &:first-child {
          margin-bottom: 10px;
        }
      }
    }
    .subsection-info {
      flex: 49% 0 0;
    }
  }
  .video-container {
    margin: 0 var(--side-margin);
    position: relative;
    .video {
      width: 100%;
      opacity: 0;
      transition: all 0.2s;
      &.visible {
        opacity: 1;
      }
    }
    .video-thumbnail {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      filter: blur(5px);
      background: url(${imgFoxGroveVideoThumbnail}) no-repeat 50% 100% / contain;
      opacity: 0;
      transition: all 0.5s;
      &.visible {
        opacity: 1;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .monument-info-subsection {
      flex-direction: column;
      .subsection-images {
        margin-right: 0;
        margin-bottom: 10px;
      }
      &.lower {
        flex-direction: column-reverse;
        .subsection-info {
          margin-bottom: 10px;
        }
      }
    }
  }
`;
export default MonumentRoute;
