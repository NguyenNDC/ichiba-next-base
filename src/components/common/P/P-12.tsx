import React from 'react';
import classnames from 'classnames';

interface props {
  children: React.ReactNode;
  className?: string;
}

/*
  font size: 12px
  font weight: 400
*/

export function P12_400({ children, className }: props) {
  return (
    <p className={classnames(`text-[12px] font-normal not-italic`, className)}>
      {children}
    </p>
  );
}

/*
  font size: 12px
  font weight: 400
*/

export function P12_500({ children, className }: props) {
  return (
    <p className={classnames(`text-[12px] font-medium not-italic`, className)}>
      {children}
    </p>
  );
}
