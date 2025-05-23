import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Link className="home" to={'/admin'}>
      <h1>어드민 페이지 이동</h1>
    </Link>
  );
};

export default Home;
