import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/img/sectio4.jpg';
import Tags from '../Tags/Tags';

function Card({ posts }) {
  if (!posts) {
    // Handle the case when `posts` is undefined or null
    return <div>Loading...</div>;
  }

  const postsList = posts.map((item) => (
    <div className="col-md-4 m-0 p-0" key={item.id}>
      <Link to={`/post/${item.id}`}>
        <div className="card container mt-5">
          <img src={img} className="card-img-top" alt="section" />
          <div className="card-body m-0 p-1 pt-2">
            <Tags />
            <p className="card-title Card__title">{item.title}</p>
            <p className="card-text Card__text">{item.description}</p>
            <p className="card-text Card__readPost">
              Read post <span>&#129141;</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  ));

  return postsList;
}

export default Card;
