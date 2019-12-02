import React from 'react';
import {Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const PostBox = (props) => {
    return (
      <Link to={props.slug}>
        <div className='postbox-box'>
          <div className='postbox-img'>
            <img src={props.featured_img.url} alt={props.featured_img.alt}></img>
          </div>
          <div className='postbox-txt'>
            <h3 className='postbox-title'>{ReactHtmlParser(props.title.rendered)}</h3>
          </div>
        </div>
      </Link>
    )
}

export default PostBox;
