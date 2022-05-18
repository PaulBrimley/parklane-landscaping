import { ComponentProps } from 'react';
import styled from 'styled-components';

/** stores **/
import { images } from '../stores/Img.store';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';
import { useAppSelector } from '../hooks/useStore.hook';

/** routes **/
import { Paths as ReactPaths } from './Routes';

/** components **/
import AnimatedRoute from '../components/atoms/AnimatedRoute';
import { LinkButton } from '../components/atoms/Button';
import InfoBanner from '../components/molecules/InfoBanner';
import InfoBannerLeft from '../components/molecules/InfoBannerLeft';
import InfoBannerRight from '../components/molecules/InfoBannerRight';
import LogoStripe from '../components/atoms/LogoStripe';
import PageDivider1 from '../components/atoms/PageDivider1';
import ServiceGuide from '../components/molecules/ServiceGuide';
import StyledInfoBannerAction from '../components/styled/StyledInfoBannerAction';
import StyledInfoBannerMessage from '../components/styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/styled/StyledInfoBodyMessage';
import WeatherIcon from '../components/atoms/icons/Weather.icon';

/** images **/
const { imgGrass, imgHome, logoAnniversary, logoMain2 } = images;

interface IHomeRouteProps extends ComponentProps<any> {
  path: string;
}
function HomeRoute(props: IHomeRouteProps) {
  const { width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 10;
    if (width < 800) offset = 100 - (width / 800) * 100 + 10;
    return offset;
  }

  return (
    <StyledHomeRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgHome})`,
          backgroundPosition: `center calc(${calcBackgroundPosition()}% + ${offset.y}px)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: width < 500 ? '500px' : 'cover'
        }}
        config={{
          height: '350px'
        }}
        slotLeft={
          <InfoBannerLeft
            action={
              <StyledInfoBannerAction>
                <LinkButton classes="learn-more-button-1" fontSize="0.8em" fontWeight="400" padding="12px 20px 11px" shadow="colorTransparent" to={ReactPaths.SERVICES}>
                  LEARN MORE
                </LinkButton>
              </StyledInfoBannerAction>
            }
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
                  <div>Celebrating A Decade</div>
                  <div>Specializing in HOA Landscapes</div>
                </div>
              </StyledInfoBannerMessage>
            }
          />
        }
        slotRight={
          <InfoBannerRight className="info-banner-right" config={{ friction: 70 }}>
            <img className="anniversary-logo" src={logoAnniversary} alt="anniversary logo" />
          </InfoBannerRight>
        }
      >
        <a className="weather-link" href="https://weather.com/weather/today/l/0e23ddb22586163323dc8c95e1ca5a3d43e9d736052ec6a368233a2897f36cad" target="_blank">
          <WeatherIcon fill="var(--secondary)" />
        </a>
      </InfoBanner>

      <PageDivider1 />

      <img className="home-anniversary-logo" src={logoAnniversary} alt="Anniversary logo" />

      <br />
      <br />

      <div className="home-header uppercase">The HOA Landscape Specialists</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        Parklane Landscaping is a professional landscape company specializing in landscape maintenance, landscape design and enhancement, and irrigation system management serving HOA communities in the greater San Antonio area and its surrounding municipalities.
      </StyledInfoBodyMessage>

      <StyledInfoBodyMessage fontSize="1.6em" margin="15px var(--side-margin)">
        With a reputation for excellent client service and professional attention to the landscape care of its HOA clients, Parklane Landscaping works with HOA boards, property management companies and housing developers in the care and enhancement of HOA communities and their landscaped common areas such as entry monuments, parkways, amenity centers, parks, green belts, fence lines, drainage easements, and more.
      </StyledInfoBodyMessage>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        For over 10 years, Parklane Landscaping has served the botanical needs of HOA communities as a full service landscape firm and remains the only landscaping company to specialize in the beautification of HOA properties.
      </StyledInfoBodyMessage>

      <br />

      <LogoStripe />

      <br />
      <br />

      <div className="service-guide">
        <ServiceGuide />
      </div>
    </StyledHomeRoute>
  );
}
const StyledHomeRoute = styled(AnimatedRoute)`
  padding-bottom: 100px;
  .home-action {
    display: flex;
    justify-content: center;
    margin: 0 var(--side-margin) 30px;
    .learn-more-button-2 {
      color: var(--white);
      border: 1px solid var(--secondary);
      background: var(--secondary);
      &:hover {
        border: 1px solid var(--primary);
        background: var(--primary);
      }
    }
  }
  .home-anniversary-logo {
    display: none;
    width: 50%;
    margin: 10px var(--side-margin) 0;
  }
  .home-header {
    font-size: 3em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
    text-align: center;
  }
  .home-header-2 {
    font-size: 2.7em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
  }
  .home-info-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 100px 20px 0;
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .info-banner-right {
    padding: 30px 0;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .anniversary-logo {
      width: 80%;
      max-width: 400px;
    }
  }
  .learn-more-button-1 {
    color: var(--white);
    border: 1px solid var(--white-opaque);
    &:hover {
      color: var(--secondary);
      border: 1px solid var(--secondary);
    }
  }
  .service-guide {
    margin: 20px var(--side-margin) 10px;
  }
  .weather-link {
    position: absolute;
    svg {
      fill: var(--secondary);
      transition: all 0.2s;
    }
    &:hover {
      svg {
        fill: var(--quaternary);
      }
    }
  }
  @media (max-width: 600px) {
    .home-info-section {
      grid-template-columns: repeat(2, 1fr);
      padding: 100px var(--side-margin);
    }
  }
  @media (max-width: ${({ theme }): number => theme.mobileWidth}px) {
    .home-anniversary-logo {
      display: block;
    }
    .home-header {
      font-size: 2em;
      margin: 20px;
    }
    .home-header-2 {
      font-size: 1.6em;
      margin: 20px 20px 10px;
    }
    .home-info-section {
      grid-template-columns: 1fr;
      padding: 20px;
    }
    .info-banner-right {
      display: none;
    }
  }
`;
export default HomeRoute;
