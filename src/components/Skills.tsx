import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";

import CircularProgressBar from "../Layout/CircularProgressBar";

const Skills = () => (
  <div className="px-[12px] w-full h-full poppins-medium mb-[60px]">
    <section>
      <ChapterHeadline chapter={3} />
      <SubChapter
        title="ATTAINMENTS"
        subTitle="Highlight My Expertise in:"
        more="Developer Skills"
        addStyle="flex-col-reverse"
      />
      <div className="text-[28px] -mt-[20px] mb-[40px] text-[#575757]">
        <div className="-rotate-90 w-fit h-fit">01.-</div>
      </div>
      <div className="w-full space-y-[16px]">
        {skillsList.map(({ name, score }, index) => {
          return (
            <div key={index}>
              <article className="flex items-center w-full justify-between mb-[8px]">
                <p>{name}</p>
                <p>{score}</p>
              </article>
              <article className="h-[6px] bg-white w-full rounded-md relative">
                <span
                  style={{ width: `${score}%` }}
                  className="w-full inset-0 absolute bg-black rounded-md"
                />
              </article>
            </div>
          );
        })}
      </div>
    </section>
    <section>
      <SubChapter
        title="ATTAINMENTS"
        subTitle="Highlight My Expertise in:"
        more="Language Skills"
        addStyle="flex-col-reverse"
      />
      <div className="text-[28px] -mt-[20px] mb-[40px] text-[#575757]">
        <div className="-rotate-90 w-fit h-fit">02.-</div>
      </div>
      <div className="gap-10 flex flex-col items-center">
        {languageList.map(({ name, score }) => {
          return (
            <div className="flex flex-col items-center" key={name}>
              <CircularProgressBar
                percentage={score}
                strokeWidth={8}
                sqSize={166}
              />
              <span className="cursor-pointer py-[8px] px-[42px] w-fit border-1 hover:bg-black hover:text-white mt-[20px] rounded-3xl">
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  </div>
);
const languageList = [
  { name: "German", score: 82 },
  { name: "English", score: 60 },
  { name: "French", score: 75 },
];
const skillsList = [
  { name: "Front-End Development", score: 90 },
  { name: "Back-End Development", score: 60 },
  { name: "Full-Stack Development", score: 75 },
  { name: "Database Management", score: 60 },
  { name: "Version Control", score: 95 },
  { name: "Front-End API Integration", score: 90 },
];

export default Skills;
