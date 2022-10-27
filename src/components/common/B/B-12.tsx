import React from 'react';
import classnames from 'classnames';

interface props {
  children: React.ReactNode;
  className?: string;
}

/*
  font-size: 14px 
  font-weight: 600
*/
export default function B12({ children, className }: props) {
  return (
    <p className={classnames(`text-xs font-semibold not-italic`, className)}>
      {children}
    </p>
  );
}
