import classes from './card.module.scss';
import Button from '../button/Button.jsx';
import Modal from '../Modal/Modal.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ text, cardId, contentType, title, linkTo, backgroundImage }) {
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (linkTo) {
      navigate(linkTo);
    }
  };

  const handleDetailsClick = (event) => {
    event.stopPropagation();

    if (linkTo) {
      navigate(linkTo);
      return;
    }

    setModalActive(true);
  };

  const handleCloseModal = () => {
    setModalActive(false);
  };

  return (
    <>
      <div
        className={classes.card}
        onClick={handleCardClick}
        role={linkTo ? 'button' : undefined}
        tabIndex={linkTo ? 0 : undefined}
      >
        <div
          className={classes.card__logo}
          style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
        >
          <div className={classes.card__titleWrap}>
            <h2 className={classes.card__title}>{cardId}</h2>
          </div>
        </div>
        <div className={classes.card__body}>
          <div>
            <p className={classes.card__text}>{text}</p>
          </div>
          <div className={classes.card__actions}>
            <Button onClick={handleDetailsClick}>
              {linkTo ? 'Подробнее' : 'Show more'}
            </Button>

            {!linkTo && (
              <Modal active={modalActive} setActive={setModalActive}>
                <div className="modal__block">
                  <ul>
                    {contentType?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Button onClick={handleCloseModal}>close</Button>
                </div>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
