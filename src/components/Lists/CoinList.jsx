import React from 'react';
import PriceItem from "../Items/PriceItem";
import CoinItem from "../Items/CoinItem";
import classes from "../Items/Item.module.css";

const CoinList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: "center", margin: 30}}>{props.title}</h1>
            <div>
                {props.coin_list.map((item) =>
                    <CoinItem coin={item} key={item.coin_name}></CoinItem>
                )}
            </div>
        </div>
    );
};

export default CoinList;