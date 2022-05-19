import {ComponentProps} from 'react';
import styled from 'styled-components';

/** stores **/
import {images} from '../stores/Img.store';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';
import {useAppSelector} from '../hooks/useStore.hook';

/** components **/
import AnimatedRoute from '../components/atoms/AnimatedRoute';
import InfoBanner from '../components/molecules/InfoBanner';
import InfoBannerLeft from '../components/molecules/InfoBannerLeft';
import PageDivider1 from '../components/atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/styled/StyledInfoBodyMessage';
import SVGIcon, {SVGTypes} from '../components/atoms/SVGIcon';

/** images **/
const { imgLeaves,
  imgTrees1,
  imgTreeTrimming } = images;

interface ITrimmingRoute extends ComponentProps<any> {}
function TrimmingRoute({ ...otherProps }: ITrimmingRoute) {
  const { width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 60;
    if (width < 800) offset = 100;
    if (width < 700) offset = 100;
    if (width < 400) offset = 40;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '115%';
    if (width < 800) size = '125%';
    if (width < 700) size = '155%';
    if (width < 600) size = '175%';
    if (width < 400) size = '185%';
    return size;
  }

  return (
    <StyledTrimmingRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgLeaves})`,
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
                    <SVGIcon height="100%" width="47px" type={SVGTypes.TREES} style={{fill: 'white', marginRight: '7px'}}/>
                    <span className="isBold">HOA</span>
                  </div>
                  <div>HOA TREE PRUNING</div>
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

      <div className="trimming-header uppercase">HOA Tree Pruning</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        Nothing transforms an outdoor space like beautifully trimmed trees. Through proper pruning techniques your trees add value to your homes. Not only do they provide shade, but they make your community healthier, add to its safety and aesthetic. Parklane tree trimming professionals have the skills to help your community enjoy the benefits of beautifully maintained trees.
      </StyledInfoBodyMessage>

      <br/>
      <br/>

      <div className="trimming-info-subsection">
        <div className="subsection-images">
          <img src={imgTrees1} alt="trees 1" />
          <img src={imgTreeTrimming} alt="tree trimming" />
        </div>
        <div className="subsection-info">
          <StyledInfoBodyMessage fontSize="1.6em" margin="0">
            While the concept of tree pruning seems like a simple DIY project or something you can hand to any landscaper, improper pruning can destroy your landscape. When a tree’s health is at risk, they can face decay, instability, disease and a shorter life span. Most mature trees require trimming at least every 3 years. Some may need to be trimmed more often if they grow quicker or are located near power lines, homes and other obstructions. The best time to trim trees is in the late fall or early spring, just before the tree begins to leaf out again. For more information on tree trimming or if your community has trees that require attention, please contact us today! Parklane will provide you with a free estimate on your next project.
          </StyledInfoBodyMessage>
        </div>
      </div>
    </StyledTrimmingRoute>
  );
}
const StyledTrimmingRoute = styled(AnimatedRoute)`
  padding-bottom: 90px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .trimming-header {
    font-size: 3em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
    text-align: center;
  }
  .trimming-info-subsection {
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
        height: 170px;
      }
    }
    .subsection-info {
      flex: 49% 0 0;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    .trimming-info-subsection {
      flex-direction: column;
      .subsection-images {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
`;
export default TrimmingRoute;
