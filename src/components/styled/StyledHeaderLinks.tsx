import styled from 'styled-components';

const StyledHeaderLinks = styled.div`
  flex: 1 1 auto;
  display: flex;
  .link-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    .link-inner {
      padding: 0 4px;
      position: relative;
      border-bottom: 1px solid var(--white-opaque);
      flex: 1;
      &:after {
        position: absolute;
        border-bottom: 4px solid var(--white-opaque);
        content: '';
        display: block;
        margin-left: 49.9%;
        top: 105%;
        bottom: auto;
        left: 0;
        width: 1px;
      }
      .link {
        display: block;
        text-align: center;
        color: inherit;
        text-decoration: none;
        text-transform: uppercase;
        transform: translateY(150%);
        &:hover {
          font-weight: 500;
        }
      }
      &.active {
        &:after {
          top: auto;
          bottom: -1px;
        }
        .link {
          font-weight: 500;
          transform: translateY(-20%);
        }
      }
    }
  }
`;
export default StyledHeaderLinks;
