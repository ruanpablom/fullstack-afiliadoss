import { NavLink } from "react-router-dom";

type HeaderProps = {
  author: string;
};

type NavItem = {
  link: string;
  label: string;
};

const links: NavItem[] = [
  { link: "/", label: "_upload-transactions" },
  { link: "/sellers", label: "_sellers" },
];

export function Header({ author }: HeaderProps): JSX.Element {
  return (
    <nav className="flex w-full border-b border-slate-800 z-20">
      <div className="w-60 flex items-center pl-6 py-4 border-r border-slate-800">
        {author}
      </div>
      {links.map((link) => (
        <NavLink
          key={link.label}
          className="px-8 py-4 border-r border-slate-800 hover:border-b-[#FEA55F]/[0.33] hover:border-b-[3px]"
          style={({ isActive }) =>
            isActive ? { borderBottom: "3px solid #FEA55F", color: "#FFF" } : {}
          }
          to={link.link}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
