import { ReactNode } from "react";

export default function NavigationLinks() {
  return (
    <div className="flex justify-between text-white w-[595px]">
      <NavLink href="#home">HOME</NavLink>
      <NavLink href="#about">ABOUT</NavLink>
      <NavLink href="#project">PROJECTS</NavLink>
      <NavLink href="#contact">CONTACT</NavLink>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href}>
      <span className="px-[32px] py-[24px] hover:text-skylight">
        {children}
      </span>
    </a>
  );
}
