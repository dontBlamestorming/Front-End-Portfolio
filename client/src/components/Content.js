import React, { useCallback } from "react";
import "./Content.scss";
import { Link } from "react-router-dom";

const Content = () => {
  const images = [
    {
      className: "front_news",
      name: "News",
      link: "/confirmedUser/news",
      src: "images/example.png",
      alt: "News image"
    },
    {
      className: "front_todo",
      name: "Todo",
      link: "/confirmedUser",
      src: "images/example.png",
      alt: "Todo image"
    },
    {
      className: "front_weather",
      name: "Weather",
      link: "/",
      src: "images/example.png",
      alt: "Weather image"
    },
    {
      className: "front_login",
      name: "Sign Up",
      link: "/",
      src: "images/example.png",
      alt: "SignUp image"
    }
  ];

  const genImg = useCallback(
    images =>
      images.map(image => (
        <div className={image.className}>
          <figure>
            <Link to={image.link}>
              <img src={image.src} alt={image.alt} />
              <em>{image.name}</em>
            </Link>
          </figure>
        </div>
      )),
    [images]
  );

  return (
    <section id="front">
      <h2 className="ir_so">프론트 페이지 영역</h2>
      <div className="container">
        <div className="row">
          <div className="front">{genImg(images)}</div>
        </div>
      </div>
    </section>
  );
};

export default Content;
