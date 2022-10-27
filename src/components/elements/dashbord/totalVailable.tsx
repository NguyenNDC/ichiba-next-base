import A from '@/components/common/A';
import B20 from '@/components/common/B/B-20';
import Box from '@/components/common/Box';
import { P12_500 } from '@/components/common/P/P-12';
import right from '@/svg/common/right.svg';

export default function Total() {
  return (
    <Box>
      <div className="flex justify-between items-center">
        <div>
          <P12_500>Total Available</P12_500>
          <B20 className={'mt-2'}>đ846.464,513</B20>
        </div>
        <A
          href={'#'}
          icon={right}
          className={'flex'}
        >
          Deposit
        </A>
      </div>
    </Box>
  );
}
