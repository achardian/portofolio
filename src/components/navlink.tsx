import Link, { LinkProps } from "next/link";

const Navlink = ({
  href,
  children,
  inView,
  ...props
}: LinkProps & { children: React.ReactNode; inView?: boolean }) => {
  return (
    <Link
      href={href}
      className={`group flex w-fit items-center gap-5 font-semibold tracking-wide text-slate-400 hover:text-[#5B8FB9] ${inView && "text-[#5B8FB9]"}`}
    >
      <span
        className={`block h-[2px] w-10 bg-slate-400 transition-all duration-300 ease-in-out group-hover:w-20 group-hover:bg-slate-200 ${inView && "w-20"}`}
      ></span>
      <span>{children}</span>
    </Link>
  );
};

export default Navlink;
