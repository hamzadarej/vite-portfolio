import WaveBox from "../Layout/WaveBox";
import homeImg from "../../public/home.png";

const Home = () => {
  return (
    <div
      id="tab_0"
      className="w-full h-screen mb-[20px] mt-[60px] lg:mt-0 lg:items-center lg:flex overflow-hidden"
    >
      <section className="py-[60px] poppins-medium px-[12px]">
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
        <div className="pt-12 space-x-6 overflow-hidden">
          <button className="bg-black rounded-3xl py-[10px] text-white px-[14px]">
            View My Work
          </button>
          <button className="border-black border rounded-3xl py-[10px] text-black px-[16px]">
            Contact Me
          </button>
        </div>
      </section>
      <section className="w-full items-center flex justify-center px-[12px]">
        <div className="self-center relative w-fit mb-[30px]">
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
