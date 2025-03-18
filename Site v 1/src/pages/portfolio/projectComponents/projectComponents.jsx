import classes from './projectComponents.module.scss'
import ProjectCard from '../../../assets/components/projectCard/ProjectCard';

export default function ProjectComponents({stack,...props}) {
  return (
    <>
      <div className={classes.project__block}>
        <ProjectCard {...props} /> 
      </div>
      <div className={classes.project__description}>
        <h3>Стек технологий: {stack}</h3>
        <h3>Сложность:</h3>
        <h3>Дата:</h3>
        <h3>Git:</h3>
      </div>
    </>
  );
}
