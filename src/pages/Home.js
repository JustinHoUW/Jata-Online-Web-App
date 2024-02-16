// /src/pages/Home.js

import React, { useEffect, useState } from 'react';
import logoImage from '../images/jata_black.png'; // Adjust the path to your logo image
import { sellPosts } from '../hardCodeData/sellPostData';
import { SellPost } from '../components/SellPost';

export const Home = () => {
  const [sellPostList, setSellPostList] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All'); // Default active category


  

  //Effect for Sell Post
  useEffect(()=>{
    setSellPostList(sellPosts);
  },[])
  const filteredSellPosts = activeCategory === 'All' ? sellPostList : sellPostList.filter(post => post.category === activeCategory);

  const categories = ['All', ...new Set(sellPosts.map(post => post.category))];
  

  return (

    <>
      <nav>
        <ul className="nav nav-tabs">
          {categories.map((category, index) => (
            <li key={index} className="nav-item">
              <button
                className={`nav-link ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <h1>Explore</h1>
      {filteredSellPosts.map((sellPost, index) => (
        <SellPost
          key={index}
          sellpostID={sellPost.sellPostID}
          title={sellPost.title}
          userID={sellPost.userID}
          userProfileURL={sellPost.userProfileURL}
          description={sellPost.description}
          price={sellPost.price}
          size={sellPost.size}
          gender={sellPost.gender}
          quantity={sellPost.quantity}
          picUrl={sellPost.picUrl}
          category={sellPost.category}
          datePost={sellPost.datePost}
        />
      ))}
    </>
  
  );
};