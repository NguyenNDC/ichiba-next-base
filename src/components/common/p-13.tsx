import React from 'react';
import classnames from 'classnames';

interface props {
  children: React.ReactNode;
  className: string;
}

export default function P13({ children, className }: props) {
  return (
    <p
      className={classnames(`text-[13px] font-normal not-italic text-[#121619]`, className)}
    >
      {children}
    </p>
  );
}
