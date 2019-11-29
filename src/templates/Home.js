import React from 'react';
import {Link} from 'react-router-dom';
import {wordpressLink} from '../settings/Settings'

const Home = (props) => {
    return (
        <div className='Post'>
            <Link to={wordpressLink + 'pages/main'}>Dalej</Link>
            <Link to={wordpressLink + 'pages/wspolpraca'}>Współpraca</Link>
        </div>
    )
}

export default Home;
