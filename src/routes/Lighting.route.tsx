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
const { imgLighting1, imgLighting2, imgLighting3 } = images;

interface ILightingRoute extends ComponentProps<any> {}
function LightingRoute({ ...otherProps }: ILightingRoute) {
  const { width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 15;
    if (width < 800) offset = 30;
    if (width < 700) offset = 40;
    if (width < 400) offset = 50;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '100%';
    if (width < 800) size = '130%';
    if (width < 700) size = '150%';
    if (width < 600) size = '175%';
    return size;
  }

  return (
    <StyledLightingRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgLighting1})`,
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
                    <SVGIcon height="100%" width="20px" type={SVGTypes.LIGHT_BULB} style={{ fill: 'white', marginRight: '7px' }} />
                    <span className="isBold">HOA</span>
                  </div>
                  <div>LANDSCAPE LIGHTING</div>
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

      <div className="lighting-header uppercase">HOA Landscape Lighting</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        Your community is your pride and joy. Once Parklane has built your new monument, planted flower beds, trees and added beautiful landscape features, you’ll want to highlight them. Adding landscape and garden lighting is a great way to accentuate your community’s best features and make your HOA a safer place. A great lighting scheme helps raise the value of a community. Consider adding outdoor lighting for your next landscaping project to make your HOA warm and inviting.
      </StyledInfoBodyMessage>

      <br />
      <br />

      <div className="lighting-info-subsection">
        <div className="subsection-images">
          <img src={imgLighting2} alt="lighting 2" />
          <img src={imgLighting3} alt="lighting 3" />
        </div>
        <div className="subsection-info">
          <StyledInfoBodyMessage fontSize="1.6em" margin="0 0 10px 0">
            If you are looking to start a new HOA community landscape project, consider the value of adding outdoor lighting. A well-lit neighborhood increases curb appeal by offering a warm and inviting place for your family and friends. Not only does outdoor lighting extend your living space, it can offer huge safety and security benefits. Highlight your HOA’s beautiful lawns, gardens, and other landscaping features with outdoor lighting!
          </StyledInfoBodyMessage>
          <StyledInfoBodyMessage fontSize="1.6em" margin="0">
            For more information on HOA landscape lighting or tips on how you can enhance your landscape community at night, contact us today! Parklane Landscaping will provide you with a free estimate on your next project.
          </StyledInfoBodyMessage>
        </div>
      </div>
    </StyledLightingRoute>
  );
}
const StyledLightingRoute = styled(AnimatedRoute)`
  padding-bottom: 90px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .lighting-header {
    font-size: 3em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
    text-align: center;
  }
  .lighting-info-subsection {
    display: flex;
    margin: 10px var(--side-margin) 0;
    .subsection-images {
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 49% 0 0;
      img {
        margin-bottom: 10px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        height: 170px;
      }
    }
    .subsection-info {
      flex: 49% 0 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .lighting-info-subsection {
      flex-direction: column;
      .subsection-images {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
`;
export default LightingRoute;
