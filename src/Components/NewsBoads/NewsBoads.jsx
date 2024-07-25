import React, { useEffect, useState } from 'react'
import './NewsBoads.css'
import NewsItem from '../NewsItem/NewsItem';

const NewsBoads = ({category}) => {
    const[articles,setArticles]=useState([]);

    useEffect(()=>{  
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7e0b90f160234b009686365e6b031e90`;
        fetch(url,{
          method: 'GET',
          headers: {
            'Upgrade': 'HTTP/2.0'
          }
        })
        .then(res=>res.json())
        .then((data)=>setArticles(data.articles));
    },[category])

   
  return (
    <div className='newboads' >
      <h3>Latest<span>News</span></h3>
      <div className='newsitem-data'>
      {
        articles && articles.map((news,index)=>{
            return(
                <NewsItem key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                 />
            )
        })
      }
      </div>
      
    </div>
  )
}

export default NewsBoads
