import React, { useEffect, useState } from 'react'
import './NewsBoads.css'
import NewsItem from '../NewsItem/NewsItem';
import axios from 'axios';

const NewsBoads = ({category}) => {
    const[aarticles,setAarticles]=useState([]);

    useEffect(()=>{  
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7e0b90f160234b009686365e6b031e90`;

      
        fetch(url,{
          headers: {
            "Upgrade": "HTTP/2.0"
        }
        
        })
        .then(res=>{
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data)=>setAarticles(data.articles))
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
       
    },[category])
    console.log(aarticles)

   
  return (
    <div className='newboads' >
      <h3>Latest<span>News</span></h3>
      <div className='newsitem-data'>
      {
        aarticles && aarticles.map((news,index)=>{
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
