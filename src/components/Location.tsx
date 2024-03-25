import Image from "next/image";
import { HISTORY_ITEMS } from "~/data/history";
import Timeline from "./Timeline";
import LocationInfo from "./LocationInfo";

export default function Location() {
  return (
    <section>
      <div className="">
        <div className="text-white bg-map h-[1000px] bg-left-bottom">
          <div className="w-[1280px] m-auto ">
            <div className="text-190 waterfall leading-normal">Welcome!</div>
            <div className="text-24 ml-[455px]">BODA LAB</div>
            <div className="mt-[140px]">
              <div className="text-32">Head Office</div>
              {LOCATION_INFO_ITEMS.map((item, index) => (
                <LocationInfo
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOCATION_INFO_ITEMS = [
  {
    title: "Address",
    content:
      "서울특별시 금천구 가산디지털2로 169-16, 907호 (가산하우스디퍼스타)",
  },
  { title: "e-mail", content: "bodalab@bodalab.com" },
  { title: "tel", content: "010-1234-5678" },
  { title: "fax", content: "010-1234-5678" },
];
