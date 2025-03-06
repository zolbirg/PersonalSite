import classes from "./skillsComponent.module.css";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

import Developer from "./Developer";
import Engineer from "./Engineer";
import Travelers from "./Travelers";

import { useDispatch, useSelector } from "react-redux";
import { skillsContentType } from "../../../../store/homePagesSlice";

export default function SkillsComponent({
  title,
  content,
  id,
}) {
  const dispatch = useDispatch();
  const { isActive } = useSelector(
    (store) => store.homePages.skillsBarPage
  );

  return (
    <>
      <div
        onClick={() =>
          dispatch(
            skillsContentType({
              isActive: title,
            })
          )
        }
      >
        <div className={classes.skills__header}>
          <div>
            <h1
              className={
                isActive === id
                  ? ` ${classes.skills__title} button button__active `
                  : ` ${classes.skills__title} button`
              }
            >
              {title}
            </h1>
            <span className={classes.skills__subtitle}>
              {content}
            </span>
          </div>
          <HiMiniArrowsUpDown
            className={classes.skills__arrow}
          />
        </div>

        {id == "Developer" && isActive === "Developer" ? (
          <Developer />
        ) : (
          ""
        )}
        {id == "Engineer" && isActive === "Engineer" ? (
          <Engineer />
        ) : (
          ""
        )}
        {id == "Travelers" && isActive === "Travelers" ? (
          <Travelers />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
