import React, { useState } from "react";
import "./ContentModal.scss";

const ContentModal = () => {
  const [clickedImg, setClickedImg] = useState(false);

  const onClick = () => {
    setClickedImg(true);
  };

  const project = () => {
    return (
      <div
        className="fuck"
        role="presentation"
        style={{ transform: "all 3s ease 0s", background: "red" }}
      >
        i am Cliked
      </div>
    );
  };

  return (
    <section id="other_project">
      <h2 className="ir_so">서버 페이지 영역</h2>
      <div className="container">
        <div className="row">
          <div className="other_project">
            <div className="project1">
              <img
                src="images/express.png"
                alt="Express 이미지"
                onClick={() => onClick()}
              />
              {clickedImg ? project() : null}
            </div>
            <div className="project2">
              <img src="images/express.png" alt="MySql 이미지" />
            </div>
            <div className="project3">
              <img src="images/express.png" alt="MySql 이미지" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentModal;
