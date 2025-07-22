import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import { ReactNode } from "react";
import { GoArrowLeft } from "react-icons/go";
import { cn } from "../utility/cn";
const Projects = () => {
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent,
    );

  const Item = ({ children, href }: { children: ReactNode; href: string }) => (
    <a
      href={href}
      target="_blank"
      className="relative group bg-inherit rounded-md items-center justify-center h-[500px] flex min-w-[400px] mt-[8px] mb-[24px]"
    >
      <div
        className={cn(
          "border absolute inset-0 group-hover:-rotate-3 transition-all duration-500 ease-in-out",
          {
            "-rotate-3": isMobile,
          },
        )}
      />
      <div
        className={cn(
          "absolute inset-0 border group-hover:rotate-3 transition-all duration-500 ease-in-out",
          {
            "rotate-3": isMobile,
          },
        )}
      />
      <div
        style={{
          background: "var(--background)",
        }}
        className={cn(
          "h-full absolute inset-0 w-full border group-hover:scale-[98%] transition-all duration-500 ease-in-out flex items-center justify-center flex-col",
          {
            "scale-[98%]": isMobile,
          },
        )}
      >
        {children}
      </div>

      <div
        className={cn(
          "absolute scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out inset-0 flex items-center justify-center",
          {
            "scale-100": isMobile,
          },
        )}
      >
        <div className="border border-solid rounded-full">
          <span
            className="size-18 m-3 rounded-full flex items-center justify-center"
            style={{
              background: "var(--background)",
            }}
          >
            <GoArrowLeft className="size-8 rotate-140" />
          </span>
        </div>
      </div>
    </a>
  );

  return (
    <div className="w-full">
      <ChapterHeadline chapter={6} />
      <SubChapter
        title="PROJECTS"
        subTitle="Some of My Most Privat Projects"
        more="My Featured Projects"
      />
      <div className="w-full mt-15 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(400px,1fr))]">
        <Item href="https://flower-shop-react-sepia.vercel.app/">
          <img
            src="/flower1.png"
            alt="flower-shop-image"
            className="h-full w-full"
          />
        </Item>
        <Item href="https://vite-weather-app-henna.vercel.app/">
          <img
            src="/instagram-clone.png"
            alt="weather-app-image"
            className="h-full w-full"
          />
        </Item>
        <Item href="https://vite-weather-mkuyi20fr-hamzadarejs-projects.vercel.app/">
          <img
            src="/waether.png"
            alt="weather-app-image"
            className="h-full w-full"
          />
        </Item>
      </div>
    </div>
  );
};
export default Projects;
