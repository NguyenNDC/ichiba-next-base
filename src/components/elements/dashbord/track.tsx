import Box from '@/components/common/Box';
import A from '@/components/common/A';
import right from '@/svg/common/right.svg';
import Button from '@/components/common/Button';
import B18 from '@/components/common/B/B-18';

export default function Track() {
  return (
    <Box>
      <B18>Track</B18>
      <div className="mt-2 flex border rounded-lg overflow-hidden border-solid border-1 border-[#DDE1E6]">
        <input
          className="text-xs outline-none border-none ml-3 w-full"
          type="text"
          placeholder="Enter up to 10 number"
        />
        <Button className={'py-[7px] px-[30px]'}>Track</Button>
      </div>
      <div className="flex justify-between mt-5">
        <B18>Notification</B18>
        <A
          href={'#'}
          className={'flex items-center'}
          icon={right}
        >
          View All
        </A>
      </div>
    </Box>
  );
}
