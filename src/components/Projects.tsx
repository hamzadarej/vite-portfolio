import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import { ReactNode } from "react";
import { GoArrowLeft } from "react-icons/go";
import { cn } from "../utility/cn";
import { isMobile } from "../utility/device";
const Projects = () => {
  const Card = ({ children, href }: { children: ReactNode; href: string }) => (
    <a
      href={href}
      target="_blank"
      className="relative group bg-inherit rounded-md items-center justify-center h-[500px] flex min-w-[200px] mt-[8px] mb-[24px]"
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

  const projectList = [
    {
      href: "https://flower-shop-react-sepia.vercel.app/",
      imgSrc: "/flower1.png",
      alt: "flower-shop-image",
      title: "Bloom & Blossom",
      subTitle: "E-commerce Platform",
    },
    {
      href: "https://vite-weather-mkuyi20fr-hamzadarejs-projects.vercel.app/",
      imgSrc: "/weather.png",
      alt: "weather-app-image",
      title: "Weather App",
      subTitle: "information website",
    },
    {
      href: "https://vite-weather-app-henna.vercel.app/",
      imgSrc: "/instagram-clone.png",
      alt: "Instagram-clone-image",
      title: "Instagram Clone",
      subTitle: "Social Networking",
    },
  ];

  return (
    <>
      <ChapterHeadline chapter={6} />
      <SubChapter
        title="PROJECTS"
        subTitle="Some of My Most Privat Projects"
        more="My Featured Projects"
      />
      <div className="w-full px-2 mt-15 mb-8 grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {projectList.map(({ href, imgSrc, alt, title, subTitle }) => (
          <div key={alt} className="flex flex-col">
            <Card href={href}>
              <img src={imgSrc} alt={alt} className="h-full w-full" />
            </Card>
            <span className="text-[16px] poppins-regular">
              <p className="poppins-bold text-3xl pb-1">{title}</p>
              <p>{subTitle}</p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
export default Projects;
