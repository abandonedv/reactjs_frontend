import React from 'react';
import PriceItem from "../Items/PriceItem";
import Chart from "../Chart/Chart";

const PriceList = (props) => {
    return (
        <div>
            {props.price_list.map((item) =>
            <PriceItem price={item} key={item.coin_time}></PriceItem>
            )}

        </div>
    );
};

export default PriceList;