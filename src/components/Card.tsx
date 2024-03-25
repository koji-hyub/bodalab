import Image from "next/image";
import Badge from "./Badge";

export default function Card() {
  return (
    <div className="mb-[100px]">
      <div>
        <Image
          src={`/images/content_01.svg`}
          alt=""
          width={624}
          height={396}
          priority
        />
      </div>
      <div>
        <div className="mt-[24px] flex justify-between text-18">
          <div>신한유니버설앱 구축</div>
          <div className="text-gray-lighter">2023.12</div>
        </div>
        <div className="mt-[18px]">신한은행</div>
        <div className="mt-[24px] flex gap-[10px]">
          <Badge skill="html" />
          <Badge skill="css" />
          <Badge skill="js" />
        </div>
      </div>
    </div>
  );
}
