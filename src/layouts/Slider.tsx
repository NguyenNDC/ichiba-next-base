import Image from 'next/image';
import { useRouter } from 'next/router';
import lang from '../../assets/svg/common/lang.svg';
import down from '../../assets/svg/common/down.svg';
import search from '../../assets/svg/common/search.svg';
import vertical from '../../assets/svg/common/vertical.svg';
import bell from '../../assets/svg/common/bell.svg';
import user from '../../assets/svg/common/user.svg';
import React, { useState } from 'react';
import classnames from 'classnames';

interface IItem {
  iconLeft?: string;
  children: React.ReactNode;
  iconRight?: string;
  ml?: {
    ml1: number;
    ml2: number;
  };
}

const NavItem: React.FC<IItem> = ({
  iconLeft,
  children,
  iconRight,
  ml = { ml1: 1.5, ml2: 1 },
}) => {
  return (
    <div className="flex items-center py-4 px-[9px]">
      {iconLeft ? (
        <Image
          src={iconLeft}
          alt="logo"
        />
      ) : null}

      <div
        className={`flex items-center ml-${ml.ml1} text-base font-normal text-[13px]`}
      >
        {children}
      </div>
      <div className={`ml-${ml.ml2}`}>
        {iconRight ? (
          <Image
            src={iconRight}
            alt="logo"
          />
        ) : null}
      </div>
    </div>
  );
};

export default function Slider() {
  const [notification, setNotification] = useState<boolean>(true);
  const router = useRouter();
  return (
    <div className="sticky bg-[white]">
      <div className="flex justify-between px-[31px]">
        <div className="flex">
          <NavItem
            iconLeft={lang}
            iconRight={down}
          >
            Location
          </NavItem>
          <NavItem iconRight={down}>Languages</NavItem>

          <NavItem iconRight={down}>Currency (PEN)</NavItem>
          <NavItem>Exchange rate: 1$ ~ 23.000đ</NavItem>
        </div>

        <div className="flex">
          <NavItem ml={{ ml1: 2, ml2: 2 }}>
            <Image
              width={24}
              height={24}
              src={search}
              alt="logo"
            />
          </NavItem>

          <NavItem ml={{ ml1: 2, ml2: 2 }}>
            <Image
              src={vertical}
              alt="logo"
            />
          </NavItem>

          <NavItem ml={{ ml1: 2, ml2: 2 }}>
            <div className="flex items-center relative">
              <Image
                src={bell}
                alt="logo"
              />
              {notification ? (
                <span className="bg-[#E11F2F] w-2.5 h-2.5 rounded-full absolute top-0 right-0"></span>
              ) : null}
            </div>
            <p className="ml-2">Notification</p>
          </NavItem>

          <NavItem
            ml={{ ml1: 2, ml2: 2 }}
            iconLeft={user}
            iconRight={down}
          >
            Customer Portal Logins
          </NavItem>
        </div>
      </div>
      <div className="w-full h-px bg-[#DDE1E6]"></div>
      <div className="px-[31px] py-4">
        <p className="text-[13px]">home{router.asPath}</p>
      </div>
      <div className="w-full h-px bg-[#DDE1E6]"></div>
    </div>
  );
}
