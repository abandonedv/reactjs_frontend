import React from 'react';
import classes from "./Item.module.css";
import MyButton from "../Button/MyButton";

const NewsItem = ({news, selected_news}) => {

    return (
        <div className={classes.newsItem}>
            <p><b>Заголовок:</b> {news.news_title}</p>
            <hr style={{marginTop: 5, marginBottom: 5}}/>
            <p><b>Содержание:</b> {news.news_lead}</p>
            <hr style={{marginTop: 5, marginBottom: 5}}/>
            <p><b>Время:</b> {news.news_time}</p>
            <MyButton
                style={{marginTop: 10}}
                onClick={() => selected_news.set_news({...news})}
            >Добавить</MyButton>
        </div>
    );
};

export default NewsItem;