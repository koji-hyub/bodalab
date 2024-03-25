import Image from "next/image";
import NavigationLinks from "./NavigationLinks";

export default function Header() {
  return (
    <div className="flex justify-between items-center max-w-[1920px] w-full h-[120px] px-[80px] fixed t-0 l-0 z-100 bg-gray-darkest">
      <Image
        src="/images/logo.svg"
        alt="Boda Logo"
        width={140}
        height={62}
        priority
      />
      <NavigationLinks />
    </div>
  );
}
