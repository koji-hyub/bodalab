export default function Footer() {
  return (
    <div className="bg-footer">
      <div className="flex justify-between items-center max-w-[1920px] w-full h-[206px] px-[80px] text-white text-14">
        <div className="text-32">
          THE
          <br />
          BODA LAB
        </div>
        <div className="flex">
          <div>
            <span>Mail</span>
            <span className="ml-[8px]">bodalab@bodalab.com</span>
          </div>
          <div className="ml-[20px]">
            <span>Tel</span>
            <span className="ml-[8px]">010-1234-5678</span>
          </div>
        </div>
        <div>© 2024 BODA LAB</div>
      </div>
    </div>
  );
}
