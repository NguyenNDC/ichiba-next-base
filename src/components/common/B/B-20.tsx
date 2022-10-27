import React from 'react';
import classnames from 'classnames';

interface props {
  children: React.ReactNode;
  className?: string;
}

/*
  font-size: 20px 
  font-weight: 700
*/
export default function B20({ children, className }: props) {
  return (
    <p
      className={classnames(
        `text-xl font-bold not-italic leading-[30px]`,
        className
      )}
    >
      {children}
    </p>
  );
}
