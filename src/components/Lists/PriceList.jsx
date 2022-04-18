import React from 'react';
import PriceItem from "../Items/PriceItem";
import Chart from "../Chart/Chart";

const PriceList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: "center", margin: 30}}>{props.title}</h1>
            <Chart/>
            <div>
                {props.price_list.map((item) =>
                <PriceItem price={item} key={item.coin_time}></PriceItem>
                )}
            </div>
        </div>
    );
};

export default PriceList;