import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledQuickListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;
  .icon {
    display: flex;
    justify-content: center;
    height: 70px;
    svg {
      fill: var(--secondary);
      transition: all 0.2s;
    }
  }
  .title {
    font-size: 1em;
    font-weight: 700;
    color: var(--secondary);
    text-transform: uppercase;
    padding: 2px 10px;
    text-align: center;
    transition: color 0.2s;
  }
  &:hover {
    .icon {
      svg {
        fill: var(--primary);
      }
    }
    .title {
      color: var(--primary);
    }
  }
`;
export default StyledQuickListItem;
