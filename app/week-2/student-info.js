

import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <h1>Jemandeep Singh</h1>
            <Link href="https://github.com/jemandeep" passHref>
                My GitHub Repository
            </Link>
        </div>
    );
}

export default StudentInfo;
