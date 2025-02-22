import classes from "./modal.module.css";

export default function Modal({ active, setActive , children }) {
  return (
    
       <div className={active ? `${classes.modal__body} ${classes.active}`: classes.modal__body }onClick={()=> setActive(false)}>
        <div className={active ? `${classes.modal__content} ${classes.active}`: classes.modal__content} onClick={e => e.stopPropagation()} >
            {children}
        </div>
      </div>
    
  )
};
