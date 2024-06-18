
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='text-white'>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p> <Link href="/week-2">
        Go to Week 2 Assignments
      </Link></p>
      <p><Link href="/week-3">
        Go to Week 3 Assignments
      </Link></p>
      <p><Link href="/week-4">
        Go to Week 4 Assignments
      </Link></p>
      <p><Link href="/week-5">
        Go to Week 5 Assignments
      </Link></p>
      <p><Link href="/week-6">
        Go to Week 6 Assignments
      </Link></p>
    </div>
  );
}

export default Home;
