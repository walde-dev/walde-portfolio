export default function Header() {
  return (
    <header className="flex w-full justify-center border-b-[0.5px] border-gray-600 border-opacity-60 pt-2 pb-4">
      <div className="flex w-full max-w-5xl flex-row items-center justify-between">
        <h1 className="text-lg  ">waldemar.dev</h1>
        <div className="flex flex-row gap-6 font-extralight">
          <span className="">My Work</span>
          <span>Contact</span>
        </div>
      </div>
    </header>
  );
}
