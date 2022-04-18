import React from 'react';
import Chart from "../Chart/Chart";
import PriceItem from "../Items/PriceItem";
import NewsItem from "../Items/NewsItem";

const NewsList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: "center", margin: 30}}>{props.title}</h1>
            <Chart chart_list={props.chart_list}/>
            {/*<div>*/}
            {/*    {props.price_list.map((item) =>*/}
            {/*        <PriceItem price={item} key={item.coin_time}></PriceItem>*/}
            {/*    )}*/}
            {/*</div>*/}
            <div>
                {props.news_list.map((item) =>
                    <NewsItem news={item} key={item.news_time}></NewsItem>
                )}
            </div>
        </div>
    );
};

export default NewsList;