import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="h-[100vh] flex flex-col items-center justify-center text-white relative "
    >
      <div className="absolute mx-auto transform z-4">
        <div className="relative flex flex-col justify-center items-center">
          <span className="text-64">Creative Development Company</span>
          <span className="text-20">The BODA Lab</span>
          <Image
            className="absolute right-[-190px]  z-2"
            src="/images/circle_01.svg"
            alt="right circle image"
            width={737}
            height={737}
            priority
          />
          <Image
            className="absolute left-[200px]  z-3"
            src="/images/circle_02.svg"
            alt="center circle image"
            width={415}
            height={415}
            priority
          />
          <Image
            className="absolute left-[-127px]  z-1"
            src="/images/circle_03.svg"
            alt="left circle image"
            width={378}
            height={378}
            priority
          />
        </div>
      </div>
      <a href="#id-about">
        <Image
          className="absolute bottom-0 z-10"
          src="/images/scroll_down.svg"
          alt="scroll down image"
          width={72}
          height={72}
          priority
        />
      </a>
    </section>
  );
}
