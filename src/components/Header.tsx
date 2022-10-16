export default function Header() {
  return (
    <header className="flex w-full justify-center py-4">
      <div className="flex w-full max-w-5xl flex-row items-center justify-between">
        <h1 className="text-lg">
          <a className="px-3 py-1 underline-gradient gradient cursor-pointer">waldemar.dev</a>
        </h1>
        <div className="flex flex-row gap-6 font-extralight ">
          <a
            className="underline-gradient-only underline-gradient hover:text-white"
            href="work"
          >
            My Work
          </a>
          <a
            className="underline-gradient-only underline-gradient hover:text-white"
            href="contact"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
