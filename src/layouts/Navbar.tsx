import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/themeContext';

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className="px-4 pt-3.5"
      style={{ width: '272px', boxShadow: '2px 0 5px #c3c3c3' }}
    >
      <div className="text-3xl text-[var(--color-bg-orange)]">LOGO</div>
      <div
        className="w-full flex justify-between bg-[var(--color-bg-orange)] rounded-lg text-[var(--color-bg-primary)]"
        style={{ padding: '12px 24px', marginTop: '50px' }}
      >
        <p>Create shipment</p>
        <p>+</p>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex">
            <p className="text-[var(--color-bg-orange)]">=</p>
            <p className="ml-1.5 font-semibold ">Manage shipment</p>
          </div>
          <div
            className="mt-3 ml-1 px-3 p-2"
            style={{ borderLeft: '2px solid#DDE1E6' }}
          >
            <p>All shipment</p>
            <p className='mt-3'>Save shipment</p>
            <p className='mt-3'>Rate & Time</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex">
            <p className="text-[var(--color-bg-orange)]">=</p>
            <p className="ml-1.5 font-semibold ">Warehouse information</p>
          </div>
          {/* <div
            className="mt-3 ml-1 px-3 p-2"
            style={{ borderLeft: '2px solid#DDE1E6' }}
          >
            <p>All shipment</p>
            <p className='mt-3'>Save shipment</p>
            <p className='mt-3'>Rate & Time</p>
          </div> */}
        </div>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex">
            <p className="text-[var(--color-bg-orange)]">=</p>
            <p className="ml-1.5 font-semibold ">Integrations</p>
          </div>
          <div
            className="mt-3 ml-1 px-3 p-2"
            style={{ borderLeft: '2px solid#DDE1E6' }}
          >
            <p>Marketplace</p>
            <p className='mt-3'>Integrations list</p>
            <p className='mt-3'>Order management</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex">
            <p className="text-[var(--color-bg-orange)]">=</p>
            <p className="ml-1.5 font-semibold ">Analytics</p>
          </div>
          {/* <div
            className="mt-3 ml-1 px-3 p-2"
            style={{ borderLeft: '2px solid#DDE1E6' }}
          >
            <p>Marketplace</p>
            <p className='mt-3'>Integrations list</p>
            <p className='mt-3'>Order management</p>
          </div> */}
        </div>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex">
            <p className="text-[var(--color-bg-orange)]">=</p>
            <p className="ml-1.5 font-semibold ">My profile</p>
          </div>
          <div
            className="mt-3 ml-1 px-3 p-2"
            style={{ borderLeft: '2px solid#DDE1E6' }}
          >
            <p>My information</p>
            <p className='mt-3'>Address Book</p>
            <p className='mt-3'>Wallet</p>
            <p className='mt-3'>Notification</p>
            <p className='mt-3'>Account Verification</p>
            <p className='mt-3'>Security</p>
            <p className='mt-3'>Managing Complaints</p>
          </div>
        </div>
      </div>
    </div>
  );
}