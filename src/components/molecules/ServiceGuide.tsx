import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/** routes **/
import { Paths as ReactPaths } from '../../routes/Routes';

/** components **/
import { StyledInfoCardLink } from '../styled/StyledInfoCard';
import SVGIcon, { SVGTypes } from '../atoms/SVGIcon';

interface IServiceGuide extends ComponentProps<any> {
  className?: string;
  style?: Record<string, string>;
}
function ServiceGuide({ className, style }: IServiceGuide) {
  return (
    <StyledServiceGuide className={className} style={style}>
      <div className="service-header uppercase">Service Guide</div>
      <div className="services">
        <StyledInfoCardLink as={Link} to={ReactPaths.MAINTENANCE}>
          <div className="info-card-header">HOA Maintenance</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="70px" width="70px" type={SVGTypes.LAWN_MOWER} />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={ReactPaths.IRRIGATION}>
          <div className="info-card-header">HOA Licensed Irrigation</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="70px" width="70px" type={SVGTypes.HOSE} />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={ReactPaths.LANDSCAPE}>
          <div className="info-card-header">HOA Landscaping</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="75px" width="75px" type={SVGTypes.LANDSCAPE} />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={ReactPaths.MONUMENT}>
          <div className="info-card-header">HOA Monuments</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="80px" width="80px" type={SVGTypes.MONUMENT} />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={ReactPaths.MONUMENT_REPAIR}>
          <div className="info-card-header">HOA Masonry</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="70px" width="70px" type={SVGTypes.MASONRY} />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={ReactPaths.FENCE}>
          <div className="info-card-header">HOA Fence Installation</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="70px" width="70px" type={SVGTypes.FENCE} />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={ReactPaths.LIGHTING}>
          <div className="info-card-header">HOA Landscape Lighting</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="60px" width="60px" type={SVGTypes.LIGHT_BULB} style={{ marginTop: '7px' }} />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={ReactPaths.TRIMMING}>
          <div className="info-card-header">HOA Tree Pruning</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="80px" width="80px" type={SVGTypes.TREES} />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>
      </div>
    </StyledServiceGuide>
  );
}
const StyledServiceGuide = styled.div`
  .service-header {
    font-size: 3em;
    font-weight: 700;
    background-color: var(--primary);
    color: var(--tertiary);
    text-align: center;
    padding: 20px 10px 10px;
  }
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    grid-gap: 40px;
    padding-top: 40px;
  }
  @media screen and (max-width: 600px) {
    .services {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 500px) {
    .services {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default ServiceGuide;
