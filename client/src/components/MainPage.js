// component
import React from "react";
import { Link } from "react-router-dom";
import "./Mainpage.scss";
import BgPhoto from "./BgPhoto";

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

//     <!-- HTLM5shiv ie6~8 -->
//     <!--[if lt IE 9]>
//     <script src="js/html5shiv.min.js"></script>
//     <script type="text/javascript">
//         alert("현재 당신이 보는 브라우저는 지원하지 않습니다. 최신 브라우저로 업데이트해주세요!");
//     </script>
// <![endif]-->
const MainPage = () => {
  return (
    <div>
      <BgPhoto />
      <div id="portfolio">
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="header clearfix">
                <h1>
                  <h2 className="ir_so">포트폴리오 제목</h2>
                  <strong>Dave's Front-End-Portfolio</strong>
                </h1>
                <nav className="nav">
                  <ul>
                    <Link to="/">
                      <li>홈</li>
                    </Link>
                    <Link to="/">
                      <li>최신뉴스</li>
                    </Link>
                    <Link to="/">
                      <li>Todo</li>
                    </Link>
                    <Link to="/">
                      <li>날씨</li>
                    </Link>
                    <Link to="/">
                      <li>개발자</li>
                    </Link>
                    <Link to="/">
                      <li>로그인</li>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <section id="banner">
          <h2 className="ir_so">인사 배너</h2>
          <div className="banner_text">
            <div className="banner_text_box">
              <h3>안녕하세요. 프론트 엔드 개발자 이욱동 입니다.</h3>
              <a href="https://github.com/dontBlamestorming/Front-End-Portfolio">
                <FontAwesomeIcon icon={faGithub} />
                github
              </a>
              <div className="banner_text_icon">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faHtml5} />
                    <span>HTML5</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCss3} />
                    <span>CSS3</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faJs} />
                    <span>JS</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faReact} />
                    <span>React</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faNode} />
                    <span>NodeJS</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faDatabase} />
                    <span>MySql</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="front">
          <h2 className="ir_so">프론트 페이지 영역</h2>
          <div className="container">
            <div className="row">
              <div className="front">
                <div className="front_news">
                  <figure>
                    <Link to="/">
                      <img src="images/example.png" alt="News image" />
                      <em>News</em>
                    </Link>
                  </figure>
                </div>
                <div className="front_todo">
                  <figure>
                    <Link to="/">
                      <img src="images/example.png" alt="News image" />
                      <em>Todo</em>
                    </Link>
                  </figure>
                </div>
                <div className="front_weather">
                  <figure>
                    <Link to="/">
                      <img src="images/example.png" alt="News image" />
                      <em>Weather</em>
                    </Link>
                  </figure>
                </div>
                <div className="front_login">
                  <figure>
                    <Link to="/">
                      <img src="images/example.png" alt="News image" />
                      <em>Sign Up</em>
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="back">
          <h2 className="ir_so">서버 페이지 영역</h2>
          <div className="container">
            <div className="row">
              <div className="back">
                <div className="server">
                  <img src="images/express.png" alt="Express 이미지" />
                </div>
                <div className="database">
                  <img src="images/mysql.png" alt="MySql 이미지" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <h2 className="ir_so">푸터 영역</h2>
          <div className="container">
            <div className="row">
              <div className="footer">여기는 푸터 영역이다!!</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
