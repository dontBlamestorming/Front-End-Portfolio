import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return (
      <div id="greeting">
        <form className="greeting">
          <input type="text" placeholder="이름을 써주세요." />
        </form>
        <h2>안녕하세요. {this.props.nickname}님. 반갑습니다.</h2>
      </div>
    );
  }
}

export default Greeting;
