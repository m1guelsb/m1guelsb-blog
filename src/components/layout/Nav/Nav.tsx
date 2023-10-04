import { NavItem } from "./NavItem";

export const Nav = () => {
  return (
    <nav role="navigation" className="flex gap-[2.5rem] items-center">
      <NavItem title="Blog" href="/blog" />
      <NavItem title="Projetos" href="/projects" />
      <NavItem title="Sobre mim" href="/about" />
    </nav>
  );
};
