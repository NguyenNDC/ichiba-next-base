import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

interface props {
  children?: React.ReactNode;
  className?: string;
  href: string;
  icon?: string;
}

export default function A({ children, className, href, icon }: props) {
  return (
    <Link
      href={href}
      target={'_blank'}
    >
      <a
        className={classnames(
          `text-sm font-medium not-italic text-[#005DF8]`,
          className
        )}
      >
        <p>{children}</p>
        {icon ? (
          <div className="ml-3">
            <Image
              src={icon}
              alt="icon"
            />
          </div>
        ) : null}
      </a>
    </Link>
  );
}
