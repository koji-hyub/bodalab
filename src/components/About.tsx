import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="flex ml-[322px] my-[120px]">
        <div className="flex-1 flex flex-col text-white">
          <span className="text-40">ABOUT US</span>
          <span className="text-16 leading-26 ml-[80px] mt-[80px]">
            The BODA LAB은 디지털시대에 발맞춰 클라이언트의 비즈니스를 위한
            <br />
            다양한 기술적 노하우로 완성된 경험을 제공합니다.
            <br />
            우리의 활동은 웹, 앱, 모바일을 넘나들며 세상의 모든 비즈니스 활동에
            강한 영향력을 전달합니다.
          </span>
        </div>
        <div className="w-[1px] mx-[30px]"></div>
        <div className="flex-1 overflow-hidden">
          <Image
            src="/images/content_01.svg"
            alt="content_01"
            width={810}
            height={540}
            priority
          />
          <span className="text-white text-40 w-full whitespace-nowrap text-container">
            <p className="scrolling-text">
              Creative Development Company BODA.Lab
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}
