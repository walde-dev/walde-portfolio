import classNames from "classnames";
import { Fade } from "react-awesome-reveal";

export default function Sidebar() {
  return (
    <div className="fixed left-0 z-[60] hidden h-full w-full max-w-[128px] flex-col justify-end py-2 lg:flex">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mx-auto mb-12 h-full border-l border-violet-500" />
        <Fade direction="left" delay={1500} triggerOnce cascade damping={0.5}>
          <SocialList className="flex-col" />
        </Fade>
        <div className="mx-auto mt-12 h-[128px] border-l border-violet-500" />
      </div>
    </div>
  );
}

function SocialLogo({
  logo,
  href,
  text,
  disabled,
}: {
  logo: JSX.Element;
  href: string;
  text: string;
  disabled?: boolean;
}) {
  if (disabled)
    return (
      <div className="logo-wrapper group relative flex h-8 w-8 flex-row items-center">
        {logo}
      </div>
    );

  return (
    <a
      href={href}
      className="logo-wrapper group relative flex h-8 w-8 flex-row items-center"
      rel="noreferrer"
      target="_blank"
    >
      <>{logo}</>
      <div className="hover-box hidden md:block">
        <span className="hover-box-text visible w-full text-left text-lg font-normal opacity-0 group-hover:opacity-100">
          {text}
        </span>
      </div>
    </a>
  );
}

export function SocialList({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        "flex items-center justify-center gap-8",
        className
      )}
    >
      <SocialLogo
        logo={
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 cursor-pointer fill-gray-800 transition-all duration-300 group-hover:ml-0 group-hover:h-8 group-hover:w-8 group-hover:animate-flip-once group-hover:fill-violet-500 dark:fill-gray-300"
            >
              <path d="M3.87023 4H17.1202C18.3702 4 19.0002 4.59 19.0002 5.79V14.21C19.0002 15.4 18.3702 16 17.1202 16H3.87023C2.62023 16 1.99023 15.4 1.99023 14.21V5.79C1.99023 4.59 2.62023 4 3.87023 4ZM10.4902 12.6L17.2302 7.07C17.4702 6.87 17.6602 6.41 17.3602 6C17.0702 5.59 16.5402 5.58 16.1902 5.83L10.4902 9.69L4.80023 5.83C4.45023 5.58 3.92023 5.59 3.63023 6C3.33023 6.41 3.52023 6.87 3.76023 7.07L10.4902 12.6Z" />
            </svg>
          </>
        }
        href="mailto:hello@waldemar.dev"
        text="hello@waldemar.dev"
      />
      <SocialLogo
        logo={
          <svg
            width="24"
            height="24"
            viewBox="0 0 1200 1227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
            />
          </svg>
        }
        href="https://twitter.com/walde_dev"
        text="@walde_dev"
      />
      <SocialLogo
        logo={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
            />
          </svg>
        }
        href="https://github.com/walde-dev"
        text="@walde-dev"
      />
      <SocialLogo
        logo={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
          >
            <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" />
          </svg>
        }
        href="https://linkedin.com/in/waldemar-panin-5a7729195"
        text="Waldemar Panin"
      />
      <SocialLogo
        logo={
          <div className="flex flex-row items-center justify-center space-x-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="logo opacity-50 group-hover:opacity-100"
            >
              <g clipPath="url(#clip0_322_1707)">
                <path d="M4.044 0.842041C3.00312 1.38294 2.10347 2.1602 1.41716 3.11151C0.730862 4.06281 0.27701 5.1617 0.092 6.32004H0.527C3.332 6.25504 5.531 6.01204 7.327 5.46204C6.547 4.07904 5.595 2.72204 4.453 1.34204L4.452 1.34104L4.044 0.842041ZM0.002 7.32004L0 7.50004C0 9.51704 0.796 11.348 2.091 12.696L2.252 12.372C2.26095 12.3541 2.27096 12.3368 2.282 12.32C3.94 9.79804 5.816 8.29804 7.914 7.62504C8.056 7.57904 8.2 7.53704 8.344 7.49904C8.17602 7.11395 7.99695 6.73379 7.807 6.35904C5.842 6.99204 3.48 7.25204 0.544 7.31904H0.003L0.002 7.32004Z" />
                <path d="M2.85999 13.393C4.18129 14.4364 5.81639 15.0027 7.49999 15C8.39299 15 9.24999 14.844 10.043 14.558V13.838C9.79899 11.903 9.36999 10.128 8.72499 8.43401C8.55499 8.47601 8.38599 8.52401 8.21899 8.57701C6.39699 9.16201 4.69399 10.48 3.13399 12.845L2.86099 13.393H2.85999ZM11.043 14.112C12.0096 13.5933 12.851 12.8692 13.5078 11.9905C14.1647 11.1118 14.6211 10.1 14.845 9.02601L14.28 8.77101C12.654 8.29301 11.139 8.09701 9.72699 8.25601C10.365 9.97601 10.794 11.782 11.039 13.744C11.042 13.764 11.043 13.784 11.043 13.806V14.112ZM14.984 7.99201C15.116 6.0277 14.4673 4.09067 13.179 2.60201L12.882 2.93101C11.712 4.35401 10.376 5.34101 8.75199 6.01301C8.96399 6.43701 9.16199 6.86401 9.34499 7.29701C11.017 7.05701 12.775 7.28301 14.596 7.82201C14.6182 7.82849 14.6399 7.83651 14.661 7.84601L14.984 7.99201ZM12.476 1.88801C11.1053 0.669269 9.33416 -0.0027266 7.49999 8.31526e-06C6.62199 8.31526e-06 5.77999 0.150008 4.99699 0.428008L5.22499 0.706008C6.44499 2.17901 7.45699 3.63501 8.28299 5.12401C9.82599 4.50101 11.049 3.59001 12.117 2.28701C12.1218 2.28089 12.1268 2.27489 12.132 2.26901L12.476 1.88901V1.88801Z" />
              </g>
              <defs>
                <clipPath id="clip0_322_1707">
                  <rect width="24" height="24" />
                </clipPath>
              </defs>
            </svg>
            <span className="rounded-md bg-gradient-to-r from-[#9f6deab8] to-[#7971eec4] px-2 py-1 text-base font-semibold text-violet-500 opacity-0 transition-all duration-300 ease-in group-hover:opacity-100 dark:text-violet-400">
              Soon!
            </span>
          </div>
        }
        href="https://dribbble.com/walde-dev"
        text="@walde-dev"
        disabled
      />
    </div>
  );
}
