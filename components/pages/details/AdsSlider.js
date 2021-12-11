import React from 'react';
import Slider from "react-slick";
import styles from '../../../styles/components/pages/details/AdsSlider.module.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: '10%' }}
      onClick={onClick}
    >
      <img src="/imgs/right.png" className={styles.arrowSize} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: '10%', zIndex: 100 }}
      onClick={onClick}
    >
      <img src="/imgs/left.png" className={styles.arrowSize} />
    </div>
  );
}

const AdsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 834,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const carouselContent = [
    {
      'image': '/imgs/country/slider/1.png'
    },
    {
      'image': '/imgs/country/slider/2.png'
    },
    {
      'image': '/imgs/country/slider/3.png'
    },
    {
      'image': '/imgs/country/slider/1.png'
    },
    {
      'image': '/imgs/country/slider/2.png'
    },
    {
      'image': '/imgs/country/slider/3.png'
    },
  ];

  return (
    <Slider {...settings}>
      {
        carouselContent.map((item, index) => {
          return (
            <div className={styles.item} key={index}>
              <img src={item.image} alt="" />
            </div>
          )
        })
      }
    </Slider>
  )
}

export default AdsSlider;