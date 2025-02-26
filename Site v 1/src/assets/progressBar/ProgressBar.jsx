import classes from "./progressBar.module.css";

export default function ProgressBar({percent,children}) {
    let container = {
        width: `${percent}%`
    }
  return (
  <>
        <div class={classes.progress__container}>
        <div class={classes.progress__bar}  style={container} >{children}</div>
    </div>

  </>
  

)
}
