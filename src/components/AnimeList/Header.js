import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-color-primary">{title}</h1>

        <Link href={linkHref} className="text-xl underline text-color-primary hover:text-color-accent transition-all ">
          {linkTitle}
        </Link>
      </div>
    </div>
  );
};

export default Header;
