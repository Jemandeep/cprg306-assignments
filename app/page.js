
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='text-white'>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">
        Go to Week 2 Assignments
      </Link>
    </div>
  );
}

export default Home;
