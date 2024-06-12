import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import carousel2 from '~/carousel2.jpeg';

export default function Carousel() {
  const settings = {
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="rounded-xl">
          <Image src={carousel2.src} alt="carousel" width={carousel2.width} height={carousel2.height} />
        </div>
        <div className="rounded-xl">
          <Image src={carousel2.src} alt="carousel" width={carousel2.width} height={carousel2.height} />
        </div>
        <div className="rounded-xl">
          <Image src={carousel2.src} alt="carousel" width={carousel2.width} height={carousel2.height} />
        </div>
        <div className="rounded-xl">
          <Image src={carousel2.src} alt="carousel" width={carousel2.width} height={carousel2.height} />
        </div>
        <div className="rounded-xl">
          <Image src={carousel2.src} alt="carousel" width={carousel2.width} height={carousel2.height} />
        </div>
      </Slider>
    </div>
  );
}
