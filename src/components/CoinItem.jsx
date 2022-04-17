import React from 'react';
import classes from "./Item.module.css";
import MyButton from "./MyButton";
import {useNavigate} from "react-router-dom";

const CoinItem = (props) => {
    const navigate = useNavigate()

    return (
        <div className={classes.item}>
            <p>{props.coin.coin_name}</p>
            <p>Последняя цена: {props.coin.coin_value}</p>
            <MyButton onClick={() => navigate(`/coin:${props.coin.coin_name}`)}>
                Подробнее
            </MyButton>
        </div>
    );
};

export default CoinItem;