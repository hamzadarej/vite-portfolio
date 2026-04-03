import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear() - 2021;

  return (
    <>
      <ChapterHeadline chapter={2} />
      <SubChapter
        title={t("aboutMe.title")}
        subTitle={t("aboutMe.subTitle")}
        more={t("aboutMe.more")}
      />

      <div>
        <h2 className="text-[32px] mb-[28px]">{t("aboutMe.intro")}</h2>
        <p className="mb-[40px] poppins-regular">
          {t("aboutMe.description1")}
          <span>{t("aboutMe.description2")}</span>
        </p>
        <section className="sm:flex block flex-row-reverse justify-around space-y-6">
          <div className="flex flex-wrap sm:flex-col flex-row text-[20px] space-x-2 [&>span]:grow-1 sm:[&>span]:shrink-0 space-y-2">
            <span>
              <p>{t("aboutMe.email")}</p>
              <p>darejhamza@gmail.com</p>
            </span>
            <span>
              <p>{t("aboutMe.dateOfBirth")}</p>
              <p>{t("aboutMe.dateOfBirthValue")}</p>
            </span>
            <span>
              <p>{t("aboutMe.address")}</p>
              <p>{t("aboutMe.addressValue")}</p>
            </span>
          </div>
          <div className="relative bg-inherit items-center justify-center h-[350px] max-w-full min-w-[350px] mt-[8px] mb-[24px]">
            <div className="border absolute inset-0 -rotate-3" />
            <div className="absolute inset-0 border rotate-3" />
            <div
              style={{
                background: "var(--bg-solid)",
              }}
              className=" h-full absolute inset-0 w-full border flex items-center justify-center flex-col"
            >
              <p className="h-fit poppins-bold text-[200px] leading-[120%]">
                {year}
              </p>
              <p className="text-[20px]">{t("aboutMe.yearsExperience")}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
