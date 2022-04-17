import React from 'react';
import PriceItem from "./PriceItem";

const PriceList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{props.title}</h1>
            <div>
                {props.price_list.map((item) =>
                <PriceItem price={item} key={item.coin_time}></PriceItem>
                )}
            </div>
        </div>
    );
};

export default PriceList;