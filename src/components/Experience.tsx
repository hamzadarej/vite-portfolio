import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import WaveBox from "../Layout/WaveBox";
import CV from "../../public/Lebenslauf-2025.pdf";

const Experience = () => {
  return (
    <>
      <ChapterHeadline chapter={5} />
      <SubChapter
        title="EXPERIANCES"
        subTitle="Highlight My Key Experiences"
        more="My Experience"
      />
      <ul className="border-l-2 border-black/50  my-[70px] space-y-[60px]">
        {experienceList.map(({ duration, position, desc }) => (
          <li key={duration} className="pl-[32px] border-l-2 -ml-[2px]">
            <span>{duration}</span>
            <h2 className="poppins-semibold text-[20px] mb-[16px]">
              {position}
            </h2>
            <p>{desc}</p>
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
          <strong className="text-sm">CV</strong>
        </WaveBox>
      </a>
    </>
  );
};

const experienceList = [
  {
    duration: "(2025 - Present)",
    position: "Senior Developer at CHECK24 Travel:",
    desc: "Support the development of a new team-creation web app (WebView) for IOS and Android, leveraging the Remix framework for efficient server-side API calls.",
  },
  {
    duration: "(2024 - 2025)",
    position: "Professional Developer at CHECK24 Flight:",
    desc: "Develop a CMS-powered static flight landing page with pre-fetched search results, optimized for Search Engine Advertising. Elevate our project with modern tools like TanStack and Tailwind, while mentoring new trainees by sharing ideas and conducting code reviews.",
  },
  {
    duration: "(2022 - 2024)",
    position: "Junior Developer at CHECK24 Flight:",
    desc: "Developed responsive and interactive front-end Web App using JS framework React: HTML, CSS, and JavaScript. Collaborated closely with designers to implement visually appealing and user-friendly websites.",
  },
];

export default Experience;
