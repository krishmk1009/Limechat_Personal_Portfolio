import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Client1 from "../../assets/client/1.png";
import Client2 from "../../assets/client/2.png";
import Client3 from "../../assets/client/3.png";
import Client4 from "../../assets/client/4.png";
import Client5 from "../../assets/client/5.png";
import Client6 from "../../assets/client/6.png";

interface ClientSliderImg {
  src: string;
  alt: string;
}

const ClientImgData: ClientSliderImg[] = [
  {
    src: Client1,
    alt: "Client 1",
  },
  {
    src: Client2,
    alt: "Client 2",
  },
  {
    src: Client3,
    alt: "Client 3",
  },
  {
    src: Client6,
    alt: "Client 6",
  },
  {
    src: Client4,
    alt: "Client 4",
  },
  {
    src: Client5,
    alt: "Client 5",
  },
  {
    src: Client6,
    alt: "Client 6",
  },
  
];

const ClientSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {ClientImgData.map((img, index) => (
        <div key={index}>
          <img className="w-[156px] " src={img.src} alt={img.alt} />
        </div>
      ))}
    </Slider>
  );
};

export default ClientSlider;
