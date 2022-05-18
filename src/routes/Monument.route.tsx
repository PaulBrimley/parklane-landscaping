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
const { imgMonument1, imgMonument4, imgMonument5, imgMonument10 } = images;

interface IMonumentRoute extends ComponentProps<any> {}
function MonumentRoute({ ...otherProps }: IMonumentRoute) {
  const { companyInfo, width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });

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
        From logo design, to architectural rendering, to brick and mortar, Parklane has the capability to create the monument of your HOA’s dreams. We know how important entryways are to every HOA community. A monument sets the stage for the rest of the property. They can be various architectural styles and designs. Landscape of course plays a huge part in the final monument project. Parklane has had the privilege of creating and revitalizing many in and around the San Antonio area. Whether it is designing from scratch or refurbishing portions of them, our end goal is to add to their overall appeal and value.
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
