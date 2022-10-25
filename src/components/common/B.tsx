import React from 'react';
import classnames from 'classnames';

interface props {
  children: React.ReactNode;
  className: string;
}

export default function B({ children, className }: props) {
  return (
    <p
      className={classnames(`text-sm font-semibold not-italic`, className)}
    >
      {children}
    </p>
  );
}
