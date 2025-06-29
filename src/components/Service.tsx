import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import { RiArrowRightDoubleLine } from "react-icons/ri";
const Service = () => {
  const serviceList = [
    "Responsive Web Design",
    "Modern Tech Stack",
    "Pixel-perfect UI Implementation",
    "Component-based Architecture",
    "Performance Optimization",
    "Cross-browser Compatibility",
    "Version Control & Collaboration",
  ];
  return (
    <div className="px-[12px] h-full poppins-medium w-full">
      <ChapterHeadline chapter={2} />

      <SubChapter
        title="MY SERVICES"
        subTitle="How I can Help Your Next Project"
        more="What I Do"
      />

      <div className="p-[16px]">
        <div className="h-[410px] w-full border">
          <ul className=" text-[18px] flex flex-col justify-between h-full p-6">
            {serviceList.map((service) => (
              <li
                key={service}
                className="shrink-0 flex items-center space-x-2"
              >
                <RiArrowRightDoubleLine />
                <span key={service}>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
