import React from 'react';


const ArticleCard = ({article}) => {

  const date = new Date(article.date);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const day = date.toLocaleDateString('en-US', { day: '2-digit' });
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const year = date.toLocaleDateString('en-US', { year: 'numeric' });
  const formattedDate = `${day} ${month} ${year}`;

  return (
    <div className='col'>
      <div className="p-card--highlighted">
        <p className="p-card__content">CLOUD AND SERVER</p>
        <hr className="u-sv1"></hr>
        <a href={article.link}><img className="p-card__image" src={article.featured_media}/></a>
        <a href={article.link}><h1>{article.title.rendered}</h1></a>
        <div className='bottomCardPortion'>
          <p className="p-card__content"><em>By <a href={article._embedded.author[0].link}>{article._embedded.author[0].name}</a> on {formattedDate}</em></p>
          <hr className="u-sv1"></hr>
          <p>Article</p>
        </div>
      </div>
  </div>
  )
}

export default ArticleCard;