import styled from 'styled-components';

export const StyledInfoCard = styled.div`
	display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
	.info-card-body {
		flex: 1 1 auto;
    border-bottom: 1px solid ${({theme}) => theme.colorSecondary};
    border-left: 1px solid ${({theme}) => theme.colorSecondary};
    border-right: 1px solid ${({theme}) => theme.colorSecondary};
    transition: all 0.2s;
    .info-card-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      padding: 25px 0 5px;
      svg {
        fill: ${({theme}) => theme.colorSecondary};
        transition: all 0.2s;
      }
    }
    .info-card-message {
			font-weight: bold;
			color: ${({theme}) => theme.colorPrimary};
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
    color: ${({theme}) => theme.colorWhite};
    text-transform: uppercase;
    padding: 10px 10px 7px;
    text-align: center;
    background-color: ${({theme}) => theme.colorSecondary};
    transition: opacity 0.2s;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
  }
  
  &:hover {
    box-shadow: 0 0 20px ${({theme}) => theme.colorSecondary};
    background-color: ${({theme}) => theme.colorWhite};
    .info-card-header {
      background-color: ${({theme}) => theme.colorPrimary};
    }
		.info-card-body {
      border-bottom: 1px solid ${({theme}) => theme.colorPrimary};
      border-left: 1px solid ${({theme}) => theme.colorPrimary};
      border-right: 1px solid ${({theme}) => theme.colorPrimary};
      .info-card-icon {
        svg {
          fill: ${({theme}) => theme.colorPrimary};
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
