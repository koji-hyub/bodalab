import Image from "next/image";
import { HISTORY_ITEMS } from "~/data/history";
import Timeline from "./Timeline";

export default function Expertise() {
  return (
    <section>
      <div className="">
        <div className="text-white">
          <div className="w-[1280px] m-auto">
            <div className="text-40">EXPERTISE</div>
            <div className="text-16 ml-[80px] mt-[80px]">
              The BODA LAB은 서비스와 사용자를 고려하여 다양한 경험을 제공하며,
              <br />
              거쳐간 모든 곳에서 지속적인 성장이 이루어질 수 있도록 함께합니다.
            </div>
            <div className="w-[1010px] mx-auto flex justify-between pb-[204px] pt-[88px]">
              <div>
                <div className="text-sky-blue">01</div>
                <div className="text-32">
                  UX
                  <br />
                  Consulting
                </div>
                <div className="text-14">UX 컨설팅</div>
              </div>
              <div>
                <div className="text-sky-blue">02</div>
                <div className="text-32">
                  Plarform
                  <br />
                  Building
                </div>
                <div className="text-14">웹사이트 구축</div>
              </div>
              <div>
                <div className="text-sky-blue">03</div>
                <div className="text-32">
                  Mobile
                  <br />
                  App & Web
                </div>
                <div className="text-14">모바일 앱 & 웹</div>
              </div>
              <div>
                <div className="text-sky-blue">04</div>
                <div className="text-32">
                  Service
                  <br />
                  Management
                </div>
                <div className="text-14">서비스 운영</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
