import React from 'react';
import classnames from 'classnames';

interface props {
  children: React.ReactNode;
  className?: string;
}

/*
  font size: 20px
  font weight: 400
*/

export default function P20({ children, className }: props) {
  return (
    <p className={classnames(`text-xl font-normal not-italic`, className)}>
      {children}
    </p>
  );
}
