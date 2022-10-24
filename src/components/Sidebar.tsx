import { Fade, Slide } from "react-awesome-reveal";
import { BackgroundGlow } from "../pages";

export default function Sidebar() {
  return (
    <div className="fixed left-0 hidden h-full w-full max-w-[128px] flex-col justify-end py-2 md:flex">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mx-auto mb-12 h-full border-l border-violet-500" />
        <div className="flex flex-col items-center justify-center gap-12">
          <Fade direction="left" delay={3500} triggerOnce cascade damping={0.5}>
            <SocialLogo
              logo={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="logo"
                >
                  <path d="M3.87023 4H17.1202C18.3702 4 19.0002 4.59 19.0002 5.79V14.21C19.0002 15.4 18.3702 16 17.1202 16H3.87023C2.62023 16 1.99023 15.4 1.99023 14.21V5.79C1.99023 4.59 2.62023 4 3.87023 4ZM10.4902 12.6L17.2302 7.07C17.4702 6.87 17.6602 6.41 17.3602 6C17.0702 5.59 16.5402 5.58 16.1902 5.83L10.4902 9.69L4.80023 5.83C4.45023 5.58 3.92023 5.59 3.63023 6C3.33023 6.41 3.52023 6.87 3.76023 7.07L10.4902 12.6Z" />
                </svg>
              }
              href="mailto:info@waldemar.dev"
              text="info@waldemar.dev"
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
                  <path d="M23.6425 4.93708C22.8075 5.30708 21.9105 5.55708 20.9675 5.67008C21.9405 5.08787 22.6685 4.17154 23.0155 3.09208C22.1014 3.63507 21.1009 4.01727 20.0575 4.22208C19.3559 3.47294 18.4266 2.9764 17.4138 2.80955C16.4011 2.6427 15.3616 2.81487 14.4568 3.29933C13.5519 3.78379 12.8323 4.55344 12.4097 5.48878C11.9871 6.42412 11.8851 7.47283 12.1195 8.47208C10.2672 8.37907 8.45515 7.89763 6.80095 7.05898C5.14674 6.22034 3.68736 5.04324 2.51752 3.60408C2.11752 4.29408 1.88752 5.09408 1.88752 5.94608C1.88708 6.71307 2.07596 7.46832 2.4374 8.14481C2.79885 8.8213 3.32168 9.39812 3.95952 9.82408C3.2198 9.80054 2.4964 9.60066 1.84952 9.24108V9.30108C1.84945 10.3768 2.22156 11.4195 2.90271 12.2521C3.58386 13.0847 4.53209 13.656 5.58652 13.8691C4.90031 14.0548 4.18086 14.0821 3.48252 13.9491C3.78002 14.8747 4.35952 15.6841 5.13989 16.264C5.92026 16.8439 6.86244 17.1653 7.83452 17.1831C6.18436 18.4785 4.14641 19.1812 2.04852 19.1781C1.6769 19.1782 1.3056 19.1565 0.936523 19.1131C3.066 20.4823 5.54486 21.2089 8.07652 21.2061C16.6465 21.2061 21.3315 14.1081 21.3315 7.95208C21.3315 7.75208 21.3265 7.55008 21.3175 7.35008C22.2288 6.69105 23.0154 5.87497 23.6405 4.94008L23.6425 4.93708V4.93708Z" />
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                  />
                </svg>
              }
              href="https://github.com/walde-dev"
              text="@walde-dev"
            />
          </Fade>
        </div>
        <div className="mx-auto mt-12 h-[128px] border-l border-violet-500" />
      </div>
    </div>
  );
}

function SocialLogo({
  logo,
  href,
  text,
}: {
  logo: JSX.Element;
  href: string;
  text: string;
}) {
  return (
    <a
      href={href}
      className="logo-wrapper group relative flex h-8 w-8 flex-row items-center"
    >
      {logo}
      <div className="hover-box">
        <span className="hover-box-text w-full text-left text-lg font-normal">
          {text}
        </span>
      </div>
    </a>
  );
}
