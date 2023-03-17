const TheCrew = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto,auto] gap-2 p-4">
      <h1 className="col-span-4 text-3xl">The Crew</h1>
      <div className="h-[7rem] bg-black bg-[url(/avatars/melek.png)] bg-cover bg-center"></div>
      <div className="h-[7rem] bg-black bg-[url(/avatars/saif.png)] bg-cover bg-center"></div>
      <div className="h-[7rem] bg-black bg-[url(/avatars/houssem.png)] bg-cover bg-center"></div>
      <div className="h-[7rem] bg-black bg-[url(/avatars/yahya.png)] bg-cover bg-center"></div>
    </div>
  );
};

export default TheCrew;
