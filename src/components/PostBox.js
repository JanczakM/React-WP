import React from 'react';
import {Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const PostBox = (props) => {
    return (
      <Link to={props.link}>
        <div className='postbox-box'>
          <div className='postbox-img'>
            <img src={props.image.url} alt={props.image.alt}></img>
          </div>
          <div className='postbox-txt'>
            <h3 className='postbox-title'>{ReactHtmlParser(props.title.rendered)}</h3>
          </div>
        </div>
      </Link>
    )
}

PostBox.propTypes = {
  link: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.object,
}

export default PostBox;
