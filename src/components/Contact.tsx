import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import { FiPhoneCall } from "react-icons/fi";
import { PiEnvelopeOpenLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { RiArrowRightDoubleLine } from "react-icons/ri";

import { PiGithubLogoLight } from "react-icons/pi";
import WaveBox from "../Layout/WaveBox";
import { ReactNode } from "react";

const Contact = () => {
  return (
    <div className="px-[12px] h-full poppins-medium w-full">
      <ChapterHeadline chapter={6} />

      <SubChapter
        title="CONTACT"
        subTitle="Let's get in Touch"
        more="Contact Me"
      />
      <div className="my-[24px] space-y-[24px]">
        <IconWithDesc desc="+49 156468486">
          <FiPhoneCall />
        </IconWithDesc>
        <IconWithDesc desc="darejhamza@gmail.com">
          <PiEnvelopeOpenLight />
        </IconWithDesc>
        <IconWithDesc desc="Seeburgstrasse 50 04103, Leipzig germany">
          <SlLocationPin />
        </IconWithDesc>
      </div>
      <div className="flex space-x-[16px] [&>span>svg:hover]:fill-white [&>span:hover]:bg-black mb-[60px]">
        {[
          <PiFacebookLogoLight />,
          <PiLinkedinLogoLight />,
          <PiGithubLogoLight />,
        ].map((icon, i) => (
          <span
            key={"socialMediaIcon" + i}
            className="h-[42px] w-[42px] border-1 flex rounded-full items-center justify-center [&>svg]:size-[24px]"
          >
            {icon}
          </span>
        ))}
      </div>
      <div>
        <h2 className="text-[28px] poppins-semibold pb-10 realative">
          Leave a Message
        </h2>
        <Input label="Name" placeholder="Your name" />
        <Input label="Email" placeholder="Your e-mail" />
        <Input label="Message" placeholder="Your message" />
        <div className="flex items-center my-14 justify-center border rounded-full relative h-[148px] w-[148px]">
          <WaveBox extraClass="waveRunTwo">
            <button className="text-[24px]">Submit</button>
          </WaveBox>
        </div>
      </div>
    </div>
  );
};

const IconWithDesc = ({
  children,
  desc,
}: {
  children: ReactNode;
  desc: string;
}) => {
  return (
    <span className="flex items-center space-x-[25px] w-full">
      <figure className="h-[60px] min-w-[60px] border-1 flex rounded-full items-center justify-center [&>svg]:size-[25px]">
        {children}
      </figure>
      <p>{desc}</p>
    </span>
  );
};

const Input = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <section className="flex flex-col gap-5 mb-5 pb-2 border-b">
      <label className="poppins-medium text-[20px]">{label}</label>
      <input className="outline-none" placeholder={placeholder} />
    </section>
  );
};

export default Contact;
