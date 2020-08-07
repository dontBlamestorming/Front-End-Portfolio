import React from "react";
import { Link } from "react-router-dom";
import "./Mainpage.scss";

const MainPage = () => {
  return (
    <body>
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
            <h3>
              안녕하세요. 프론트 엔드 개발자 이욱동 입니다.
              <br />
              <a href="https://github.com/dontBlamestorming/Front-End-Portfolio">
                github
              </a>
            </h3>
          </div>
        </div>
      </section>

      <section id="front">
        <h2 className="ir_so">프론트 페이지 영역</h2>
        <div className="container">
          <div className="row">
            <div className="front">
              <div className="front_news"></div>
              <div className="front_todo"></div>
              <div className="front_weather"></div>
              <div className="front_login"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="sever">
        <h2 className="ir_so">서버 페이지 영역</h2>
        <div className="container">
          <div className="row">
            <div className="server">여기는 서버 설명</div>
          </div>
        </div>
      </section>

      <section id="database">
        <h2 className="ir_so">데이터베이스 페이지 영역</h2>
        <div className="container">
          <div className="row">
            <div className="database">여기는 데이터베이스 설명</div>
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
    </body>
  );
};

export default MainPage;
