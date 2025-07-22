import WaveBox from "../Layout/WaveBox";
import homeImg from "../../public/home.png";

const Home = () => {
  return (
    <div
      id="tab_1"
      className="space-y-12 h-screen mt-14 lg:mt-0 lg:items-center lg:flex overflow-hidden"
    >
      <section className="py-[60px] poppins-medium">
        <h4 className="text-[22px] lg:text-[40px] tracking-tight fade-text whitespace-nowrap">
          <span>HI, </span>
          <span>I </span>
          <span>AM </span>
          <span>A </span>
          <span>DEVELOPER </span>
        </h4>

        <ul className="dynamic-texts text-[40px] [&>li>span]:relative tracking-[-1px] h-[56px] leading-[56px] overflow-hidden poppins-semibold">
          <li>
            <span>Frontend</span>
          </li>
          <li>
            <span>Backend</span>
          </li>
        </ul>

        <p className="fade-text text-[22px] mt-[12px] tracking-[-1px]">
          <span>based </span>
          <span>in </span>
          <span>Leipzig, </span>
          <span>Germany.</span>
        </p>
        <div className="pt-12 space-x-6">
          <a
            href={"#tab_6"}
            className="bg-black rounded-3xl py-[10px] text-white px-[14px]"
          >
            View My Work
          </a>
          <a
            href={"#tab_8"}
            className="border-black border rounded-3xl py-[10px] text-black px-[16px]"
          >
            Contact Me
          </a>
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
