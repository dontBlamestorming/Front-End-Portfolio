import React, { Component, Fragment } from "react";
import "./css/reset.css";
import "./css/style.css";

// Routing
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import ContentModal from "./components/ContentModal";
import Footer from "./components/Footer";

import BgPhoto from "../src/components/BgPhoto";

// 실제 사용자 서비스를 위한 Component
// import Clock from "./components/Clock";
// import Greeting from "./components/Greeting";
import Todo from "./components/Todo";
import News from "./components/NewsComponent/News";
// import Todolist from "./components/Todolist";
import Weather from "./components/WeatherComponent/Weather";

// authentication(인증) Components
import SignUpForm from "./components/SignUpForm";
// import LoginForm from "./components/LoginForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      nickname: ""
    };
  }

  handleValueChange = Value => {
    this.setState(Value);
    console.log(this.state);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BgPhoto />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Header />
                  <Banner />
                  <Content />
                  <ContentModal />
                  {/* <LoginForm
                    {...props}
                    onValueChange={this.handleValueChange}
                    userId={this.state.userId}
                    password={this.state.password}
                  /> */}
                  <Footer />
                </Fragment>
              )}
            />

            <Route
              path="/signUp"
              render={props => (
                <SignUpForm {...props} onValueChange={this.handleValueChange} />
              )}
            />

            <Route
              exact
              path="/confirmedUser"
              render={props => (
                <Fragment>
                  <Header />
                  {/* <Greeting {...props} nickname={this.state.nickname} /> */}
                  {/* <Clock /> */}
                  <Todo />

                  {/* <Bg_photo /> */}
                  <Footer />
                </Fragment>
              )}
            />

            <Route
              path="/confirmedUser/news"
              render={props => (
                <Fragment>
                  <Header />
                  <News {...props} />
                  <Footer />
                </Fragment>
              )}
            />

            <Route
              path="/confirmedUser/weather"
              render={props => (
                <Fragment>
                  <Header />
                  <Weather />
                  <Footer />
                </Fragment>
              )}
            />

            <Route
              path="*"
              render={() => {
                return <div>찾을 수 없는 페이지 입니다.</div>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
