import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import CircularProgressBar from "../Layout/CircularProgressBar";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const IN_VIEW_OPTIONS = {
  threshold: 0.4,
  triggerOnce: true,
};

const Skills = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView(IN_VIEW_OPTIONS);
  const { ref: ref1, inView: inView1 } = useInView(IN_VIEW_OPTIONS);

  const skillsList = [
    { nameKey: "skills.frontEnd", score: 90 },
    { nameKey: "skills.backEnd", score: 60 },
    { nameKey: "skills.fullStack", score: 75 },
    { nameKey: "skills.database", score: 60 },
    { nameKey: "skills.versionControl", score: 95 },
    { nameKey: "skills.apiIntegration", score: 90 },
  ];

  const languageList = [
    { nameKey: "skills.german", score: 82 },
    { nameKey: "skills.english", score: 60 },
    { nameKey: "skills.french", score: 75 },
  ];

  return (
    <>
      <section>
        <ChapterHeadline chapter={4} />
        <SubChapter
          title={t("skills.title")}
          subTitle={t("skills.subTitle")}
          more={t("skills.devSkills")}
          addStyle="flex-col-reverse"
        />
        <div className="text-[28px] -mt-[20px] mb-[40px] text-[#575757]">
          <div className="-rotate-90 w-fit h-fit">01.-</div>
        </div>
        <div className="w-full space-y-[16px]" ref={ref}>
          {skillsList.map(({ nameKey, score }, index) => {
            return (
              <div key={index}>
                <article className="flex items-center w-full justify-between mb-[8px]">
                  <p>{t(nameKey)}</p>
                  <p>{score}</p>
                </article>
                <article className="h-[6px] bg-white w-full rounded-md relative">
                  <span
                    style={{ width: `${inView ? score : 0}%` }}
                    className="w-full inset-0 absolute bg-black rounded-md transition-[width] duration-1000 ease-in-out"
                  />
                </article>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <SubChapter
          title={t("skills.title")}
          subTitle={t("skills.subTitle")}
          more={t("skills.langSkills")}
          addStyle="flex-col-reverse"
        />
        <div className="text-[28px] -mt-[20px] mb-[40px] text-[#575757]">
          <div className="-rotate-90 w-fit h-fit">02.-</div>
        </div>

        <div className="gap-10 flex flex-col items-center mb-14" ref={ref1}>
          {languageList.map(({ nameKey, score }) => {
            return (
              <div className="flex flex-col items-center" key={nameKey}>
                <CircularProgressBar
                  percentage={score}
                  strokeWidth={8}
                  sqSize={166}
                  inView={inView1}
                />
                <span className="cursor-pointer py-[8px] px-[42px] w-fit border-1 hover:bg-black hover:text-white mt-[20px] rounded-3xl">
                  {t(nameKey)}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
