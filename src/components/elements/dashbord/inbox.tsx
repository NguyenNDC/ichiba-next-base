import Box from '@/components/common/Box';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import search from '@/svg/dashbord/search.svg';
import { useState } from 'react';
import classnames from 'classnames';
import A from '@/components/common/A';
import down from '@/svg/common/down-blue.svg';
import B18 from '@/components/common/B/B-18';
import P13 from '@/components/common/P/P-13';

export default function Inbox() {
  let [categories] = useState({
    All: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Unread: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Flagged: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  return (
    <Box>
      <div className="flex justify-between">
        <B18>Inbox</B18>
        <div className='rounded-lg flex w-[14.75rem] py-[6px] px-3 border overflow-hidden border-solid border-1 border-[#DDE1E6]"'>
          <input
            className="text-sm outline-none border-none ml-3 w-full"
            placeholder="Search inbox"
            type="text"
          />
          <Image
            src={search}
            alt="search"
          />
        </div>
      </div>
      <div className="mt-5 w-full">
        <Tab.Group>
          <Tab.List
            className="flex justify-between"
            style={{ borderBottom: '1px solid #DDE1E6' }}
          >
            <div>
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classnames(
                      'text-[black] border-b-[3px] border-none outline-none w-[100px] pb-4 mx-2',
                      selected
                        ? 'bg-white font-bold border-b-[black]'
                        : 'hover:text-[black]'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </div>
            <A
              href="#"
              icon={down}
              className={'flex items-start'}
            >
              We found 168 messages
            </A>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel>sdfjsfhsjdkfhsdjfh</Tab.Panel>
            <Tab.Panel>sdfjsfhsjdkfhsdjfasdasdh</Tab.Panel>
            <Tab.Panel>sdfjsfhsjdkfhdf66666sdjfh</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Box>
  );
}
