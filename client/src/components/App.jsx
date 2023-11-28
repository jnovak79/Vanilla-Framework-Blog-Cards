import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard.jsx';

const App = () => {

  const [articleInfo, setArticleInfo] = useState([]);

  useEffect(function() {
    let url = '/blogs';

    axios.get(url)
      .then((result) => {
        setArticleInfo(result.data);
      })
      .catch((error) => {console.log(error)});
  }, []);


  return (
    <div className='app'>
      <div className='row'>
        {articleInfo.map(function(article, index) {
          return (
            <ArticleCard key={index} article={article}/>
          )
        })}
      </div>
    </div>
  )
};

export default App;