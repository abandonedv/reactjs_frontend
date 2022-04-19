import React from 'react';
import MyButton from "../Button/MyButton";
import {useNavigate} from "react-router-dom";
import classes from "../MyDiv/MyDiv.module.css";

const CoinItem = (props) => {
    const navigate = useNavigate()

    return (
        <div className={classes.myDiv}>
            <p>{props.coin.coin_name}</p>
            <p>Последняя цена: {props.coin.coin_value}</p>
            <MyButton onClick={() => navigate(`/coin:${props.coin.coin_name}`)}>
                Подробнее
            </MyButton>
        </div>
    );
};

export default CoinItem;