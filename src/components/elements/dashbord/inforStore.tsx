import A from '@/components/common/A';
import Box from '@/components/common/Box';
import Image from 'next/image';
import { Fragment } from 'react';
import group from '@/svg/dashbord/group.svg';
import right from '@/svg/common/right.svg';
import P20 from '@/components/common/P/P-20';
import P13 from '@/components/common/P/P-13';

export default function InforStore() {
  return (
    <Fragment>
      <Box className="flex">
        <div className="flex justify-center items-center">
          <div>
            <Image
              width={'51'}
              height={'44'}
              src={group}
              alt="logo"
            />
          </div>
          <div className="ml-[24px]">
            <P20>duchungyt1999</P20>
            <div className="flex items-center">
              <P13>duchungyt@gmail.com</P13>{' '}
              <P13 className={'text-[#687077] ml-1'}>Verify</P13>
              <A
                href={'#'}
                icon={right}
                className={'ml-3, flex'}
              >
                Thay đổi
              </A>
            </div>
            <div className="flex items-center">
              <P13>Địa chỉ kho hàng của tôi</P13>
              <A
                href={'#'}
                icon={right}
                className={'ml-3 flex'}
              >
                Chi tiết
              </A>
            </div>
          </div>
        </div>
        <div className="w-[1px] mx-[24px] bg-[#DDE1E6]"></div>
        <div className="max-w-[252px]">
          <div>
            <P13 style={{ display: 'initial' }}>
              Vui lòng kích hoạt tài khoản để bắt đầu trải nghiệm dịch vụ vận
              chuyển.
            </P13>
            <A
              className="inline-block"
              href={'#'}
            >
              Kích hoạt
            </A>
          </div>
        </div>
      </Box>
    </Fragment>
  );
}
