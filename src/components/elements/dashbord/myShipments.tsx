import A from '@/components/common/A';
import B18 from '@/components/common/B/B-18';
import B20 from '@/components/common/B/B-20';
import Box from '@/components/common/Box';
import P14 from '@/components/common/P/P-14';
import right from '@/svg/common/right.svg';

interface data {
  title: string;
  number: number;
}

export default function MyShipments() {
  const data: data[] = [
    {
      title: 'Create',
      number: 0,
    },
    {
      title: 'In original storaga',
      number: 21,
    },
    {
      title: 'International shipping',
      number: 11,
    },
    {
      title: 'Compeleted',
      number: 5,
    },
  ];
  return (
    <Box>
      <div className="flex justify-between items-center">
        <div>
          <B18 className="font-bold text-lg leading-[30px]">My shipments</B18>
          <P14 className={'text-[#687077]'}>Past 60 days of activity</P14>
        </div>
        <div>
          <A
            className="flex"
            href={'#'}
            icon={right}
          >
            View all shipments
          </A>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        {data.map((data: data, index: number) => (
          <div
            key={index}
            className="hover:bg-[#F2F4F8] w-[170px] rounded-xl py-4 px-2"
          >
            <B20 className="text-center">{data.number}</B20>
            <P14 className="text-center mt-2">{data.title}</P14>
          </div>
        ))}
      </div>
    </Box>
  );
}
