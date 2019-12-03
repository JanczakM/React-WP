import React from 'react';
import {Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const SimilarPosts = (props) => {
  const postsArr = Object.values(props);
  return (
    <div>
    {postsArr.map(simPost => (
      <Link to={simPost.slug} key={simPost.id}>
        <div className='single-similarposts'>
          <img src={simPost.featured_img.url} alt={simPost.featured_img.alt}></img>
          <h3>{ReactHtmlParser(simPost.title.rendered)}</h3>
        </div>
      </Link>))}
    </div>
  )
}

export default SimilarPosts;
