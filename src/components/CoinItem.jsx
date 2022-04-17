import React from 'react';
import classes from "./Item.module.css";
import MyButton from "./MyButton";

const CoinItem = (props) => {
    return (
        <div className={classes.item}>
            <p>{props.coin.coin_name}</p>
            <p>Последняя цена: {props.coin.coin_value}</p>
            <MyButton/>
        </div>
    );
};

export default CoinItem;