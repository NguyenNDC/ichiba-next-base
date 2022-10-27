import React from 'react';
import classnames from 'classnames';

interface props {
  children: React.ReactNode;
  className?: string;
}

/*
  font size: 15px
  font weight: 400
*/

export default function P15({ children, className }: props) {
  return (
    <p className={classnames(`text-[15px] font-normal not-italic`, className)}>
      {children}
    </p>
  );
}
