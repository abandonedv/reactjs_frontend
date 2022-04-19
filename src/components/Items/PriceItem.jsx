import React from 'react';
import classes from "../MyDiv/MyDiv.module.css";

const PriceItem = (props) => {
    return (
        <div className={classes.myDiv}>
            <p>Цена: {props.price.coin_value}</p>
            <p>Дата: {props.price.coin_time}</p>
        </div>
    );
};

export default PriceItem;