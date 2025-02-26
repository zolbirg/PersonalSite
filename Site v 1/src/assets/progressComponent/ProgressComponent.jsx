import ProgressBar from "../progressBar/ProgressBar";
import classes from "./progressComponent.module.css"


export default function ProgressComponent({percent,children}) {
  return (
    <>
      <div>
        <div className={classes.skills__titles}>
          <h3 className={classes.skills__name}>{children}</h3>
          <span className={classes.skills__number}></span>
        </div>
        <ProgressBar percent={percent}> </ProgressBar>
      </div>
    </>
  );
}
