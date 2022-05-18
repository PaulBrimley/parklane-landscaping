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
const { imgLawnMower1, imgLawnMower2 } = images;

interface IMaintenanceRoute extends ComponentProps<any> {}
function MaintenanceRoute({ ...otherProps }: IMaintenanceRoute) {
  const { companyInfo, width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 40;
    if (width < 800) offset = 20;
    if (width < 700) offset = 30;
    if (width < 400) offset = 40;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '150%';
    if (width < 900) size = '170%';
    if (width < 800) size = '190%';
    if (width < 600) size = '210%';
    if (width < 500) size = '200%';
    return size;
  }

  return (
    <StyledMaintenanceRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgLawnMower1})`,
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
                    <SVGIcon height="100%" width="50px" type={SVGTypes.LAWN_MOWER} style={{ fill: 'white', marginRight: '7px' }} />
                    <span className="isBold">HOA</span>
                  </div>
                  <div>MAINTENANCE</div>
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

      <div className="maintenance-header uppercase">HOA Maintenance</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        <p>When Parklane forges a maintenance contract with an HOA community, our goal is to deliver the highest quality service. Our team comes together to make sure we nurture not only a community’s landscape, but our relationship with the HOA board and the property management company. Communication between all three entities is vital to ensure efficient response times and quality control. In case of emergencies or urgent care notices, our teams are always available 24/7. Our licensed irrigators are on call to address broken pipes, misfiring sprinkler heads and any other irrigation related issues that occur outside of normal business hours.</p>
        <p>Find out how you can get a customized maintenance plan for your HOA community by contacting Parklane Landscaping today.</p>
      </StyledInfoBodyMessage>

      <div className="contact-info">
        <span className="phone">{companyInfo.phone}</span>
        <span className="email">{companyInfo.email}</span>
      </div>

      <br />
      <br />

      <div className="maintenance-info-images">
        <img src={imgLawnMower2} alt="Home" />
      </div>
    </StyledMaintenanceRoute>
  );
}
const StyledMaintenanceRoute = styled(AnimatedRoute)`
  padding-bottom: 100px;
  .contact-info {
    display: flex;
    justify-content: center;
    color: var(--primary);
    margin: 30px var(--side-margin);
    text-align: center;
    font-size: 1.4em;
    font-weight: 300;
    text-transform: uppercase;
    .email {
      padding-left: 5px;
    }
    .phone {
      white-space: nowrap;
      padding-right: 5px;
      border-right: 1px solid var(--primary);
    }
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .maintenance-header {
    font-size: 3em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
    text-align: center;
  }
  .maintenance-info-images {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 0 var(--side-margin) 0;
    img {
      flex: 0 1 auto;
      width: 100%;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .contact-info {
      flex-direction: column;
      .phone {
        margin-bottom: 5px;
        border: none;
      }
    }
  }
`;
export default MaintenanceRoute;
