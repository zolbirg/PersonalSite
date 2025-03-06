import classes from "./progressBar.module.scss";

export default function ProgressBar({percent,children}) {
    let container = {
        width: `${percent}%`
    }
  return (
  <>
        <div className={classes.progress__container}>
        <div className={classes.progress__bar}  style={container} >{children}</div>
    </div>

  </>
  

)
}
