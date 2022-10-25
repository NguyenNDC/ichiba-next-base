import React from 'react';
import classnames from 'classnames';


interface props {
  children?: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: props) {
  return (
    <div
      className={classnames(` bg-[#FFFFFF]  p-4 rounded-xl`, className)}
    >
      {children}
    </div>
  );
}
