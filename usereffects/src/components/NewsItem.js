import React from 'react'

const NewsItem = ({ title, description, image, url }) => {
  return (
    <div onClick={() => window.open(url, "_blank")} style={{ border: "1px solid grey", 
    padding: "10px", 
    borderRadius: "pointer" }}>
        <img src={image || "https://dummyimage.com/300x180/000/fff&text=News" } 
        alt={title} 
        style={{ width: "100%", height: "180px", objectFit: "cover" }} />
        <h3>{title}</h3>
        <p>{description || 'No description for this news'}</p>
    </div>
  )
}

export default NewsItem