import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full justify-center px-6 md:px-20 py-4">
      <div className="flex md:max-w-5xl w-full flex-row items-center justify-between">
        <h1 className="text-lg">
          <Link href="/">
            <a className="underline-gradient gradient cursor-pointer px-3 py-1">
              waldemar.dev
            </a>
          </Link>
        </h1>
        <div className="flex flex-row gap-6 font-light ">
          <Link href="/work">
            <a className="underline-gradient-only underline-gradient hover:text-white">
              My Work
            </a>
          </Link>
          <Link href="/contact">
            <a className="underline-gradient-only underline-gradient hover:text-white">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
