import styled from 'styled-components';

export const StyledInfoCard = styled.div`
	display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
	.info-card-body {
		flex: 1 1 auto;
    border-bottom: 1px solid var(--secondary);
    border-left: 1px solid var(--secondary);
    border-right: 1px solid var(--secondary);
    transition: all 0.2s;
    .info-card-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      padding: 25px 0 5px;
      svg {
        fill: var(--secondary);
        transition: all 0.2s;
      }
    }
    .info-card-message {
			font-weight: bold;
			color: var(--primary);
      text-align: center;
			text-transform: uppercase;
      padding: 10px 20px 15px;
      opacity: 0;
      transition: all 0.2s;
    }
	}
  .info-card-header {
    font-size: 0.9em;
    font-weight: 300;
    color: var(--white);
    text-transform: uppercase;
    padding: 10px 10px 7px;
    text-align: center;
    background-color: var(--secondary);
    transition: opacity 0.2s;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
  }
  
  &:hover {
    box-shadow: 0 0 20px var(--secondary);
    background-color: var(--white);
    .info-card-header {
      background-color: var(--primary);
    }
		.info-card-body {
      border-bottom: 1px solid var(--primary);
      border-left: 1px solid var(--primary);
      border-right: 1px solid var(--primary);
      .info-card-icon {
        svg {
          fill: var(--primary);
        }
      }
      .info-card-message {
        opacity: 1;
      }
		}
  }
`;
export const StyledInfoCardLink = styled(StyledInfoCard)`
  text-decoration: none;
`;
