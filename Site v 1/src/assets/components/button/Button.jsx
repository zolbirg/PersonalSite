import './Button.css'

// eslint-disable-next-line react/prop-types
export default function Button ({ children, onClick }){


    return(
        <button className='button' onClick={onClick}>{children}</button>
    )
};