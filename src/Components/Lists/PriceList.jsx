import React from 'react';
import PriceItem from "../Items/PriceItem";
import SelectPage from "../SelectPage/SelectPage";

const PriceList = ({price_list, price_page, set_price_page}) => {
    return (
        <div>
            <SelectPage page={price_page} set_page={set_price_page}/>
            {price_list.map((item) =>
            <PriceItem price={item} key={item.coin_time}></PriceItem>
            )}
            <SelectPage page={price_page} set_page={set_price_page}/>
        </div>
    );
};

export default PriceList;