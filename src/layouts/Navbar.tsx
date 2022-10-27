import Image from 'next/image';
import logo from '../../assets/svg/logo.svg';
import plus from '../../assets/svg/common/plus.svg';
import bars from '../../assets/svg/common/bars-3.svg';
import warehouse from '../../assets/svg/common/warehouse.svg';
import intergrations from '../../assets/svg/common/intergrations.svg';
import analytics from '../../assets/svg/common/analytics.svg';
import profile from '../../assets/svg/common/profile.svg';
import Button from '@/components/common/Button';
import B14 from '@/components/common/B/B-14';
import P13 from '@/components/common/P/P-13';
import help from '@/svg/common/help.svg';
import B12 from '@/components/common/B/B-12';

export default function Navbar() {
  return (
    <div className=" z-[2]">
      <div
        className="px-4 py-3.5 w-[17rem]"
        style={{ boxShadow: '2px 0 5px #c3c3c3' }}
      >
        <Image
          width={147}
          height={40.02}
          src={logo}
          alt="logo"
        />
        <Button
          icon={plus}
          className={'px-6 py-3 w-full mt-11'}
        >
          Create shipment
        </Button>
        <div>
          <div className="mt-6">
            <div className="flex">
              <Image
                src={bars}
                alt="logo"
              />
              <B14 className="ml-1.5">Manage shipment</B14>
            </div>
            <div
              className="mt-3 ml-1 px-3 p-2"
              style={{ borderLeft: '2px solid#DDE1E6' }}
            >
              <P13>All shipment</P13>
              <P13 className="mt-3">Save shipment</P13>
              <P13 className="mt-3">Rate & Time</P13>
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
              <B14 className="ml-1.5">Warehouse information</B14>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-6">
            <div className="flex">
              <Image
                src={intergrations}
                alt="logo"
              />
              <B14 className="ml-1.5">Integrations</B14>
            </div>
            <div
              className="mt-3 ml-1 px-3 p-2"
              style={{ borderLeft: '2px solid#DDE1E6' }}
            >
              <P13>Marketplace</P13>
              <P13 className="mt-3">Integrations list</P13>
              <P13 className="mt-3">Order management</P13>
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
              <B14 className="ml-1.5">Analytics</B14>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-6">
            <div className="flex">
              <Image
                src={profile}
                alt="logo"
              />
              <B14 className="ml-1.5">My profile</B14>
            </div>
            <div
              className="mt-3 ml-1 px-3 p-2"
              style={{ borderLeft: '2px solid#DDE1E6' }}
            >
              <P13>My information</P13>
              <P13 className="mt-3">Address Book</P13>
              <P13 className="mt-3">Wallet</P13>
              <P13 className="mt-3">Notification</P13>
              <P13 className="mt-3">Account Verification</P13>
              <P13 className="mt-3">Security</P13>
              <P13 className="mt-3">Managing Complaints</P13>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 mt-6">
        <Image
          src={help}
          alt="gelp"
        />
        <div className="ml-4">
          <P13>Need help?</P13>
          <B12>Contact the Janbox help</B12>
        </div>
      </div>
    </div>
  );
}
