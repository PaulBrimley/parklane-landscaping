import styled from 'styled-components';

import PageDivider2 from './PageDivider2';

function ServiceList() {
  const services = [
    'Specialists in HOA Common Areas',
    'General Ground Maintenance',
    'TCEQ Licensed Irrigation Auditing, Maintenance & Repair',
    'Annual SAWS Reporting',
    'Back Flow Assembly Testing & Reporting',
    'Winter Rye Seeding',
    'Landscape Design & Renovation',
    'Tree Pruning, Shaping & Installation',
    'Turf Grass Installation & Maintenance',
    'Mulch Installation',
    'Annuals & Perennials Installation',
    'Landscape & Entry Monument Lighting, Auditing & Repair',
    'Certified Kiddie Cushion Installation',
    'Monthly Reporting',
    'Organic Fertilization',
    'Stone Masonry Installation and Repair',
    'Wood Fence Installation and Repair',
    'Weed Control and Herbicide Management Programs',
    'Drainage, Easement, Field and Fence Line Shredding',
    'HOA Annual and Board Meeting Participation'
  ];
  return (
    <StyledServiceList>
      <div className="header">HOA Landscape Services</div>
      <PageDivider2 width="80%" margin="10px var(--side-margin) 30px" color="var(--white)" />
      <div className="list">
        <div className="side">
          {services.slice(0, Math.ceil(services.length / 2)).map((service, index) => <div key={index} className="item">{service}</div>)}
        </div>
        <div className="side">
          {services.slice(Math.ceil(services.length / 2)).map((service, index) => <div key={index} className="item">{service}</div>)}
        </div>
      </div>
    </StyledServiceList>
  );
}
const StyledServiceList = styled.div`
  background: var(--primary);
  padding: 10px 0 40px;
  .header {
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    text-align: center;
    margin: 10px var(--side-margin) 0;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 1.2em;
    font-weight: 300;
    margin: 0 var(--side-margin);
    color: var(--white);
    text-align: center;
    white-space: nowrap;
    .side {
      .item {
        margin-bottom: 15px;
      }
    }
  }
  @media (max-width: 800px) {
    .list {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: var(--mobile-width)px) {
    .list {
      margin: 0 20px 50px;
      white-space: normal;
    }
  }
`;
export default ServiceList;
