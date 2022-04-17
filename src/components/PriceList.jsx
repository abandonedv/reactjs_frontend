import React from 'react';
import PriceItem from "./PriceItem";
import classes from "./Item.module.css"

const PriceList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: "center", margin: 30}}>{props.title}</h1>
            <div>
                {props.price_list.map((item) =>
                <PriceItem price={item} key={item.coin_time}></PriceItem>
                )}
            </div>
        </div>
    );
};

export default PriceList;