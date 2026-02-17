import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  const serviceKeys = [
    "responsiveWebDesign",
    "modernTechStack",
    "pixelPerfectUI",
    "componentBasedArch",
    "performanceOptimization",
    "crossBrowserCompatibility",
    "versionControl",
  ] as const;

  return (
    <>
      <ChapterHeadline chapter={3} />
      <SubChapter
        title={t("services.title")}
        subTitle={t("services.subTitle")}
        more={t("services.more")}
      />

      <div className="p-[16px]">
        <div className="h-[410px] w-full border">
          <ul className=" text-[18px] flex flex-col justify-between h-full p-6">
            {serviceKeys.map((key) => (
              <li key={key} className="shrink-0 flex items-center space-x-2">
                <RiArrowRightDoubleLine />
                <span>{t(`services.list.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Service;
