import SkillsComponent from "./SkillsComponent/SkillsComponent.jsx";
import { calcTravelDuration, pluralizeRu } from "../../../../hobbies/travelers/travelDuration.js";

export default function Skills() {
  const { years: travelYears } = calcTravelDuration();
  const travelersSubtitle =
    travelYears === 3
      ? "Более 3 лет."
      : `Более ${travelYears} ${pluralizeRu(travelYears, ['год', 'года', 'лет'])}.`;

  return (
    <section id="skills">
      <SkillsComponent id={"Developer"} title={"Developer"} content={"Более 3 лет."} />
      <SkillsComponent id={"Engineer"} title={"Engineer"} content={"Более 10 лет."} />
      <SkillsComponent id={"Travelers"} title={"Travelers"} content={travelersSubtitle} />
    </section>
  );
}
