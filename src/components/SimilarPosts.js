import React from 'react';
import Axios from 'axios';

const SimilarPosts = (props) =>  {
  let joined = props.categories.join(', ');

  Axios
    .get('https://aktywnepodroze.pl/wp-json/wp/v2/posts?categories=' + joined)
    .then(response => {
      return(
        <div>{response.data}</div>
      )
    })
    .catch(err => {
      console.log(err.message);
    });

  return(
    <div></div>
  )
}

export default SimilarPosts;
