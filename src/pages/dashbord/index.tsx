import A from '@/components/common/a';
import Box from '@/components/common/Box';
import Image from 'next/image';
import group from '@/svg/group.svg';

export default function Dashboad() {
  return (
    <div className="flex justify-between">
      <div className="w-[712px]">
        <Box className='flex'>
          <div className='flex justify-center items-center'>
            <div>
              <Image src={group} alt="logo"/>
            </div>
            <div className='w-[303px]'>
              <p>duchungyt1999</p>
              <p>duchungyt@gmail.com</p>
              <p>Địa chỉ kho hàng của tôi</p>
            </div>
          </div>
          <div>
          Vui lòng kích hoạt tài khoản để bắt đầu trải nghiệm dịch vụ vận chuyển. <A href={'#'}>Kích hoạt</A>
          </div>
        </Box>
      </div>
      <div className="w-[294px]">
        <Box></Box>
      </div>
    </div>
  );
}
