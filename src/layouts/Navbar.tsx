import Image from 'next/image';
import logo from '../../assets/svg/logo.svg';
import plus from '../../assets/svg/common/plus.svg';
import bars from '../../assets/svg/common/bars-3.svg';
import warehouse from '../../assets/svg/common/warehouse.svg';
import intergrations from '../../assets/svg/common/intergrations.svg';
import analytics from '../../assets/svg/common/analytics.svg';
import profile from '../../assets/svg/common/profile.svg';
export default function Navbar() {
  return (
    <div
      className="px-4 pt-3.5"
      style={{ width: '272px', boxShadow: '2px 0 5px #c3c3c3', zIndex: 2 }}
    >
      <Image
        width={147}
        height={40.02}
        src={logo}
        alt="logo"
      />
      <div
        className="w-full flex justify-between bg-[var(--color-bg-orange)] rounded-lg text-[var(--color-bg-primary)]"
        style={{ padding: '12px 24px', marginTop: '50px' }}
      >
        <p>Create shipment</p>
        <Image
          src={plus}
          alt="logo"
        />
      </div>
      <div>
        <div className="mt-6">
          <div className="flex">
            <Image
              src={bars}
              alt="logo"
            />
            <p className="ml-1.5 font-semibold ">Manage shipment</p>
          </div>
          <div
            className="mt-3 ml-1 px-3 p-2"
            style={{ borderLeft: '2px solid#DDE1E6' }}
          >
            <p>All shipment</p>
            <p className="mt-3">Save shipment</p>
            <p className="mt-3">Rate & Time</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex">
            <Image
              src={warehouse}
              alt="logo"
            />
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
            <Image
              src={intergrations}
              alt="logo"
            />
            <p className="ml-1.5 font-semibold ">Integrations</p>
          </div>
          <div
            className="mt-3 ml-1 px-3 p-2"
            style={{ borderLeft: '2px solid#DDE1E6' }}
          >
            <p>Marketplace</p>
            <p className="mt-3">Integrations list</p>
            <p className="mt-3">Order management</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex">
            <Image
              src={analytics}
              alt="logo"
            />
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
            <Image
              src={profile}
              alt="logo"
            />
            <p className="ml-1.5 font-semibold ">My profile</p>
          </div>
          <div
            className="mt-3 ml-1 px-3 p-2"
            style={{ borderLeft: '2px solid#DDE1E6' }}
          >
            <p>My information</p>
            <p className="mt-3">Address Book</p>
            <p className="mt-3">Wallet</p>
            <p className="mt-3">Notification</p>
            <p className="mt-3">Account Verification</p>
            <p className="mt-3">Security</p>
            <p className="mt-3">Managing Complaints</p>
          </div>
        </div>
      </div>
    </div>
  );
}
