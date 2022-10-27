import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import P13 from './P/P-13';
import Image from 'next/image';

interface props {
  title?: string;
  content?: string[];
  iconLeft?: string;
  iconRight?: string;
}

const MenuItem = ({ content }: any) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? 'bg-violet-500 text-white' : 'text-gray-900'
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        >
          {active ? (
            <EditActiveIcon
              className="mr-2 h-5 w-5"
              aria-hidden="true"
            />
          ) : (
            <EditInactiveIcon
              className="mr-2 h-5 w-5"
              aria-hidden="true"
            />
          )}
          {content}
        </button>
      )}
    </Menu.Item>
  );
};

interface IItem {
  iconLeft?: string;
  children: React.ReactNode;
  iconRight?: string;
  ml?: {
    ml1: number;
    ml2: number;
  };
}

export const NavItem: React.FC<IItem> = ({
  iconLeft,
  children,
  iconRight,
  ml = { ml1: 1.5, ml2: 1 },
}) => {
  return (
    <div className="flex items-center py-4 px-[9px]">
      {iconLeft ? (
        <Image
          width={'22'}
          height={'22'}
          src={iconLeft}
          alt="logo"
        />
      ) : null}

      <div className={`flex items-center ml-${ml.ml1}`}>{children}</div>
      <div className={`ml-${ml.ml2}`}>
        {iconRight ? (
          <Image
            width={'12'}
            height={'12'}
            src={iconRight}
            alt="logo"
          />
        ) : null}
      </div>
    </div>
  );
};

export default function Menus({ title, content, iconLeft, iconRight }: props) {
  return (
    <div>
      <Menu
        as="div"
        className="relative inline-block text-left"
      >
        <div>
          <Menu.Button className="bg-[white] inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-black">
            <NavItem
              iconLeft={iconLeft}
              iconRight={iconRight}
            >
              <P13>{title ? title : 'Option'}</P13>
            </NavItem>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {content
              ? content.map((val: string, index: number) => (
                  <MenuItem
                    key={index}
                    content={val}
                  />
                ))
              : null}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}
