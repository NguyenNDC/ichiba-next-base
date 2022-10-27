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
      <div className="flex min-h-screen">
        <Navbar />
        <section className="w-full bg-[#F2F4F8] min-h-screen">
          <Slider />
          <div className="flex justify-center">
            <div className="w-[64.375rem] pt-6">{children}</div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
