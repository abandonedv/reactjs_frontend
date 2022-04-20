import React, {useContext} from 'react';
import classes from "./Item.module.css";
import MyButton from "../Button/MyButton";
import {MyContext} from "../Context/Context";

const NewsItem = ({news}) => {
    const {selectedNews, setSelectedNews} = useContext(MyContext)

    function MyClick(e) {
        setSelectedNews([...selectedNews, ...[news]])
        e.stopPropagation()
    }

    return (
        <div className={classes.newsItem}>
            <p><b>Заголовок:</b> {news.news_title}</p>
            <hr style={{marginTop: 5, marginBottom: 5}}/>
            <p><b>Содержание:</b> {news.news_lead}</p>
            <hr style={{marginTop: 5, marginBottom: 5}}/>
            <p><b>Время:</b> {news.news_time}</p>
            <MyButton
                style={{marginTop: 10}}
                onClick={(e) => MyClick(e)}
            >Добавить</MyButton>
        </div>
    );
};

export default NewsItem;