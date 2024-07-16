import React from 'react'
import './NewsItem.css'
import image from '../../assets/news.jpeg'

const NewsItem = ({title,src,url,description}) => {
  return (
    <div className='newsitem'>   
        <div className="card">
          <img src={src?src:image} alt="" className='image' />
          <div className="dtls">
            <h5 className='title'>{title.slice(0,50)}</h5>
            <p className='description'>{description? description:"It is not a more information. It is information about something that has just happened ." }</p>
            <a href={url} target="_blank" className='readmore' >Read More</a>
          </div>
        </div>   
    </div>
  )
}

export default NewsItem
