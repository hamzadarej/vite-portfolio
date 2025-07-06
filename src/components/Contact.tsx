import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import { FiPhoneCall } from "react-icons/fi";
import { PiEnvelopeOpenLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { useForm, ValidationError } from "@formspree/react";
import { PiGithubLogoLight } from "react-icons/pi";
import WaveBox from "../Layout/WaveBox";
import { ReactNode } from "react";
import { cn } from "../utility/cn";
import { FieldValues, SubmissionError } from "@formspree/core";

const Contact = () => {
  const [state, handleSubmit] = useForm("xleavopp");

  return (
    <div className="px-[12px] h-full poppins-medium w-full">
      <ChapterHeadline chapter={6} />

      <SubChapter
        title="CONTACT"
        subTitle="Let's get in Touch"
        more="Contact Me"
      />
      <div className="my-[24px] space-y-[24px]">
        <IconWithDesc desc="+49 176 60387683">
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
      <form onSubmit={handleSubmit}>
        <h2 className="text-[28px] poppins-semibold  realative">
          Leave a Message
        </h2>

        <div className="text-center my-5 text-green-700">
          {state.succeeded && (
            <>
              Many thanks for your message — I’ll be in touch with you shortly!
            </>
          )}
        </div>
        <Input
          name="name"
          label="Name"
          placeholder="Your name"
          errors={state.errors}
        />
        <Input
          name="email"
          label="Email"
          placeholder="Your e-mail"
          errors={state.errors}
        />
        <Input
          name="message"
          label="Message"
          placeholder="Your message"
          errors={state.errors}
        />

        <div className="flex items-center my-14 mb-10 justify-center border rounded-full relative h-[148px] w-[148px]">
          <button
            className={cn("text-[24px]", {
              "text-gray-500": state.submitting,
            })}
            type="submit"
          >
            <WaveBox extraClass="waveRunTwo">
              {state.submitting ? "submitting" : "Submit"}
            </WaveBox>
          </button>
        </div>
      </form>
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
  name,
  errors,
}: {
  label: string;
  placeholder: string;
  name: string;
  errors?: SubmissionError<FieldValues> | null;
}) => {
  return (
    <div className="mb-5">
      <section className="flex flex-col gap-5 pb-2 border-b">
        <label className="poppins-medium text-[20px]">{label}</label>
        <input
          className="outline-none"
          name={name}
          placeholder={placeholder}
          required
        />
      </section>
      <ValidationError
        prefix="Input"
        field={name}
        errors={errors ?? null}
        style={{ color: "red" }}
      />
    </div>
  );
};

export default Contact;
