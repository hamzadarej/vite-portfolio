import WaveBox from "../Layout/WaveBox";
import homeImg from "../../public/home.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const scrollToEl = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      id="tab_1"
      className="space-y-12 h-screen mt-14 lg:mt-0 lg:items-center lg:flex overflow-hidden"
    >
      <section className="py-[60px] poppins-medium min-w-1/3">
        <h4 className="text-[22px] lg:text-[40px] tracking-tight fade-text whitespace-nowrap">
          <span>{t("home.hi")} </span>
          <span>{t("home.iAmA")} </span>
          <span>{t("home.developer")} </span>
        </h4>

        <ul className="dynamic-texts text-[40px] [&>li>span]:relative tracking-[-1px] h-[56px] leading-[56px] overflow-hidden poppins-semibold">
          <li>
            <span>{t("home.frontend")}</span>
          </li>
          <li>
            <span>{t("home.react")}</span>
          </li>
        </ul>

        <p className="fade-text text-[22px] mt-[12px] tracking-[-1px]">
          {t("home.basedIn")}
        </p>
        <div className="pt-12 space-x-6">
          <button
            onClick={() => {
              scrollToEl("#tab_6");
            }}
            className="bg-black rounded-3xl py-[10px] text-white px-[14px]"
          >
            {t("home.viewMyWork")}
          </button>
          <button
            onClick={() => scrollToEl("#tab_8")}
            className="border-black border rounded-3xl py-[10px] text-black px-[16px]"
          >
            {t("home.contactMe")}
          </button>
        </div>
      </section>
      <section className="w-full items-center flex justify-center">
        <div className="self-center relative w-fit">
          <WaveBox extraClass="waveRunFour">
            <img
              src={homeImg}
              className="size-[350px] rounded-full border-2"
              alt="logo"
            />
          </WaveBox>
        </div>
      </section>
    </div>
  );
};

export default Home;
