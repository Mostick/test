import React from "react";
import {fetchNewsList} from "../../service/NewsApi.js";
import NewsItem from "../newsItem/NewsItem.js";
import Btn from "../btn/Btn.js";
import './newsList.scss';

class NewsList extends React.Component{
    constructor(props){
        super(props);

        this.listCount = 10;

        this.state = {
            btn: true,
            preloader: false,
            page: 0,
            newsList: []
        };

        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount (){
        this.loadMore();
    }

    loadMore (){
        if(this.state.preloader) return;

        this.setState({preloader: true});

        fetchNewsList(this.listCount, this.state.page + 1).then(response => {
            response.json().then(result => {
                if(result.status === 'ok'){
                    this.setState(state => {
                        let newState = {
                            preloader: false,
                            page: ++state.page,
                            newsList: [...state.newsList, ...result.articles]
                        };

                        if(this.listCount > result.articles.length) newState.btn = false;

                        return newState;
                    });
                }
                else{
                    this.setState({preloader: false});

                    alert('News loading error! Try again later.');
                }
            });
        });
    }

    render (){
        return (
            <div className='news-list'>
                <div className='news-list-content'>
                    {
                        this.state.newsList.map(newsItem => {
                            return <NewsItem data={newsItem} key={newsItem.url}/>
                        })
                    }
                </div>
                {this.state.btn ? <Btn text='Load more' onBtnLoadClick={this.loadMore} preloader={this.state.preloader}/> : null}
            </div>
        )
    }
}

export default NewsList;