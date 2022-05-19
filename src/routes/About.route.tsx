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
import InfoBannerRight from '../components/molecules/InfoBannerRight';
import PageDivider1 from '../components/atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/styled/StyledInfoBodyMessage';

/** images **/
const { imgCarnival, imgMonument6, imgParklaneFamily, imgPictureFrame } = images;

interface IAboutRouteProps extends ComponentProps<any> {}
function AboutRoute({ ...otherProps }: ComponentProps<any>) {
  const { isMobile, width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundSize() {
    let size = '700px';
    if (width < 700) size = '750px';
    return size;
  }

  return (
    <StyledAboutRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgMonument6})`,
          backgroundPosition: `left calc(-20px + ${offset.y}px)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: calcBackgroundSize()
        }}
        config={{
          height: '350px',
          rightGradientCover: isMobile ? null : 'linear-gradient(120deg, transparent 0%, transparent 50%, white 50%, white 100%)'
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
                  <div>Serving San Antonio's HOA</div>
                  <div>communities for 10 years!</div>
                </div>
              </StyledInfoBannerMessage>
            }
          />
        }
        slotRight={
          <InfoBannerRight className="info-banner-right">
            <img className="picture-frame" src={imgPictureFrame} alt="picture frame" />
          </InfoBannerRight>
        }
      />

      <PageDivider1 />

      <br />
      <br />

      <div className="about-header uppercase">About</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        Parklane Landscaping Corporation, founded in 2011, was developed to serve the burgeoning HOA consumer market segment in San Antonio. As there were no specialized landscapers serving these HOA communities, Parklane became one of the first to understand the challenges facing new and older HOA properties.
      </StyledInfoBodyMessage>

      <StyledInfoBodyMessage fontSize="1.6em" margin="15px var(--side-margin)">
        Parklane Landscaping currently serves HOA communities in the greater San Antonio area through custom contracts that include general grounds maintenance, irrigation repair & installation, landscape design, entryway and parkway revitalization, monument design and installation, tree pruning, herbicide and fertilization management, drainage mitigation, easement and fence line shredding, monument and landscape lighting repair, and much more. Check out our service page for more services.
      </StyledInfoBodyMessage>

      <StyledInfoBodyMessage fontSize="1.6em" margin="15px var(--side-margin)">
        Now with over a decade of experience maintaining and enhancing HOA common area landscape infrastructure, Parklane works directly with HOA boards, property management companies and developers in delivering best practices care; nurturing HOA landscapes that bring homeowners peace of mind as they drive in and out of their communities; landscapes that sustain curb appeal and impress those who visit the community; landscapes that provide the best marketability and drive sales for developing communities; and in the end, landscapes that maintain or improve property values over time. Parklane Landscaping understands that its role transcends that of general landscape care, it understands that it serves as a marketing partner in enhancing the value of an HOA in many ways.
      </StyledInfoBodyMessage>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        Parklane Landscaping also participates in community organizations that enhance its understanding of local ordinances, changing trends and innovative solutions as they relate to HOA communities. Parklane landscaping is a participating member of the Community Association Institute San Antonio (CAISA), the San Antonio Irrigation Association (SAIA), the International Society of Arborists San Antonio Chapter (ISASA), Texas Nursery and Landscape Association (TNLA), and is a verified vendor in VendorSmart, an online platform connecting community managers with certified vendors. Parklane shares information garnered from its affiliation with these organizations via free seminars to HOA committees and property management companies. If you would like tap into these free seminars feel free to email us at info@parklanelandscaping.com.
      </StyledInfoBodyMessage>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="about-header uppercase">Parklane Works With You, You and You!</div>

      <div className="about-header-2 uppercase">Board Members</div>
      <ul className="about-list">
        <li>Parklane understands the different facets of an HOA’s landscape infrastructure and helps HOA boards understand the complexity and scale of the HOA’s landscape footprint.</li>
        <li>Parklane recognizes the value of maintaining an HOA’s landscape investment and cares for it in ways that sustain a community’s appeal over time.</li>
        <li>Parklane is responsive to the immediacy of HOA emergencies, whether it be an irrigation problem, a fallen tree or other urgent matter needing quick attention.</li>
        <li>Parklane is easy to work with, on time and on budget.</li>
        <li>Parklane is easy to work with, budget-conscious and timely.</li>
      </ul>

      <div className="about-header-2 uppercase">Property Developers</div>
      <ul className="about-list">
        <li>Parklane Landscaping serves as a developer’s marketing partner while an HOA is developing by assuring quality landscaping and impressive curb appeal.</li>
        <li>Parklane is responsive to the immediacy of homeowner issues and resolves them quickly.</li>
        <li>Parklane Landscaping has the ability to scale its services as communities build out.</li>
        <li>Parklane Landscaping is design-oriented but maintenance driven and can quickly edit landscaping to reduce landscaping costs over the short-term and long term.</li>
        <li>Parklane is consistent, on budget and timely.</li>
      </ul>

      <div className="about-header-2 uppercase">Property Managers</div>
      <ul className="about-list">
        <li>Parklane Landscaping is a full service firm; so all you need is one service call for any your HOA common area property needs.</li>
        <li>Parklane attends HOA Board meetings, Landscape Committee meetings and annual meetings to support its unique understanding of an HOA’s landscape infrastructure and helps explain this complexity to board members and homeowners.</li>
        <li>Parklane assigns a dedicated account manager to each property for direct communications and rapid response times.</li>
        <li>Parklane Landscaping is happy to present key HOA educational presentations.</li>
        <li>Parklane is easy to work with, facilitating transparent communication between the board and property manager, is highly-skilled in project management, budget- conscious and timely.</li>
      </ul>

      {/*<div className="about-info-images">
          <img src={imgMonument6} alt="Estates at Bridgewood" />
          <img src={imgParklaneFamily} alt="Parklane family" />
          <img src={imgCarnival} alt="Carnival" />
        </div>*/}
    </StyledAboutRoute>
  );
}
const StyledAboutRoute = styled(AnimatedRoute)`
  padding-bottom: 90px;
  .about-header {
    font-size: 3em;
    font-weight: 700;
    color: var(--primary);
    margin: 20px var(--side-margin) 10px;
    text-align: center;
  }
  .about-header-2 {
    font-size: 1.7em;
    font-weight: 700;
    color: var(--secondary);
    margin: 30px var(--side-margin) 10px;
  }
  .about-info-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 5px var(--side-margin) 10px;
    img {
      flex: 0 1 auto;
      width: 100%;
      max-width: 300px;
    }
  }
  .about-list {
    padding-left: 17px;
    margin: 10px var(--side-margin);
    font-size: 1.5em;
    color: var(--secondary);
    font-weight: 300;
    line-height: 1.7em;
    li {
      padding-bottom: 10px;
    }
  }
  .tree-stripe {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(120deg, transparent 0, transparent 30%, rgba(255, 0, 40, 0.85) 30%, rgba(255, 0, 40, 0.85) 70%, transparent 70%, transparent 100%);
    .logo {
      max-width: 150px;
      margin: 10px 0 15px;
    }
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .info-banner-right {
    padding: 30px 0;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .picture-frame {
      width: 80%;
    }
  }
  @media (max-width: ${({ theme }): number => theme.mobileWidth}px) {
    .about-header {
      font-size: 2em;
      margin: 20px;
    }
    .about-header-2 {
      font-size: 1.6em;
      margin: 20px 20px 10px;
    }
    .about-info-images {
      grid-template-columns: 1fr;
      margin: 5px var(--side-margin) 10px;
      img {
        max-width: none;
      }
    }
    .info-banner-right {
      display: none;
    }
  }
`;
export default AboutRoute;
