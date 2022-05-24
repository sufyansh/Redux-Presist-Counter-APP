/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import Link from 'next/link';
import React from 'react';
import Users from './Users';
import AddCount from './IncrementCounter';

const Page = props => {
  return (
    <div>
      <h1 style={{ backgroundColor: '#ddd' }}>{props.title}</h1>
      <Users />
      <AddCount />
      <br />
      <nav>
        <Link href={props.linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
};

export default Page;
