import React, { useEffect } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard.jsx';

const App = () => {

  useEffect(function() {
    let url = '/blogs';

    axios.get(url)
      .then((result) => {console.log(result)})
      .catch((error) => {console.log(error)});
  }, []);


  return (
    <div className='app'>
      <h1>Blog Cards</h1>
      <ArticleCard />
    </div>
  )
};

export default App;