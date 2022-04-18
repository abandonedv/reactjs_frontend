import React from 'react';
import Chart from "../Chart/Chart";
import PriceItem from "../Items/PriceItem";
import NewsItem from "../Items/NewsItem";

const NewsList = (props) => {
    return (
        <div>
            {props.news_list.map((item) =>
                <NewsItem news={item} key={item.news_time}></NewsItem>
            )}
        </div>
    );
};

export default NewsList;