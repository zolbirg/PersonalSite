import classes from './card.module.css'
import Button from "../button/Button.jsx";
import Modal from "../Modal/Modal.jsx";
import { useState } from "react";

export default function Card({ text, cardId ,contentType,title}) {
 const [modalActive , setModalActive] = useState(false);
 

  return (
    <>
      <div className={classes.card}>
        <div className={classes.card__logo}>
          <h2 className={classes.card__title}>{cardId}</h2>
        </div>
        <div className={classes.card__body}>
          <div>
            <h2>{title}</h2>
            <p className={classes.card__text}>{text}</p>
          </div>
          <div >
          <Button onClick={()=> setModalActive(true)} >PUKENDORF</Button>

          <Modal  active={modalActive} setActive={setModalActive} >
            <div className='modal__block'>
            <ul>
            
            <li>{contentType [4]}</li>
            
            </ul>
            </div>
            <div>
            <Button onClick={()=> setModalActive(!modalActive)} >close</Button>
            </div>
          </Modal>
           
          </div>

        </div>
      </div>
    </>
  );
}
4