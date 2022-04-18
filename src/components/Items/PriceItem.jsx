import React from 'react';
import classes from "./Item.module.css";

const PriceItem = (props) => {
    return (
        <div className={classes.item}>
            <p>Цена: {props.price.coin_value}</p>
            <p>Дата: {props.price.coin_time}</p>
        </div>
    );
};

export default PriceItem;