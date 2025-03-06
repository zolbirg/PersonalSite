
import SkillsComponent from "./skillsComponent/SkillsComponent";


export default function Skills() {

  return (
    <section id="skills">
    <SkillsComponent id={"Developer"} title={"Developer"} content={"Более 2 лет."}/>
    <SkillsComponent id={"Engineer"} title={"Engineer"} content={"Более 10 лет."}/>
    <SkillsComponent id={"Travelers"} title={"Travelers"} content={"Более 3 лет."}/>
    </section>
  );
}
