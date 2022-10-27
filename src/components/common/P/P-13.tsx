import React from 'react';
import classnames from 'classnames';

interface props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/*
  font size: 13px
  font weight: 400
*/

export default function P13({ children, className, style }: props) {
  return (
    <p
      style={style}
      className={classnames(
        `text-[13px] font-normal not-italic leading-6 text-[#121619]`,
        className
      )}
    >
      {children}
    </p>
  );
}
