import React from 'react';
import classes from "../MyDiv/MyDiv.module.css";
import MyButton from "../Button/MyButton";

const SelectButtons = ({changeList}) => {

    return (
        <div className={classes.myDiv}>
            <MyButton onClick = {() => changeList(0)}>
                Цены
            </MyButton>
            <MyButton onClick = {() => changeList(1)}>
                Новости
            </MyButton>
        </div>
    );
};

export default SelectButtons;