import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <h1 className="bg-[#FF5400] p-2 px-6 text-3xl text-white">Koul Time</h1>
      <div className="flex gap-6">
        <Link
          href={"/merch"}
          className="text-stroke text-stroke-[#FF5400] text-fill-transparent hover:text-fill-[#FF5400] hover:text-stroke-0 text-3xl transition-all"
        >
          merch
        </Link>
        <a
          href="https://ba9chich.com/contact.koultime"
          target="_blank"
          rel="noreferrer"
          className="text-3xl text-[#FF5400] transition-all"
        >
          Support us
        </a>
      </div>
    </header>
  );
};

export default Header;
