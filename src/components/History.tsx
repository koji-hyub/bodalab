import Image from 'next/image';
import { HISTORY_ITEMS } from '~/data/history';
import Timeline from './Timeline';

export default function History() {
    return (
        <section>
            <div className="py-[120px]">
                <div className="bg-white pt-[120px] text-gray-darkest">
                    <div className="w-[1280px] m-auto">
                        <div className="text-40">HISTORY</div>
                        <div className="flex pb-[204px] mt-[88px]">
                            {HISTORY_ITEMS.map((item, index) => (
                                <Timeline key={index} title={item.title} item={item.data} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-[1250px] h-[764px] m-auto pb-[120px] flex justify-between relative">
                    <Image
                        src="/images/content_04.svg"
                        alt="content_04"
                        width={320}
                        height={190}
                        priority
                        className="self-start"
                    />
                    <Image
                        src="/images/content_02.svg"
                        alt="content_02"
                        width={520}
                        height={650}
                        priority
                        className="absolute top-[-150px] left-1/2 transform -translate-x-[53%]"
                    />
                    <Image
                        src="/images/content_03.svg"
                        alt="content_03"
                        width={350}
                        height={380}
                        priority
                        className="self-end"
                    />
                </div>
                <div className="w-[1270px] text-56 mx-auto">
                    <div className="text-white text-center">BODA Lab Co., Ltd.</div>
                    <div className="text-gray-dark text-center">
                        accurately identifies customer needs to achieve the best completeness and satisfaction.
                        <br /> We are working on a project with talented people with high technology.
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <a href="#id-about">
                    <Image src="/images/scroll_down.svg" alt="scroll down image" width={72} height={72} priority />
                </a>
            </div>
        </section>
    );
}
