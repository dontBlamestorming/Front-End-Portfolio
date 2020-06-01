import React, { Component } from "react";
import axios from "axios";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";

// const BirthInfo = () => {
//   let bowl = [];
//     for(var i = 1; i < 13; i++) {
//       bowl = bowl + `<option value=${i}>${i}월</option>`;
//     }    
//   return (
//     <select name="score" id="select-id">
//       {bowl}
//     </select>
//   )  
// }
// 왜 render될 때 bowl안의 값들이 ""로 들어가는지 모르겠음. 함수 실행의 문제일까 아니면 데이터형의 문제일까?

const Notice = ({ isSame }) => {
  return (
    <p>{isSame ? "동일한 비밀번호 입니다." : "동일한 비밀번호를 입력해 주세요."}</p>
  );
};

class signUpForm extends Component {

  // shouldComponentUpdate(newProps, newState) {
  // 렌더링 최적화 
  // }

  constructor(props) {
    super(props);
    this.state = {
      userId : "",
      password : "",
      nickname : "",
      checkPassword : "",
      birthYear : "",
      birthMonth : "",
      birthDay : "",
      gender : "",
      redirect : false,
      isDuplicate : false,
      isSamePassword : false
    };
  }

  handleBtnOnClick = e => {
    e.preventDefault();
    this.DuplicateEmailCheck();
  };

  DuplicateEmailCheck = () => {
    axios
      .post("/checkEmail", {
        typedEmail: this.state.userId
      })
      .then(
        function(response) {
          if (response.data.isDuplicate === true) {
            this.setIsDuplicate();
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  };

  setIsDuplicate = () => {
    this.setState({
      isDuplicate: true
    });
  };

  renderDuplicateWarning = () => {
    if (this.state.isDuplicate) {
      return <p>중복된 이메일입니다. 다른 이메일을 사용해 주세요.</p>;
    }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/confirmedUser" />;
    }
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.signUpUser();
  };

  signUpUser = () => {
    axios
      .post("/signUp/users", {
        userId: this.state.userId,
        password: this.state.password,
        nickname: this.state.nickname,
        birthYear : this.state.birthYear,
        birthMonth : this.state.birthMonth,
        birthDay : this.state.birthDay,
        gender : this.state.gender,
      })
      .then(
        function(response) {
          if (response.data.redirectURL) {
            this.setRedirect();
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  };

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
    console.log(nextState);
  };

  handleReconfirmPassword = e => {
    let isSamePassword;
    let nextPassword = {};
    const inputValue = e.target.value;
    nextPassword[e.target.name] = inputValue;
    this.setState(nextPassword);

    // 비밀번호 동일여부 판단
    if(this.state.password === inputValue) {
      isSamePassword = true;
    } else {
      isSamePassword = false;
    }

    this.setState({ isSamePassword });
  };

  // 생년월일  - 일단 
  // 형변환도 문제가 아님, 렌더링 순서가 문제인 듯   
  // getMonth = () => {
  //   // let monthBowl = new Array;
  //   let bowl = [];
  //   for(var i = 1; i < 13; i++) {
  //     bowl = bowl + `<option value=${i}>${i}월</option>`;
  //   }
  //   console.log(bowl);
  //   return bowl;
  // }


  render() {
    return (
      <div id="signUp">
        {this.renderRedirect()}
        <div className="signUp">
          <form className="signUpForm" onSubmit={this.handleFormSubmit}>
            <h1>회원가입시 필요한 정보를 입력해 주세요.</h1>
            ID :{" "}
            <input
              className="id"
              type="email"
              name="userId"
              value={this.state.userId}
              placeholder="email"
              onChange={this.handleValueChange}
            />
            <button className="emailCheckBtn" onClick={this.handleBtnOnClick}>
              중복체크
            </button>
            <br />
            {this.renderDuplicateWarning()}

            PASSWORD :{" "}
            <input
              className="password"
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleValueChange}
            />
            <br />
            RECONFIRM PASSWORD :{" "}
            <input
              className="checkPassword"
              type="password"
              name="checkPassword"
              value={this.state.checkPassword}
              placeholder="reconfirm password"
              onChange={this.handleReconfirmPassword}
            />
            <br />
            <Notice               
              isSame={this.state.isSamePassword}
            />
            NICKNAME :{" "}
            <input
              className="nickname"
              type="text"
              name="nickname"
              value={this.state.nickname}
              placeholder="Nick Name"
              onChange={this.handleValueChange}
            />
            <br />
            성별 : 
            <label 
              for="genderInput1, genderInput2" // is it working?
              onChange={this.handleValueChange}
            >
              <input
                id="genderInput1" 
                className="genderMale"
                name="gender"
                type="radio"
                value="Male"
              />남자

              <input 
                id="genderInput2" 
                className="genderFemale"
                name="gender"
                type="radio" 
                value="Female"
              />여자
            </label>
            <br />

            생년월일 : 
            <input 
              className="birthYear"
              type="text"
              name="birthYear"
              maxlength="4" 
              placeholder="년(4자)"   
              onChange={this.handleValueChange}
              value={this.state.birthYear}
            />년

            <label>
              <select
                className="birthMonth"
                name="birthMonth"
                value={this.state.birthMonth}
                onChange={this.handleValueChange}
              >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
              </select>월
            </label>

            <input 
              className="birthDay"              
              type="text"
              value={this.state.birthDay}
              name="birthDay" 
              maxlength="2" 
              placeholder="일" 
              onChange={this.handleValueChange}
            />일
            {/* <BirthInfo /> */}
            
            <br />
            <button className="signUpBtn" type="submit">
              회원가입
            </button>
          </form>


        </div>
      </div>
    );
  }
}

export default signUpForm;
