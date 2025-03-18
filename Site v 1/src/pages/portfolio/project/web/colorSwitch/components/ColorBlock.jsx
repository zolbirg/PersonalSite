import classes from "../ColorSwitch.module.scss";
import { useState } from "react";
import Button from "../../../../../../assets/components/button/Button";

export default function ColorBlock({onChange}) {
  const [isBlock, setisBlock] = useState(true);
  const [isColor, setIsColor] = useState(generateRandomColor());

  function generateRandomColor() {
    const hexCodes = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color +=
        hexCodes[
          Math.floor(Math.random() * hexCodes.length)
        ];
    }
    return "#" + color;
  }

  function handleClickIsBlock() {
    setisBlock(!isBlock);
    
    
  }

  function onChangeColor() {
   isBlock && setIsColor(generateRandomColor());
    
  }

 
 
  

  return (
    <>
      <div
        className={classes.col}
        style={{ background: isColor }}
      >
        <h2 className={classes.color__text}>{isColor}</h2>
        <Button onClick={handleClickIsBlock}>Block</Button>
      </div>
    </>
  );
}
