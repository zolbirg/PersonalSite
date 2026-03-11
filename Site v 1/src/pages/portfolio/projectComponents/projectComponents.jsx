import classes from './projectComponents.module.scss'
import ProjectCard from '../../../assets/components/projectCard/ProjectCard';
import { FaGithub,} from "react-icons/fa6";


export default function ProjectComponents({stack,price,date,git,...props}) {
  return (
    <>
      <div className={classes.project__block}>
        <ProjectCard {...props} /> 
      </div>
      <div className={classes.project__description}>
        <h3>Стек технологий: {stack}</h3>
        <h3>Сложность: {price}</h3>
        <h3>Дата:{date} </h3>
        <h3>Git:
          <a className='button' href={git}>
                          <FaGithub />
                          </a>
        </h3>
      </div>
    </>
  );
}
