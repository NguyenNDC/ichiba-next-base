export default function Slider() {
  return (
    <div
      className="sticky bg-[white]"
      style={{ padding: '17px 44px', top: 0 }}
    >
      <div className="flex justify-between">
        <div className="flex">
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
        <div className="flex">
          <div className="flex">
            <p>Search</p>
          </div>
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
