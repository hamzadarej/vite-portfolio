import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import WaveBox from "../Layout/WaveBox";
import CV from "../../public/Lebenslauf-2025.pdf";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  const experienceKeys = [
    "senior",
    "professional-mission",
    "professional",
    "junior",
  ] as const;

  return (
    <>
      <ChapterHeadline chapter={5} />
      <SubChapter
        title={t("experience.title")}
        subTitle={t("experience.subTitle")}
        more={t("experience.more")}
      />
      <ul className="border-l-2 border-black/50  my-[70px] space-y-[60px]">
        {experienceKeys.map((key) => (
          <li key={key} className="pl-[32px] border-l-2 -ml-[2px]">
            <span>{t(`experience.positions.${key}.duration`)}</span>
            <h2 className="poppins-semibold text-[20px] mb-[16px]">
              {t(`experience.positions.${key}.position`)}
            </h2>
            <p>{t(`experience.positions.${key}.desc`)}</p>
          </li>
        ))}
      </ul>
      <a
        href={CV}
        download
        className="h-[132px] relative flex flex-col items-center justify-center rounded-full w-[132px] border mb-[50px] mt-[40px]"
      >
        <WaveBox extraClass="waveRunTwo">
          <svg
            width="45"
            height="54"
            viewBox="0 0 45 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 31.449L22.5 52.949L1 31.449L8.98204 23.3382L16.8353 31.449V0.550781H28.1647V31.449L36.018 23.3382L44 31.449Z"
              stroke="currentColor"
            />
          </svg>
          <strong className="text-sm">{t("experience.cv")}</strong>
        </WaveBox>
      </a>
    </>
  );
};

export default Experience;
