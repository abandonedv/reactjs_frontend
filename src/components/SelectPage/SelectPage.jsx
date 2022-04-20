import React from 'react';
import MyButton from "../Button/MyButton";
import classes from "../MyDiv/MyDiv.module.css";

const SelectPage = (props) => {
    return (
        <div className={classes.myDiv}>
            <MyButton onClick={() => props.set_news_page(400)}>
                Другая страница
            </MyButton>
        </div>
    );
};

export default SelectPage;