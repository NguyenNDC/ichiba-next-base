import Inbox from '@/components/elements/dashbord/inbox';
import InforStore from '@/components/elements/dashbord/inforStore';
import MyShipments from '@/components/elements/dashbord/myShipments';
import Total from '@/components/elements/dashbord/totalVailable';
import Track from '@/components/elements/dashbord/track';

export default function Dashboad() {
  return (
    <div className="flex justify-between">
      <div className="w-[712px]">
        <div>
          <InforStore />
        </div>
        <div className="mt-4">
          <MyShipments />
        </div>
        <div className='mt-4'>
          <Inbox/>
        </div>
      </div>
      <div className="w-[294px]">
        <div>
          <Total />
        </div>
        <div className="mt-4">
          <Track />
        </div>
      </div>
    </div>
  );
}
