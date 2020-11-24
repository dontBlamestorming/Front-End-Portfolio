import React, { Component } from "react";
import "./css/reset.css";
import "./css/style.css";

// Routing
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Layout
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import Content from "./components/Content";
import ContentModal from "./components/ContentModal";
// import Footer from "./components/Footer";

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
      nickname: "",
    };
  }

  handleValueChange = (Value) => {
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
              render={(props) => (
                <Layout>
                  <Banner />
                  <Content />
                  <ContentModal />
                  {/* <LoginForm
                    {...props}
                    onValueChange={this.handleValueChange}
                    userId={this.state.userId}
                    password={this.state.password}
                  /> */}
                </Layout>
              )}
            />

            <Route
              path="/signUp"
              render={(props) => (
                <Layout>
                  <SignUpForm
                    {...props}
                    onValueChange={this.handleValueChange}
                  />
                </Layout>
              )}
            />

            <Route
              exact
              path="/confirmedUser"
              render={(props) => (
                <Layout>
                  {/* <Greeting {...props} nickname={this.state.nickname} /> */}
                  {/* <Clock /> */}
                  <Todo />
                  {/* <Bg_photo /> */}
                </Layout>
              )}
            />

            <Route
              path="/confirmedUser/news"
              render={(props) => (
                <Layout>
                  <News {...props} />
                </Layout>
              )}
            />

            <Route
              path="/confirmedUser/weather"
              render={(props) => (
                <Layout>
                  <Weather />
                </Layout>
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
