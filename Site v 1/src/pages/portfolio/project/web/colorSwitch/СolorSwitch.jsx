import { useState } from "react";
import Button from "../../../../../assets/components/button/Button";
import classes from "./ColorSwitch.module.scss";
import ColorBlock from "./components/ColorBlock";


export default function СolorSwitch() {
    const [puk, setpuk] = useState(false);
const [isBlock1, setisBlock1] = useState(true);
const [isBlock2, setisBlock2] = useState(true);


const [isColor1, setIsColor1] = useState( generateRandomColor());
const [isColor2, setIsColor2] = useState( generateRandomColor());



    function handleClickIsBlock1(){
        setisBlock1(!isBlock1);
      }
    function handleClickIsBlock2(){
        setisBlock2(!isBlock2);
      }

    function onChangeColor(){
        isBlock1 && setIsColor1(generateRandomColor())
        isBlock2 && setIsColor2(generateRandomColor())
        setpuk(!puk)
        
        
        
      }

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
       

    

  return (
    <>
      <div className={`${classes.color__body} section `}>
        <div className={classes.color__content}>
          <div className={classes.col} style={{background:isColor1}}>
            <h2 className={classes.color__text} >{isColor1}</h2>
            <Button  onClick={handleClickIsBlock1}>Block</Button>
          </div>
          <div className={classes.col} style={{background:isColor2}}>
            <h2 className={classes.color__text} >{isColor2}</h2>
            <Button  onClick={handleClickIsBlock2}>Block</Button>
          </div>
        
        <ColorBlock onChange={puk}></ColorBlock>
          
        </div>
        <div className={classes.color__btn_block}>
        <Button onClick={onChangeColor} >Сменить</Button>
        </div>
      </div>
    </>
  );
}
