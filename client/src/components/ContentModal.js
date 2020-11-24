import React, { useState } from "react";
import "./ContentModal.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { TransitionGroup, CSSTransition } from "react-transition-group";

const Megabox = ({ data, exitModal }) => {
  return (
    <div className="contentModal_megabox">
      <div className="overlay">
        <button name="exitModal" onClick={() => exitModal(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="megabox">
        <img
          className="megaboxImg"
          src="images/megabox_main.png"
          alt="메가박스 이미지"
        />
      </div>
    </div>
  );
};

const ContentModal = () => {
  const [clickedImg, setClickedImg] = useState(true);

  // const [modal, setModal] = useState(false);
  // const [modalData, setModalData] = useState("");
  const [data, setData] = useState([
    { title: "Megabox site", id: 0 },
    { title: "Responsive site", id: 1 },
    { title: "Something site", id: 2 },
  ]);

  const project = (data) => {
    // setModalData(data.title);
    return (
      <div>
        {data.id === 0 ? (
          <Megabox data={data} exitModal={setClickedImg} />
        ) : null}

        {/* {data.id === 1 ? <ResponsiveWeb data={data} showModal={parentShowModal}/> : null}
      {data.id === 2 ? <Something data={data} showModal={parentShowModal}/> : null}   */}
      </div>
    );
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
              onClick={() => setClickedImg(true)}
            />
          </div>

          <div className="project2">
            <img src="images/express.png" alt="MySql 이미지" />
          </div>

          <div className="project3">
            <img src="images/express.png" alt="MySql 이미지" />
          </div>
        </div>
        {clickedImg ? project(data[0]) : null}
      </div>
    </section>
  );
};

export default ContentModal;
