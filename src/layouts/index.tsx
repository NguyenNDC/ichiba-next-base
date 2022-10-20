import React from 'react';
import Footer from './Footer';
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
        <main className='w-full'>
          <div>

          </div>
          <div>
            <Slider/>
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
