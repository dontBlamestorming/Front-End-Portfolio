import React, { useState } from "react";
import "./ContentModal.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// transition효과 주기 위해 사용할 것
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Modal = ({ data, exitModal }) => {
  console.log(data);
  return (
    <div className="contentModal_megabox">
      <div className="overlay">
        <button name="exitModal" onClick={() => exitModal(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="modal">
        <img className="megaboxImg" src={data.img} alt={data.alt} />
      </div>
    </div>
  );
};

const ContentModal = () => {
  const [clickedImg, setClickedImg] = useState(false);
  const [modalData, setModalData] = useState({});
  const [data, setData] = useState([
    {
      id: 0,
      title: "Megabox site",
      img: "images/megabox_main.png",
      alt: "메가박스 이미지",
    },
    {
      id: 1,
      title: "Responsive web",
      img: "images/responsive-web.png",
      alt: "반응형 웹 이미지",
    },
    {
      id: 2,
      title: "Web messenger",
      img: "images/megabox_main.png",
      alt: "웹 메신저 이미지",
    },
  ]);

  const onClick = (data) => {
    setClickedImg(true);
    setModalData(data);
  };

  return (
    <section id="other_project">
      <h2 className="ir_so">서버 페이지 영역</h2>
      <div className="container">
        <div className="other_project">
          {/* Megabox */}
          <div className="project1">
            <img
              src="images/express.png"
              alt="Express 이미지"
              onClick={() => onClick(data[0])}
            />
          </div>

          {/* Responsive web */}
          <div className="project2">
            <img
              src="images/express.png"
              alt="MySql 이미지"
              onClick={() => onClick(data[1])}
            />
          </div>

          {/* Web messenger */}
          <div className="project3">
            <img
              src="images/express.png"
              alt="MySql 이미지"
              onClick={() => onClick(data[2])}
            />
          </div>
        </div>
        {clickedImg ? (
          <Modal data={modalData} exitModal={setClickedImg} />
        ) : null}
      </div>
    </section>
  );
};

export default ContentModal;
