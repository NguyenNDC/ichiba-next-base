import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { NavItem } from '@/components/common/Menu';
import P13 from '@/components/common/P/P-13';
import down from '@/svg/common/down.svg';

interface props {
  title: string;
  content: string[];
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

export default function Menus({ title, content = ['cuong', 'demo'] }: props) {
  return (
    <div>
      <div className="fixed w-56 text-right">
        <Menu
          as="div"
          className="relative inline-block text-left"
        >
          <div>
            <Menu.Button className="bg-[white] inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-black">
              <NavItem iconRight={down}>
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
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
