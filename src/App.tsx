import Nav, { NavList } from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import { useEffect, useMemo, useState } from "react";
import { InView } from "react-intersection-observer";
import { cn } from "./utility/cn";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);
  const [showNavList, setShowNavList] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const contents = useMemo(() => {
    return [
      <Home />,
      <AboutMe />,
      <Service />,
      <Skills />,
      <Experience />,
      <Reviews />,
      <Contact />,
    ];
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "2xl:px-20 overflow-y-scroll relative no-scrollbar h-full bg-dandelion-yellow text-black flex flex-col justify-start items-start",
        {
          "w-[calc(100vw-380px)]": isDesktop,
        },
      )}
    >
      {!isDesktop ? (
        <Nav
          onClick={() => setShowNavList((prev) => !prev)}
          showNavList={showNavList}
          currentPage={currentPage}
        />
      ) : (
        <div className="flex py-3.5 px-3 items-center gap-3.5 text-[22px]">
          <span className="font-bold text-3xl">H&D</span>
          <span className="poppins-semibold">Frontend Fusion</span>
        </div>
      )}

      {contents.map((item, index) => (
        <InView
          threshold={isDesktop ? 0.4 : 0.2}
          onChange={(inView) => {
            if (inView) {
              setCurrentPage(index);
            }
          }}
          id={`content-${index}`}
          key={index}
          className="flex w-full"
        >
          {item}
        </InView>
      ))}
      {isDesktop && (
        <NavList showNavList currentPage={currentPage} isDesktop={isDesktop} />
      )}

      <div
        onClick={() => setShowNavList(false)}
        className={cn(
          "fixed inset-0 w-full h-full transition-transform duration-1000 ease-in-out bg-black/25",
        )}
        style={{
          transform: showNavList ? "translateX(0)" : "translateX(100%)",
        }}
      />
    </div>
  );
}

export default App;
