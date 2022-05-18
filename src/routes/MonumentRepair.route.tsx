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
const { imgMonument2, imgMonument3, imgMonument7, imgMonument8, imgMonument9 } = images;

interface IMonumentRepairRoute extends ComponentProps<any> {}
function MonumentRepairRoute({ ...otherProps }: IMonumentRepairRoute) {
  const { companyInfo, width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 60;
    // if (width < 800) offset = 70;
    if (width < 700) offset = 40;
    if (width < 400) offset = 50;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '100%';
    if (width < 800) size = '110%';
    if (width < 700) size = '120%';
    if (width < 600) size = '130%';
    return size;
  }

  return (
    <StyledMonumentRepairRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgMonument9})`,
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
                    <SVGIcon height="100%" width="63px" type={SVGTypes.MASONRY} style={{ fill: 'white', marginRight: '7px' }} />
                    <span className="isBold">HOA</span>
                  </div>
                  <div>MASONRY</div>
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

      <div className="monument-header uppercase">HOA Masonry and Monument Repair</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        Monuments are the first thing people see when they pass or enter an HOA community. It is important that they have long lasting appeal. However, sometimes things happen. Once in a while Parklane receives requests to rebuild an entryway monument due to erosion or a minor car accident. For this reason, Parklane has a very skilled in-house masonry team.
      </StyledInfoBodyMessage>

      <br />
      <br />

      <div className="monument-info-subsection">
        <div className="subsection-images">
          <img src={imgMonument2} alt="monument 2" />
          <img src={imgMonument3} alt="monument 3" />
        </div>
        <div className="subsection-info">
          <StyledInfoBodyMessage fontSize="1.6em" margin="0">
            Our masonry team has over ten years of experience. They know that every detail matters. Whether you are replacing a column or building an entirely new monument, Parklane goes the extra mile to make sure our work exceeds expectations. Every step of each project is closely overseen to guarantee success. Starting with the original design, until the last brick is placed, Parklane is there to make sure no detail is overlooked.
          </StyledInfoBodyMessage>
        </div>
      </div>

      <div className="contact-info">For estimates call {companyInfo.phone}</div>

      <div className="monument-info-subsection">
        <div className="subsection-images">
          <img src={imgMonument8} alt="monument 8" />
        </div>
        <div className="subsection-info">
          <StyledInfoBodyMessage fontSize="1.6em" fontStyle="italic" margin="0">
            This is an outside monument wall.. The overall structure had become old and eventually crumbled and fell apart. Parklane was asked to repair and match the structure with new more stable materials. This can be a difficult task when only a part of a structure needs replacing. New stones or materials need to be used to match the old ones. When an entire monument needs rebuilding materials used need to match the former style and architectural details. As you can see Parklane’s masonry team did a great job far exceeding the customer’s expectations.
          </StyledInfoBodyMessage>
        </div>
      </div>
    </StyledMonumentRepairRoute>
  );
}
const StyledMonumentRepairRoute = styled(AnimatedRoute)`
  padding-bottom: 100px;
  .contact-info {
    color: var(--primary);
    margin: 30px var(--side-margin);
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
  .monument-header {
    font-size: 3em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
    text-align: center;
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
export default MonumentRepairRoute;
