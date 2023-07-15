import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { Fragment } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const ThemeButton = ({ shrink }: { shrink: boolean }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Switch
      checked={currentTheme === "dark"}
      onChange={() =>
        currentTheme == "dark" ? setTheme("light") : setTheme("dark")
      }
      as={Fragment}
    >
      {({ checked }) => (
        <button
          className={`${checked ? "bg-zinc-200" : "bg-zinc-800"} ${
            shrink ? "h-6 w-14" : "h-6 w-14 sm:h-7 sm:w-16"
          } duration-350 relative inline-flex items-center justify-between  rounded-full transition-all ease-in-out`}
        >
          <span className="sr-only">enable light mode</span>
          <span
            className={`${
              checked
                ? `${shrink ? "translate-x-8" : "translate-x-9"} bg-zinc-800 `
                : "translate-x-1 bg-zinc-200"
            } ${
              shrink ? "h-3 w-5" : "h-3 w-5 sm:h-4 sm:w-6"
            } inline-block transform rounded-full  transition-all`}
          />
          <MoonIcon
            className={`absolute text-zinc-200 ${
              checked
                ? "translate-x-full -translate-y-1/2 rotate-45 opacity-0"
                : "right-2 translate-x-0 translate-y-0 rotate-0 opacity-100  transition-all duration-[600ms] ease-in"
            }`}
          />
          <SunIcon
            className={`absolute  text-zinc-800 ${
              !checked
                ? "-translate-x-full translate-y-1/2 -rotate-45 opacity-0 "
                : "left-2 translate-x-0 translate-y-0 rotate-0 opacity-100 transition-all duration-[600ms] ease-in"
            }`}
          />{" "}
        </button>
      )}
    </Switch>
  );
};

export default ThemeButton;
