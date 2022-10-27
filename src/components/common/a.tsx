import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

interface props {
  children: React.ReactNode;
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
          `whitespace-nowrap text-[13px] font-medium not-italic text-[#005DF8]`,
          className
        )}
      >
        <p className="whitespace-nowrap mr-3">{children}</p>
        {icon ? (
          <Image
            width={'14'}
            height={'14'}
            src={icon}
            alt="icon"
          />
        ) : null}
      </a>
    </Link>
  );
}
