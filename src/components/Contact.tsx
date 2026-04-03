import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import { FiPhoneCall } from "react-icons/fi";
import { PiEnvelopeOpenLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { useForm, ValidationError } from "@formspree/react";
import { PiGithubLogoLight } from "react-icons/pi";
import WaveBox from "../Layout/WaveBox";
import { ReactNode } from "react";
import { cn } from "../utility/cn";
import { FieldValues, SubmissionError } from "@formspree/core";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xleavopp");

  return (
    <>
      <ChapterHeadline chapter={8} />

      <SubChapter
        title={t("contact.title")}
        subTitle={t("contact.subTitle")}
        more={t("contact.more")}
      />
      <div className="my-[24px] space-y-[24px]">
        <IconWithDesc desc="+49 176 60387683" href="tel:+4917660387683">
          <FiPhoneCall />
        </IconWithDesc>
        <IconWithDesc
          desc="darejhamza@gmail.com"
          href="mailto:darejhamza@gmail.com"
        >
          <PiEnvelopeOpenLight />
        </IconWithDesc>
        <IconWithDesc
          desc="Seeburgstrasse 50 04103, Leipzig germany"
          href="https://maps.app.goo.gl/9cjmjK3f8ab5N6Kr7"
        >
          <SlLocationPin />
        </IconWithDesc>
      </div>
      <div className="flex space-x-[16px] mb-[60px]">
        {[
          {
            icon: <PiLinkedinLogoLight />,
            link: "https://www.linkedin.com/in/hamza-darej-068365210",
          },
          {
            icon: <PiGithubLogoLight />,
            link: "https://github.com/hamzadarej",
          },
        ].map((item, i) => (
          <a
            href={item.link}
            target="_blank"
            key={"socialMediaIcon" + i}
            className="h-[42px] w-[42px] border-1 flex rounded-full items-center justify-center [&>svg]:size-[24px] group hover:bg-black [&>svg]:group-hover:fill-white"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-[28px] poppins-semibold  realative">
          {t("contact.leaveMessage")}
        </h2>

        <div className="text-center my-5 text-green-700">
          {state.succeeded && <>{t("contact.successMessage")}</>}
        </div>
        <Input
          name="name"
          label={t("contact.name")}
          placeholder={t("contact.namePlaceholder")}
          errors={state.errors}
        />
        <Input
          name="email"
          label={t("contact.email")}
          placeholder={t("contact.emailPlaceholder")}
          errors={state.errors}
        />
        <Input
          name="message"
          label={t("contact.message")}
          placeholder={t("contact.messagePlaceholder")}
          errors={state.errors}
        />

        <div className="flex items-center my-14 mb-10 justify-center border rounded-full relative h-[148px] w-[148px]">
          <button
            className={cn("text-[24px] disabled:text-gray-600", {
              "text-gray-500": state.submitting,
            })}
            type="submit"
            disabled={state.submitting || state.succeeded}
          >
            <WaveBox extraClass="waveRunTwo">
              {state.submitting ? t("contact.submitting") : t("contact.submit")}
            </WaveBox>
          </button>
        </div>
      </form>
    </>
  );
};

const IconWithDesc = ({
  children,
  desc,
  href,
}: {
  children: ReactNode;
  desc: string;
  href: string;
}) => {
  return (
    <a
      target="_blank"
      href={href}
      className="flex items-center space-x-[25px] w-full"
    >
      <figure className="h-[60px] min-w-[60px] border-1 flex rounded-full items-center justify-center [&>svg]:size-[25px] group hover:bg-black [&>svg]:group-hover:fill-white">
        {children}
      </figure>
      <p>{desc}</p>
    </a>
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
          type="text"
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
