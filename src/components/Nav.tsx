import { cn } from "../utility/cn";
import { useEffect, useRef, useState } from "react";

const Nav = ({
  onClick,
  showNavList,
  currentPage = 0,
  theme,
}: {
  onClick: () => void;
  showNavList: boolean;
  currentPage: number;
  theme: string;
}) => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentRef = navbarRef?.current;

      if (currentRef && !showNavList) {
        if (currentScrollY < 50 || currentScrollY < lastScrollY) {
          // Show navbar
          currentRef.style.top = "0";
        } else {
          // Hide navbar
          currentRef.style.top = "-100px";
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, showNavList]);

  return (
    <div
      ref={navbarRef}
      className={cn(
        "bg-inherit transition-all duration-300 z-10 fixed top-0 px-[12px] flex justify-between w-full items-center no-scrollbar overflow-hidden",
        {
          "bg-inherit": !showNavList,
        },
      )}
    >
      {/*top left*/}
      <div
        className="flex items-center gap-[14px] text-[22px] transition-transform duration-500"
        style={{
          transform: showNavList ? "translateY(-100px)" : "translateY(0)",
        }}
      >
        <span className="font-bold text-[30px]">
          <img src="/logo-nav.png" alt="portfolioLogo" className="size-16" />
        </span>
        <span className="poppins-semibold">Frontend Fusion</span>
      </div>

      <button
        onClick={onClick}
        className={cn(
          "relative h-[36px] w-[36px] [&>span]:w-[36px] [&>span]:h-[2px] mx-[4px] [&>span]:bg-[#000000] justify-center flex flex-col space-y-2",
          {
            "[&>span]:bg-[#fff]": showNavList && theme === "dark",
          },
        )}
      >
        <span
          className={cn({
            "rotate-45 absolute top-4": showNavList,
          })}
        />
        <span
          className={cn({
            hidden: showNavList,
          })}
        />
        <span
          className={cn({
            "-rotate-45 absolute top-4": showNavList,
          })}
        />
      </button>

      <NavList
        currentPage={currentPage}
        showNavList={showNavList}
        onClick={onClick}
      />
    </div>
  );
};

export default Nav;
const list = [
  "01 TOP",
  "02 ABOUT ME",
  "03 MY SERVICES",
  "04 SKILL",
  "05 EXPERIENCES",
  "06 PROJECTS",
  "07 HOW I WORK",
  "08 CONTACT",
];
export const NavList = ({
  currentPage,
  showNavList,
  onClick,
  isDesktop,
}: {
  currentPage: number;
  showNavList?: boolean;
  onClick?: () => void;
  isDesktop?: boolean;
}) => {
  return (
    <div
      className={cn(
        "p-5 fixed bg-inherit h-full w-28 overflow-x-scroll no-scrollbar transition-transform duration-500",
        {
          "inset-0": !isDesktop,
          "right-0 h-fit bottom-0 top-0 my-auto": isDesktop,
        },
      )}
      style={{
        transform: !showNavList ? "translateX(-100%)" : "translateX(0)",
      }}
    >
      <ul className="mt-6 poppins-medium h-full border-l-2 border-black/50 text-[16px]  gap-2 flex flex-col">
        {list.map((item, index) => (
          <li
            onClick={() => {
              window.location.hash = "tab_" + index;
              onClick?.();
            }}
            key={item}
            className={cn("w-24 -ml-[2px] h-11 z-9 flex items-center pl-8", {
              "border-l-2 border-l-black relative overflow-hidden":
                currentPage === index,
              "hover:bg-black/15": currentPage !== index,
            })}
          >
            <a href={"#tab_" + (index + 1)}>{item}</a>
            {currentPage === index && (
              <span className="bg-black/15 block absolute inset-0 w-full animate-fade" />
            )}
          </li>
        ))}
        <li className="flex flex-col pl-8 py-5">
          <span>darejhamza@gmail.com</span>
          <span>+49 176 60387683</span>
        </li>
      </ul>
    </div>
  );
};
