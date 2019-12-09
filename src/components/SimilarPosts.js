import React from 'react';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const SimilarPosts = (props) => {
  const postsArr = Object.values(props);
  return (
    <div>
    {postsArr.map(simPost => (
      <LazyLoad key={simPost.id}>
        <Link to={simPost.slug} className='single-similarposts-link'>
          <div className='single-similarposts'>
            <img src={simPost.featured_img.url} alt={simPost.featured_img.alt}></img>
            <h3>{ReactHtmlParser(simPost.title.rendered)}</h3>
          </div>
        </Link>
      </LazyLoad>
    ))}
    </div>
  )
}

export default SimilarPosts;
