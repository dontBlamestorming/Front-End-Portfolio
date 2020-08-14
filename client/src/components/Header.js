import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="header clearfix">
            <h1>
              <h2 className="ir_so">포트폴리오 제목</h2>
              <Link to="/">
                <strong>Front-End-Portfolio</strong>
              </Link>
            </h1>
            <nav className="nav">
              <ul>
                <Link to="/">
                  <li>홈</li>
                </Link>
                <Link to="/confirmedUser/news">
                  <li>최신뉴스</li>
                </Link>
                <Link to="/confirmedUser">
                  <li>Todo</li>
                </Link>
                <Link to="/confirmedUser/weather">
                  <li>날씨</li>
                </Link>
                <Link to="/">
                  <li>개발자</li>
                </Link>
                <Link to="/signUp">
                  <li>로그인</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
