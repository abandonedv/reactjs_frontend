import React from 'react';
import classes from "../MyDiv/MyDiv.module.css";
import MyButton from "../Button/MyButton";

const SelectButtons = ({changeList}) => {
    function MyClick(e, value) {
        changeList(value)
        e.stopPropagation()
    }

    return (
        <div className={classes.myDiv}>
            <MyButton onClick = {(e) => MyClick(e, 0)}>
                Цены
            </MyButton>
            <MyButton onClick = {(e) => MyClick(e, 1)}>
                Новости
            </MyButton>
        </div>
    );
};

export default SelectButtons;