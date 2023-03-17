const TheCrew = () => {
  return (
    <div className="mx-auto grid max-w-4xl select-none grid-cols-4 grid-rows-[auto,auto] gap-2 p-4">
      <h1 className="col-span-4 text-3xl">The Crew</h1>
      <div className="group h-[7rem] bg-black bg-[url(/avatars/melek.png)] bg-cover bg-center sm:h-[14rem]">
        <p className="flex h-full w-full items-center justify-center bg-black bg-opacity-25 text-2xl text-white opacity-0 transition-all group-hover:opacity-100">
          Melek
        </p>
      </div>
      <div className="group bg-black bg-[url(/avatars/saif.png)] bg-cover bg-center">
        <p className="flex h-full w-full items-center justify-center bg-black bg-opacity-25 text-2xl text-white opacity-0 transition-all group-hover:opacity-100">
          Saif
        </p>
      </div>
      <div className="group bg-black bg-[url(/avatars/houssem.png)] bg-cover bg-center">
        <p className="flex h-full w-full items-center justify-center bg-black bg-opacity-25 text-2xl text-white opacity-0 transition-all group-hover:opacity-100">
          Houssem
        </p>
      </div>
      <div className="group bg-black bg-[url(/avatars/yahya.png)] bg-cover bg-center">
        <p className="flex h-full w-full items-center justify-center bg-black bg-opacity-25 text-2xl text-white opacity-0 transition-all group-hover:opacity-100">
          Yahia
        </p>
      </div>
    </div>
  );
};

export default TheCrew;
