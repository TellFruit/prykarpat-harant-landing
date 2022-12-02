import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

// import video1 from '/videos/thanks1.mp4'
const ReceivedHelp = () => {
  const theme = useTheme();
  const carouselRef = useRef(null);
  // const containerRef = useRef(null);
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    carouselRef.current?.slickPlay();
  }, []);

  const receivedPeople = [
    {
      src: "/videos/video1.mp4",
      lastname: "",
      name: "Ігор",
      surname: "Зіновійович",
    },
    {
      src: "/videos/video2.mp4",
      lastname: "",
      name: "Оксана",
      surname: "Миколаївна",
    },
    {
      src: "/videos/video3.mp4",
      lastname: "Захаров",
      name: "Олег",
      surname: "Генадійович",
    },
    {
      src: "/videos/video4.mp4",
      lastname: "",
      name: "Василь",
      surname: "Васильович",
    },
    {
      src: "/videos/video5.mp4",
      lastname: "Базилюк",
      name: "Людмила",
      surname: "Миколаївна",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    arrow:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={"received-help"}>
      <h2 className={"received-help__title"}>
        <span style={{ color: "#2CDC48" }}>Вже</span> отримали допомогу
      </h2>
      <div className="people-carousel-wrap">
        <Slider className="people-carousel" {...carouselSettings}>
          {receivedPeople?.map((people) => {
            return (
              <>
                <div className="people-card-wrap">
                  <div className="people-card">
                    <div className="people-card__top">
                      <p>{people.name}</p>
                      <p>{people.surname}</p>
                    </div>
                    <video
                      autoPlay
                      loop
                      muted
                      controls
                      src={people?.src}
                      style={{
                        width: "233px",
                        height: "411px",
                      }}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ReceivedHelp;
