import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";

const AboutMe = () => {
  const year = new Date().getFullYear() - 2021;

  return (
    <>
      <ChapterHeadline chapter={2} />

      <SubChapter
        title="ABOUT ME"
        subTitle="Some Word About Me"
        more="Know Me More"
      />

      <div>
        <h2 className="text-[32px] mb-[28px]">
          I'm Hamza Darej, a WEB Developer
        </h2>
        <p className="mb-[40px] poppins-regular">
          I’m a Frontend Developer with a passion for creating clean,
          responsive, and engaging web interfaces. I specialize in turning
          design ideas into interactive, high-performance websites and web
          applications using modern tools and technologies like HTML, CSS,
          JavaScript, React, and Tailwind CSS.
          <span>
            I focus on writing clean, maintainable code and building
            user-centered experiences that work seamlessly across devices and
            browsers. With a strong eye for detail and a love for UI/UX, I enjoy
            collaborating with designers and backend developers to bring
            projects to life.
          </span>
        </p>
        <section className="sm:flex block flex-row-reverse justify-around space-y-6">
          <div className="flex flex-wrap sm:flex-col flex-row text-[20px] space-x-2 [&>span]:grow-1 sm:[&>span]:shrink-0 space-y-2">
            <span>
              <p>Email:</p>
              <p>darejhamza@gmail.com</p>
            </span>
            <span>
              <p>Date of Birth:</p>
              <p>17 September, 1993</p>
            </span>
            <span>
              <p>Address</p>
              <p>Germany, Leipzig</p>
            </span>
          </div>
          <div className="relative bg-inherit items-center justify-center h-[350px] max-w-full min-w-[350px] mt-[8px] mb-[24px]">
            <div className="border absolute inset-0 -rotate-3" />
            <div className="absolute inset-0 border rotate-3" />
            <div
              style={{
                background: "var(--background)",
              }}
              className=" h-full absolute inset-0 w-full border flex items-center justify-center flex-col"
            >
              <p className="h-fit poppins-bold text-[200px] leading-[120%]">
                {year}
              </p>
              <p className="text-[20px]">Years of experience</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
