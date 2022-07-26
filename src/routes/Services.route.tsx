import { ComponentProps } from 'react';
import styled from 'styled-components';

/** stores **/
import { images } from '../stores/Img.store';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';
import { useAppSelector } from '../hooks/useStore.hook';

/** components **/
import AnimatedRoute from '../components/atoms/AnimatedRoute';
import InfoBanner from '../components/molecules/InfoBanner';
import InfoBannerLeft from '../components/molecules/InfoBannerLeft';
import LogoStripe from '../components/atoms/LogoStripe';
import PageDivider1 from '../components/atoms/PageDivider1';
import ServiceGuide from '../components/molecules/ServiceGuide';
import ServiceList from '../components/atoms/ServiceList';
import StyledInfoBannerMessage from '../components/styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/styled/StyledInfoBodyMessage';

/** images **/
const { imgGuyPlanting2, imgGuyTeaching2, imgGuyTrimming1, imgGuyTrimming2 } = images;

interface IServicesRoute extends ComponentProps<any> {}
function ServicesRoute({ ...otherProps }: IServicesRoute) {
  const { width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let strength = 0.3;
    if (width < 900) strength = 0.35;
    if (width < 800) strength = 0.4;
    if (width < 700) strength = 0.5;
    if (width < 600) strength = 0.55;
    if (width < 550) strength = 0.6;
    if (width < 450) strength = 0.7;
    if (width < 400) strength = 0.8;
    return width * strength - 350;
  }
  function calcBackgroundSize() {
    let size = '110%';
    if (width < 800) size = '120%';
    if (width < 700) size = '135%';
    if (width < 600) size = '150%';
    if (width < 550) size = '160%';
    if (width < 450) size = '170%';
    if (width < 400) size = '180%';
    return size;
  }

  return (
    <StyledServicesRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgGuyTrimming1})`,
          backgroundPosition: `right calc(${calcBackgroundPosition()}px + ${offset.y}px)`,
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
                    THE <span className="isBold">HOA</span>
                  </div>
                  <div className="isBold">LANDSCAPE</div>
                  <div>SPECIALISTS</div>
                </div>
                <div className="hr" />
                <div className="message">
                  <div>The beauty of maintaining HOA</div>
                  <div>communities is in the details.</div>
                </div>
              </StyledInfoBannerMessage>
            }
          />
        }
      />

      <PageDivider1 />

      <br />
      <br />

      <div className="services-header uppercase">A Full Service Firm</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        As a full service landscape company, Parklane Landscaping provides expert consultation, design, and installation services in addition to the professional maintenance of plant beds, turf, trees, lighting, water features, fence lines, drainage areas, irrigation systems and more!
      </StyledInfoBodyMessage>

      <br />
      <br />
      <br />
      <br />

      <div className="services-subsection">
        <div className="subsection-image" />
        <div className="subsection-info">
          <div className="services-header-2">Quality Assurance</div>
          <StyledInfoBodyMessage fontSize="1.6em" margin="0">
            In order to protect a community’s landscape investment, Parklane Landscaping conducts quality assurance visits and proposes any necessary landscape adjustments, repairs and/or enhancements. Our account executives submit these observations via monthly quality assurance reports. These reports are vital in assisting board members, developers and property managers in maintaining the longevity of the HOA’s landscape. And in cases where individual homeowners have specific concerns, we are delighted to meet with them to ensure a thorough understanding of the issue. We then report back to the board, developer or property manager with expert and informed ideas for a timely resolution.
          </StyledInfoBodyMessage>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="service-guide">
        <ServiceGuide />
      </div>

      <br />
      <br />
      <br />
      <br />

      <LogoStripe />

      <ServiceList />
    </StyledServicesRoute>
  );
}
const StyledServicesRoute = styled(AnimatedRoute)`
  padding-bottom: 90px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .service-guide {
    margin: 20px var(--side-margin) 10px;
  }
  .services-header {
    font-size: 3em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
    text-align: center;
  }
  .services-header-2 {
    font-size: 2.7em;
    font-weight: 700;
    color: var(--primary);
  }
  .services-subsection {
    display: flex;
    margin: 10px var(--side-margin) 0;
    .subsection-image {
      flex: 1 1 40%;
      background: url(${imgGuyTrimming2}) no-repeat center / cover;
      margin-bottom: 0.7em;
    }
    .subsection-info {
      flex: 1 1 60%;
      padding-left: 20px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .services-header {
      font-size: 2em;
      margin: 20px;
    }
    .services-header-2 {
      margin: 20px 0 10px;
    }
    .services-subsection {
      flex-direction: column;
      .subsection-image {
        flex: unset;
        display: block;
        height: 300px;
        margin-right: 0;
        margin-bottom: 10px;
        background: url(${imgGuyTrimming2}) no-repeat top / cover;
      }
      .subsection-info {
        padding-left: 0;
      }
    }
  }
`;
export default ServicesRoute;
