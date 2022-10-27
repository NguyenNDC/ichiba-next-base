import Image from 'next/image';
import { useRouter } from 'next/router';
import lang from '@/svg/common/lang.svg';
import down from '@/svg/common/down.svg';
import search from '@/svg/common/search.svg';
import vertical from '@/svg/common/vertical.svg';
import bell from '@/svg/common/bell.svg';
import user from '@/svg/common/user.svg';
import React, { useState } from 'react';
import P13 from '@/components/common/P/P-13';
import Menus, { NavItem } from '@/components/common/Menu';

export default function Slider() {
  const [notification, setNotification] = useState<boolean>(true);
  const router = useRouter();
  return (
    <div className="sticky top-0 bg-[white]">
      <div className="flex justify-between px-[31px]">
        <div className="flex">
          <Menus
            title={'Location'}
            iconLeft={lang}
            iconRight={down}
            content={['cuong', 'demo']}
          />
          <Menus
            title={'Languages'}
            iconRight={down}
            content={['cuong', 'demo']}
          />

          <Menus
            title={'Currency (PEN)'}
            iconRight={down}
            content={['cuong', 'demo']}
          />

          <NavItem>
            <P13>Exchange rate: 1$ ~ 23.000đ</P13>
          </NavItem>
        </div>

        <div className="flex">
          <NavItem ml={{ ml1: 2, ml2: 2 }}>
            <Image
              width={'22'}
              height={'22'}
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

          <NavItem>
            <div className="flex items-center relative">
              <Image
                src={bell}
                alt="logo"
              />
              {notification ? (
                <span className="bg-[#E11F2F] w-2.5 h-2.5 rounded-full absolute top-0 right-0"></span>
              ) : null}
            </div>
            <P13 className="ml-2">Notification</P13>
          </NavItem>

          <Menus
            title={'Customer Portal Logins'}
            iconLeft={user}
            iconRight={down}
            content={['cuong', 'demo']}
          />
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
