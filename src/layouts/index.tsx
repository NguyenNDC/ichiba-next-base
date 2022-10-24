import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';

export interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className='flex min-h-screen'>
        <Navbar />
        <section className='w-full bg-[#E5E5E5] min-h-screen'>
          <Slider />
          <div className='flex justify-center p-10'>
            <div style={{ width: '1200px', minWidth: 'auto' }}>{children}</div>
          </div>
        </section>
      </div>
    </>
  );
}
