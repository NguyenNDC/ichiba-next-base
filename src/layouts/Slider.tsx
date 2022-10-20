export default function Slider() {
  return (
    <div className="fixed" style={{padding: "17px 44px"}}>
      <div className="flex justify-between">
        <div className="grid grid-cols-4 gap-1">
          <div className="flex">
            <p>#</p>
            <p>Location</p>
            <p>^</p>
          </div>
          <div className="flex">
            <p>#</p>
            <p>Languages</p>
            <p>^</p>
          </div>
          <div className="flex">
            <p>#</p>
            <p>Currency (PEN)</p>
            <p>^</p>
          </div>
          <div className="flex">
            <p>#</p>
            <p>Exchange rate: 1$ ~ 23.000đ</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex">
            <p>Search</p>
          </div >
          <div className="flex">
            <p>&</p>
            <p>Notification</p>
          </div>
          <div className="flex">
            <p>&</p>
            <p>Customer Portal Logins </p>
            <p>^</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
