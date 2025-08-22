import { useState } from 'react';
import Button from '../../../../../assets/components/button/Button';
import classes from './ColorSwitch.module.scss';
import ColorBlock from './components/ColorBlock';

export default function СolorSwitch() {
    const [isBlock1, setIsBlock1] = useState(true);
    const [isBlock2, setIsBlock2] = useState(true);
    const [isBlock3, setIsBlock3] = useState(true);
    const [isBlock4, setIsBlock4] = useState(true);
    const [isBlock5, setIsBlock5] = useState(true);

    const [isColor1, setIsColor1] = useState(generateRandomColor());
    const [isColor2, setIsColor2] = useState(generateRandomColor());
    const [isColor3, setIsColor3] = useState(generateRandomColor());
    const [isColor4, setIsColor4] = useState(generateRandomColor());
    const [isColor5, setIsColor5] = useState(generateRandomColor());

    function handleClickIsBlock1() {
        setIsBlock1(!isBlock1);
    }
    function handleClickIsBlock2() {
        setIsBlock2(!isBlock2);
    }
    function handleClickIsBlock3() {
        setIsBlock3(!isBlock3);
    }
    function handleClickIsBlock4() {
        setIsBlock4(!isBlock4);
    }
    function handleClickIsBlock5() {
        setIsBlock5(!isBlock5);
    }

    function onChangeColor() {
        isBlock1 && setIsColor1(generateRandomColor());
        isBlock2 && setIsColor2(generateRandomColor());
        isBlock3 && setIsColor3(generateRandomColor());
        isBlock4 && setIsColor4(generateRandomColor());
        isBlock5 && setIsColor5(generateRandomColor());
    }

    function generateRandomColor() {
        const hexCodes = '0123456789ABCDEF';
        let color = '';
        for (let i = 0; i < 6; i++) {
            color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
        }
        return '#' + color;
    }

    return (
        <>
            <div className={`${classes.color__body} section `}>
                <div className={classes.color__content}>
                    <div
                        className={classes.col}
                        style={{ background: isColor1 }}
                    >
                        <h2 className={classes.color__text}>{isColor1}</h2>
                        <Button onClick={handleClickIsBlock1}>Block</Button>
                    </div>
                    <div
                        className={classes.col}
                        style={{ background: isColor2 }}
                    >
                        <h2 className={classes.color__text}>{isColor2}</h2>
                        <Button onClick={handleClickIsBlock2}>Block</Button>
                    </div>
                    <div
                        className={classes.col}
                        style={{ background: isColor3 }}
                    >
                        <h2 className={classes.color__text}>{isColor3}</h2>
                        <Button onClick={handleClickIsBlock3}>Block</Button>
                    </div>
                    <div
                        className={classes.col}
                        style={{ background: isColor4 }}
                    >
                        <h2 className={classes.color__text}>{isColor4}</h2>
                        <Button onClick={handleClickIsBlock4}>Block</Button>
                    </div>
                    <div
                        className={classes.col}
                        style={{ background: isColor5 }}
                    >
                        <h2 className={classes.color__text}>{isColor5}</h2>
                        <Button onClick={handleClickIsBlock5}>Block</Button>
                    </div>
                </div>
                <div className={classes.color__btn_block}>
                    <Button onClick={onChangeColor}>Сменить цвет</Button>
                </div>
            </div>
        </>
    );
}
