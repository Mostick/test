import React from "react";
import './newsItem.scss';

function NewsItem (props){
    const {data} = props;

    return (
        <a href={data.url} className='news-item' target="_blank">
            <div className="news-item-left">
                <div className="news-item-img"><img src={data.urlToImage} alt=""/></div>
            </div>
            <div className="news-item-right">
                <div className="news-item-title">{data.title}</div>
                <div className="news-item-time">Опубликовано {/([0-9-]*)/.exec(data.publishedAt)[1]}</div>
                <div className="news-item-content">{data.content || data.description}</div>
            </div>
        </a>
    )
}

export default NewsItem;