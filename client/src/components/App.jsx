import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard.jsx';

const App = () => {

  const [connectionError, setConnectionError] = useState(false);
  const [articleInfo, setArticleInfo] = useState([]);

  useEffect(function() {
    let url = '/blogs';

    axios.get(url)
      .then((result) => {
        setArticleInfo(result.data);
      })
      .catch((error) => {
        setConnectionError(true);
        console.log(error)
      });
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
      {connectionError &&
      <div class="p-notification--negative">
        <div class="p-notification__content">
          <h5 class="p-notification__title">Error</h5>
          <p class="p-notification__message">Error connecting to the API</p>
        </div>
      </div>}
    </div>
  )
};

export default App;