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
import PageDivider1 from '../components/atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/styled/StyledInfoBodyMessage';
import SVGIcon, { SVGTypes } from '../components/atoms/SVGIcon';

/** images **/
const { imgIrrigationSeal, imgSprinklers1, imgSprinklers2 } = images;

interface IIrrigationRoute extends ComponentProps<any> {}
function IrrigationRoute({ ...otherProps }: IIrrigationRoute) {
  const { width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 40;
    if (width < 800) offset = 30;
    if (width < 700) offset = 40;
    if (width < 400) offset = 50;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '110%';
    if (width < 800) size = '130%';
    if (width < 700) size = '150%';
    if (width < 600) size = '175%';
    return size;
  }

  return (
    <StyledIrrigationRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgSprinklers1})`,
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
                    <SVGIcon height="100%" width="43px" type={SVGTypes.HOSE} style={{ fill: 'white', marginRight: '7px' }} />
                    <span className="isBold">HOA</span>
                  </div>
                  <div>IRRIGATION</div>
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

      <div className="irrigation-header uppercase">Irrigation Repairs & Installations</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        During our ten years in business, Parklane has recognized the need for licensed irrigators in the HOA industry. After being asked if we could do SAWS audits or repair an irrigation system we decided to invest in educating our own team members in irrigation. As a result, Parklane now has three licensed irrigators who regularly perform monthly audits on all of our HOA properties. When the need arises, our licensed irrigators can repair or even install an entire irrigation system.
      </StyledInfoBodyMessage>

      <br />
      <br />

      <div className="irrigation-info-images">
        <img src={imgSprinklers2} alt="sprinklers" />
      </div>

      <div className="irrigation-info-seal">
        <img src={imgIrrigationSeal} alt="irrigation seal" />
        <StyledInfoBodyMessage fontSize="1.6em" margin="0 0 0 15px">
          Does your irrigator have this seal? Parklane Landscaping does. In fact, we have a team of licensed irrigators that all carry their irrigation license with this official seal. It is a requirement in the state of Texas that all licensed irrigators doing audits or working on irrigation systems have their license with them. If you need a licensed irrigator call Parklane Landscaping. Our team has the Texas seal of approval!
        </StyledInfoBodyMessage>
      </div>
    </StyledIrrigationRoute>
  );
}
const StyledIrrigationRoute = styled(AnimatedRoute)`
  padding-bottom: 80px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .irrigation-header {
    font-size: 3em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
    text-align: center;
  }
  .irrigation-info-images {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 20px var(--side-margin);
    img {
      flex: 1 1 auto;
      width: 100%;
    }
  }
  .irrigation-info-seal {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px var(--side-margin) 0;
    img {
      margin-left: -10px;
      width: 210px;
      object-fit: contain;
      object-position: center;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .irrigation-info-seal {
      flex-direction: column;
      img {
        margin-left: 0;
      }
    }
  }
`;
export default IrrigationRoute;
