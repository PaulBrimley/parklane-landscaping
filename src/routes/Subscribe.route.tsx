import { ComponentProps, useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

/** stores **/
import { images } from '../stores/Img.store';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';
import { useAppSelector } from '../hooks/useStore.hook';
import { useModal } from '../components/contexts/modal.context';

/** components **/
import AnimatedRoute from '../components/atoms/AnimatedRoute';
import Button from '../components/atoms/Button';
import InfoBanner from '../components/molecules/InfoBanner';
import InfoBannerLeft from '../components/molecules/InfoBannerLeft';
import PageDivider1 from '../components/atoms/PageDivider1';
import PageDivider2 from '../components/atoms/PageDivider2';
import StyledInfoBannerMessage from '../components/styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/styled/StyledInfoBodyMessage';
import SubscribeForm from '../components/molecules/SubscribeForm';
import { CloseCircle } from 'styled-icons/evaicons-solid';

/** images **/
const { imgGuyPlanting1, imgNewsLetter1, imgNewsLetter2, imgNewsLetter3, imgNewsLetter4, imgNewsLetter5, imgNewsLetter6, imgNewsLetter7 } = images;

interface ISubscribeRoute extends ComponentProps<any> {}
function SubscribeRoute({ ...otherProps }: ISubscribeRoute) {
  const { width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });
  const { setModalContent, setModalOpen } = useModal();
  const [selectedNewsLetter, setSelectedNewsLetter] = useState<string | null>(null);

  function calcBackgroundPosition() {
    let offset = 30;
    if (width < 900) offset = 45;
    if (width < 800) offset = 50;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '140%';
    if (width < 700) size = '160%';
    if (width < 600) size = '200%';
    return size;
  }
  function handleOpenModal() {
    setModalContent(<SubscribeForm />);
    setModalOpen(true);
  }

  return (
    <StyledSubscribeRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgGuyPlanting1})`,
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
                    THE <span className="isBold">HOA</span>
                  </div>
                  <div className="isBold">LANDSCAPE</div>
                  <div>TIPS AND INFO</div>
                </div>
                <div className="hr" />
                <div className="message">
                  <div>The beauty of maintaining HOA</div>
                  <div>communities is in the details.</div>
                </div>
              </StyledInfoBannerMessage>
            }
          />
        }
      />

      <PageDivider1 />

      <br />

      <div className="subscribe-now-header">Learn more about HOA landscape infrastructures!</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        Parklane Landscaping stays abreast of the latest information that effects our industry and most importantly the HOA communities we serve. When we come across pertinent information, we like to share it via our free subscription email. Stay informed by subscribing today! Click the button below.
      </StyledInfoBodyMessage>

      <br />
      <br />

      <div className="receive-emails">To receive e-mails with tips and information for your HOA</div>

      <PageDivider2 />

      <div className="subscribe-now-action">
        <Button classes="subscribe-now-button" height="30px" width="150px" fontSize="1.5em" onClick={handleOpenModal}>
          Subscribe Now
        </Button>
      </div>

      <div className="news-letter-container">
        <div className="news-letters">
          <div>
            <img src={imgNewsLetter1} alt="news letter 1" onClick={() => setSelectedNewsLetter(imgNewsLetter1)} />
          </div>
          <div>
            <img src={imgNewsLetter2} alt="news letter 2" onClick={() => setSelectedNewsLetter(imgNewsLetter2)} />
          </div>
          <div>
            <img src={imgNewsLetter3} alt="news letter 3" onClick={() => setSelectedNewsLetter(imgNewsLetter3)} />
          </div>
          <div>
            <img src={imgNewsLetter7} alt="news letter 7" onClick={() => setSelectedNewsLetter(imgNewsLetter7)} />
          </div>
          <div>
            <img src={imgNewsLetter5} alt="news letter 5" onClick={() => setSelectedNewsLetter(imgNewsLetter5)} />
          </div>
          <div>
            <img src={imgNewsLetter6} alt="news letter 6" onClick={() => setSelectedNewsLetter(imgNewsLetter6)}/>
          </div>
        </div>
        <div className={classNames('selected-news-letter', { active: !!selectedNewsLetter })}>
          <CloseCircle className="close-button" onClick={() => setSelectedNewsLetter(null)}/>
          {selectedNewsLetter && <img src={selectedNewsLetter} alt="selected news letter"/>}
        </div>
      </div>
    </StyledSubscribeRoute>
  );
}
const StyledSubscribeRoute = styled(AnimatedRoute)`
  padding-bottom: 100px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .news-letter-container {
    position: relative;
    .news-letters {
      margin: 40px var(--side-margin);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      div {
        img {
          width: 100%;
          cursor: pointer;
          box-shadow: 0 0 3px var(--transparent);
          &:hover {
            box-shadow: 0 0 3px var(--grey-medium);
          }
        }
      }
    }
    .selected-news-letter {
      padding: 25px;
      background-color: var(--white);
      box-shadow: 0 0 5px var(--grey-medium);
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      opacity: 0;
      pointer-events: none;
      transition: all 0.2s;
      &.active {
        opacity: 1;
        width: 50%;
        pointer-events: unset;
      }
      img {
        width: 100%;
      }
      .close-button {
        position: absolute;
        top: 5px;
        right: 5px;
        color: var(--grey-medium-light);
        height: 20px;
        width: 20px;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          color: var(--primary);
        }
      }
    }
  }
  .receive-emails {
    margin: 0 var(--side-margin);
    font-size: 1.9em;
    font-weight: 600;
    color: var(--primary);
    text-align: center;
    text-transform: uppercase;
  }
  .subscribe-now-header {
    font-size: 4em;
    margin: 50px var(--side-margin) 10px;
    font-weight: 700;
    color: var(--primary);
    text-transform: uppercase;
    text-align: center;
  }
  .subscribe-now-action {
    display: flex;
    justify-content: center;
    margin: 20px var(--side-margin) 0;
    .subscribe-now-button {
      color: var(--white);
      border: 1px solid var(--secondary);
      background: var(--secondary);
      &:hover {
        border: 1px solid var(--primary);
        background: var(--primary);
      }
    }
  }
  @media (max-width: 800px) {
    .subscribe-now-header {
      font-size: 4.5em;
    }
  }
  @media (max-width: 700px) {
    .subscribe-now-header {
      font-size: 4em;
    }
  }
  @media (max-width: 600px) {
    .subscribe-now-header {
      font-size: 3em;
    }
  }
  @media (max-width: 500px) {
    .subscribe-now-header {
      font-size: 2em;
      text-align: left;
    }
  }
`;
export default SubscribeRoute;
