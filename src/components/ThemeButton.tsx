import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const ThemeButton = ({ shrink }: { shrink: boolean }) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState(
    theme === "system" ? systemTheme : theme
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCurrentTheme(theme === "system" ? systemTheme : theme);
    setMounted(true);
  }, [theme, systemTheme]);

  if (!mounted || currentTheme === null) {
    // Theme data is not loaded yet or the component is not mounted.
    return null;
  }

  return (
    <Switch
      checked={currentTheme === "dark"}
      onChange={() =>
        currentTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
      as={Fragment}
    >
      {({ checked }) => {
        return (
          <button
            className={`${checked ? "bg-zinc-200" : "bg-zinc-800"} ${
              shrink ? "h-6 w-14" : "h-6 w-14 sm:h-7 sm:w-16"
            } duration-350 relative inline-flex items-center justify-between  rounded-full transition-all ease-in-out`}
          >
            <span className="sr-only">enable light mode</span>
            <span
              className={`${
                checked
                  ? `${
                      shrink ? "sm:translate-x-8" : "sm:translate-x-9"
                    } translate-x-8 bg-zinc-800 `
                  : "translate-x-1 bg-zinc-200"
              } ${
                !shrink && "sm:h-4 sm:w-6"
              } inline-block h-3 w-5 transform rounded-full  transition-all`}
            />
            <SunIcon
              className={`absolute text-zinc-200 ${
                checked
                  ? "invisible -translate-y-1/2 translate-x-full rotate-45opacity-0"
                  : "duration-[600ms] visible right-2 translate-x-0 translate-y-0 rotate-0 opacity-100 transition-all ease-in"
              }`}
            />
            <MoonIcon
              className={`absolute  text-zinc-800 ${
                !checked
                  ? "invisible -translate-x-full translate-y-1/2 -rotate-45 opacity-0 "
                  : "duration-[600ms] visible left-2 translate-x-0 translate-y-0 rotate-0 opacity-100 transition-all ease-in"
              }`}
            />{" "}
          </button>
        );
      }}
    </Switch>
  );
};

export default ThemeButton;
