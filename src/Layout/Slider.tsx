import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FC, ReactNode } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const SimpleSlider: FC<{ children: ReactNode }> = ({ children }) => {
  const arrowStyle = {
    border: "1px solid black",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    padding: "12px",
    cursor: "pointer",
  };

  const SlickButtonFix = ({
    currentSlide,
    slideCount,
    children,
    ...props
  }: {
    currentSlide?: number;
    slideCount?: number;
    children: ReactNode;
  }) => (
    <span style={arrowStyle} {...props}>
      {children}
    </span>
  );

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 2500,
    swipeToSlide: true,

    nextArrow: (
      <SlickButtonFix>
        <GoArrowRight style={arrowStyle} />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <GoArrowLeft style={arrowStyle} />
      </SlickButtonFix>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="[&_.slick-dots>.slick-active]:bg-[#212529] [&_.slick-prev]:right-[90px] [&_.slick-arrow]:absolute [&_.slick-arrow]:bottom-[-70px] [&_.slick-arrow]:right-[20px] [&_.slick-dots>li>button]:hidden [&_.slick-dots>.slick-active]:h-[5px] [&_.slick-dots]:!flex [&_.slick-arrow]:!flex [&_.slick-dots]:-bottom-[50px] [&_.slick-dots]:left-[20px] [&_.slick-dots>li]:h-[3px] [&_.slick-dots]:w-[calc(100%-200px)]  [&_.slick-dots>li]:min-w-[calc(100%/10)]  [&_.slick-dots>li]:bg-[#00000066] [&_.slick-dots]:items-center [&_.slick-dots]:absolute">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
export default SimpleSlider;
