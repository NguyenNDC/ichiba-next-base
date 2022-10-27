import React from 'react';
import classnames from 'classnames';

interface props {
  children: React.ReactNode;
  className?: string;
}

/*
  font size: 14px
  font weight: 400
*/

export default function P14({ children, className }: props) {
  return (
    <p className={classnames(`text-[14px] font-normal not-italic`, className)}>
      {children}
    </p>
  );
}
