import Nav, { NavList } from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import { useMemo, useState } from "react";
import { InView } from "react-intersection-observer";
import { cn } from "./utility/cn";
import Projects from "./components/Projects";
import { useDevice } from "./hooks/useDevice";
import { useTranslation } from "react-i18next";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

function App() {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const isDesktop = useDevice();
  const [showNavList, setShowNavList] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLang);
  };

  const contents = useMemo(() => {
    return [
      <Home />,
      <AboutMe />,
      <Service />,
      <Skills />,
      <Experience />,
      <Projects />,
      <Reviews />,
      <Contact />,
    ];
  }, []);

  return (
    <div
      data-theme={theme}
      className={cn(
        "xl:px-20 overflow-y-scroll relative no-scrollbar h-full flex flex-col justify-start items-start"
      )}
      style={{
        background: "var(--background)",
      }}
    >
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <button
          type="button"
          onClick={toggleLanguage}
          className="p-2 rounded border-solid text-[var(--text)] shadow-xl border-2 border-black/10 bg-[var(--background)] font-semibold text-sm"
        >
          {i18n.language === "en" ? "🇩🇪 DE" : "🇬🇧 EN"}
        </button>
        <button
          type="button"
          onClick={() =>
            setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
          }
          className="p-2 rounded border-solid text-[var(--text)] shadow-xl border-2 border-black/10 bg-[var(--background)]"
        >
          {theme === Theme.LIGHT ? "🌙" : "☀️"}
        </button>
      </div>

      {!isDesktop ? (
        <Nav
          onClick={() => setShowNavList((prev) => !prev)}
          showNavList={showNavList}
          currentPage={currentPage}
          theme={theme}
        />
      ) : (
        <div className="flex py-3.5 px-3 items-center gap-3.5 text-[22px]">
          <img src="/logo-nav.png" alt="portfolioLogo" className="size-16" />
          <span className="poppins-semibold">Frontend Fusion</span>
        </div>
      )}
      <div
        className={cn("flex w-full flex-col justify-start items-start px-3", {
          "w-[calc(100vw-380px)]": isDesktop,
        })}
      >
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
            className="w-full poppins-medium h-full"
          >
            {item}
          </InView>
        ))}
      </div>
      {isDesktop && (
        <NavList showNavList currentPage={currentPage} isDesktop={isDesktop} />
      )}
      <div
        onClick={() => setShowNavList(false)}
        className={cn(
          "fixed inset-0 w-full h-full transition-transform duration-1000 ease-in-out bg-black/25"
        )}
        style={{
          transform: showNavList ? "translateX(0)" : "translateX(100%)",
        }}
      />
    </div>
  );
}

export default App;
