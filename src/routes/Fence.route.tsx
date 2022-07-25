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
const { imgFence1, imgFence2, imgFenceBroken, imgFenceRepair } = images;

interface IFenceRoute extends ComponentProps<any> {}
function FenceRoute({ ...otherProps }: IFenceRoute) {
  const { companyInfo, width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 20;
    if (width < 800) offset = 30;
    if (width < 700) offset = 40;
    if (width < 500) offset = 50;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '100%';
    if (width < 800) size = '110%';
    if (width < 700) size = '115%';
    if (width < 600) size = '135%';
    // if (width < 500) size = '130%';
    return size;
  }

  return (
    <StyledFenceRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgFence1})`,
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
                    <SVGIcon height="100%" width="45px" type={SVGTypes.FENCE} style={{ fill: 'white', marginRight: '7px' }} />
                    <span className="isBold">HOA</span>
                  </div>
                  <div>FENCE INSTALLATION</div>
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

      <div className="fence-header uppercase">HOA Fence Installation</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        Many HOAs, use either wooden or stone fences to delineate property lines. When one is torn down due to storm or a fallen tree or even an accidental car mishap, rebuilding the fence becomes priority one. Matching the exact materials, colors and quick reparation is our specialty, all the while making sure the community stays looking its best. That is why Parklane provides services that can repair or install wood or stone fences and/or walls.
      </StyledInfoBodyMessage>

      <br />
      <br />

      <div className="fence-info-subsection">
        <div className="subsection-images">
          <img src={imgFenceRepair} alt="fence repair" />
          <img src={imgFence2} alt="fence" />
        </div>
        <div className="subsection-info">
          <StyledInfoBodyMessage fontSize="1.6em" margin="0">
            If you ever have an emergency need to rebuild a fence do not hesitate to call Parklane. We have our staff on call 24/7 for our HOA communities. Whether a tree has fallen or irrigation pipes have burst, Parklane is there to help maintain our HOA communities looking their best.
          </StyledInfoBodyMessage>
          <StyledInfoBodyMessage fontSize="1.6em" margin="0 0 10px 0">
            Do you have an emergency that requires immediate attention? Don’t worry call Parklane Landscaping. Even if you are not a current client of ours, we will be happy to help your community.
          </StyledInfoBodyMessage>
          <StyledInfoBodyMessage fontSize="1.6em" margin="0">
            For emergency fence repairs & irrigation repairs contact Parklane Landscaping and we can be there within 24 hours to assess the damage.
          </StyledInfoBodyMessage>
          <StyledInfoBodyMessage fontSize="1.6em" margin="0">
            <div>{companyInfo.website}</div>
            <div>{companyInfo.email}</div>
            <div>{companyInfo.phone.split('-').join('.')}</div>
          </StyledInfoBodyMessage>
        </div>
      </div>
    </StyledFenceRoute>
  );
}
const StyledFenceRoute = styled(AnimatedRoute)`
  padding-bottom: 90px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .fence-header {
    font-size: 3em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
    text-align: center;
  }
  .fence-info-subsection {
    display: flex;
    margin: 10px var(--side-margin) 0;
    .subsection-images {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 49% 0 0;
      margin-right: 10px;
      img {
        margin-bottom: 10px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        max-height: 200px;
      }
    }
    .subsection-info {
      flex: 49% 0 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .fence-info-subsection {
      flex-direction: column;
      .subsection-images {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
`;
export default FenceRoute;
