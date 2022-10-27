import React from 'react';
import classnames from 'classnames';


interface props {
  children?: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: props) {
  return (
    <div
      className={classnames(className, `bg-[#FFFFFF]  p-4 rounded-xl`)}
    >
      {children}
    </div>
  );
}
