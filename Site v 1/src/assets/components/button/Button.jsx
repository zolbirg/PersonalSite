import classes from './Button.module.scss'

// eslint-disable-next-line react/prop-types
export default function Button ({ children, onClick }){


    return(
        <button className={classes.button} onClick={onClick}>{children}</button>
    )
};