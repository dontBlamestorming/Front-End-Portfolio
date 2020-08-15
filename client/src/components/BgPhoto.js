import React from "react";
import styled from "styled-components";

const BgphotoBlock = styled.div`
  background-image: url(https://source.unsplash.com/category/nature/1600x900);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  min-height: 100vh;
  min-width: 100vh;
  justify-content: center;
  align-items: center;
  z-index: -9998;
`;

const BgphotoBlockCover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -9997;
`;

const ForFixed = styled.div`
  z-index: -9999;
  position: fixed;
  width: 100%;
`;

const BgPhoto = () => {
  return (
    <ForFixed>
      <BgphotoBlock>
        <BgphotoBlockCover></BgphotoBlockCover>
      </BgphotoBlock>
    </ForFixed>
  );
};
/*
function BgPhotoInit() {
  const backGroundImg = document.querySelector("#root .App .bgPhoto");
  const unsplashUrl = "https://source.unsplash.com/category/nature/1600x900";
  console.log(unsplashUrl);

  function getImage() {
    let bgImg = new Image();
    bgImg.alt = "배경화면";
    bgImg.src = unsplashUrl;
    backGroundImg.appendChild(bgImg);
  }

  function init() {
    getImage();
  }

  init();
}

class BgPhoto extends Component {
  componentDidMount() {
    BgPhotoInit();
  }

  render() {
    return (
      <div id="bgPhoto">
        <div id="container">
          <div className="bgPhoto"></div>
        </div>
      </div>
    );
  }
}
*/

export default BgPhoto;
