import { cn } from "../utility/cn";

const SubChapter = ({
  title,
  subTitle,
  more,
  addStyle,
}: {
  title?: string;
  subTitle?: string;
  more?: string;
  addStyle?: string;
}) => {
  // const contentRef = useRef<HTMLDivElement>(null);
  // const containerOffsetTop = contentRef?.current?.offsetTop ?? 0;
  // const [isViewDown, setIsViewDown] = useState(false);
  //
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isViewed = window?.pageYOffset > containerOffsetTop + 500;
  //     setIsViewDown((prev) => (prev !== isViewed ? isViewed : prev));
  //   };
  //   globalThis.window.addEventListener("scroll", handleScroll);
  //
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="relative mt-[60px] mb-[20px] pt-[24px] pb-[20px] flex-col flex pl-[32px] border-l-2 ">
      <span
        className={cn(
          "absolute left-0 top-0 text-[35px]/[60%] poppins-extrabold opacity-5",
        )}
      >
        {title}
      </span>
      <div className={cn("gap-[8px] flex flex-col", addStyle)}>
        <span className="poppins-medium text-[16px]">{subTitle}</span>
        <span className="text-[22px] poppins-semibold">{more}</span>
      </div>
    </div>
  );
};

export default SubChapter;
