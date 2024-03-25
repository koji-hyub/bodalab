import Image from "next/image";

export default function Vision() {
  return (
    <section>
      <div className="py-[120px] text-white">
        <div className="ml-[320px]">
          <div className="text-40">VISION</div>
          <div className="text-16 ml-[80px] mt-[80px]">
            The BODA LAB은 고객사의 니즈를 정확히 파악하여 최상의 완성도와
            만족도를
            <br /> 높은 기술력을 가진 인재들로 프로젝트를 진행하고 있습니다.
          </div>
          <div className="py-[60px]">
            {VISION_ITEMS.map((item, index) => (
              <div
                className="flex justify-between pb-[70px] ml-[144px]"
                key={index}
              >
                <div className="flex flex-col justify-center">
                  <div className="text-80 waterfall leading-normal">
                    {item.title}
                  </div>
                  <div className="text-16">{item.description}</div>
                </div>
                <div>
                  <Image
                    src={`/images/${item.image}.svg`}
                    alt={item.image}
                    width={940}
                    height={540}
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const VISION_ITEMS = [
  {
    title: "Perspective",
    description: "고객사의 눈으로 관점을 바라봅니다.",
    image: "vision_01",
  },
  {
    title: "Expertise",
    description: "다양한 기술력을 가진 인재들을 보유하고 있습니다.",
    image: "vision_02",
  },
  {
    title: "Satisfaction",
    description: "타사보다 높은 만족도와 완성도를 갖추고 있습니다.",
    image: "vision_03",
  },
];
