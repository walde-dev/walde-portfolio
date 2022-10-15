export default function Header() {
  return (
    <header className="flex w-full justify-center border-b-[0.5px] border-gray-600 border-opacity-75 pt-2 pb-4">
      <div className="flex w-full max-w-5xl flex-row items-center justify-between">
        <span className="font-extralight text-2xl text-white">
          waldemar.
          <span className="gradient bg-clip-text text-2xl text-transparent">
            dev
          </span>
        </span>
      </div>
    </header>
  );
}
