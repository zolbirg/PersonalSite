
import classes from "./ProjectPages.module.scss";
import {BullAndMoo,nameProject2,nameProject3} from'./ProjectDate.js'
import ProjectComponents from "./projectComponents/projectComponents.jsx";

export default function ProjectPage() {
  return (
    <>
      <section className="section">
        <h2 className="section__title">My Project</h2>
        <div className={`${classes.project__container} container`}>
          <ProjectComponents {...BullAndMoo}/>
          <ProjectComponents {...nameProject2}/>
          <ProjectComponents {...nameProject3}/>
        </div>
      </section>
    </>
  );
}
