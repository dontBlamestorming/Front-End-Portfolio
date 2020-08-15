import React from "react";
import "./Banner.scss";
// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faJs,
  faCss3,
  faNode,
  faReact,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  const icons = [
    {
      name: "HTML5",
      iconName: faHtml5
    },
    {
      name: "CSS3",
      iconName: faCss3
    },
    {
      name: "JS",
      iconName: faJs
    },
    {
      name: "React",
      iconName: faReact
    },
    {
      name: "NodeJS",
      iconName: faNode
    },
    {
      name: "MySql",
      iconName: faDatabase
    }
  ];

  return (
    <section id="banner">
      <div className="container">
        <div className="banner">
          <h2 className="ir_so">인사 배너</h2>
          <div className="banner_img">
            <a href="#">
              <img src="images/example.png" alt="개발자 사진" />
            </a>
          </div>
          <div className="banner_text">
            <div className="banner_text_box">
              <h3>안녕하세요. 프론트 엔드 개발자 이욱동 입니다.</h3>
              <a href="https://github.com/dontBlamestorming/Front-End-Portfolio">
                <FontAwesomeIcon icon={faGithub} />
                github
              </a>
              <div className="banner_text_icon">
                <ul>
                  {icons.map(icon => (
                    <li>
                      <FontAwesomeIcon icon={icon.iconName} />
                      <span>{icon.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
