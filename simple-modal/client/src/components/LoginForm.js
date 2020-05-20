import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"; 
import { Redirect } from "react-router-dom"; 

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId:'',
            password : '',
            redirect : false
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/confirmedUser' />
        }
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.loginUser()
    }

    loginUser = () => {
        axios.post('/signIn/users', {
            userId: this.state.userId,
            password: this.state.password
        }).then(function (response) {
            if(response) {
                this.setRedirect();
            }
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
    };
   
    handleValueChange = (e) => {
        // 아이디와 비밀번호, 닉네임 등을 type할 수 있게 하는 기능
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <div id="login">
                {this.renderRedirect()}
                <div className="login">
                    <form className="loginForm" onSubmit = {this.handleFormSubmit}>
                        <h1>아이디와 비밀번호를 입력해주세요.</h1>
                        ID : <input className="id" type="email" name="userId" value={this.state.userId} placeholder="email" onChange={this.handleValueChange}/><br/>
                        PASSWORD : <input className="password" type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleValueChange}/><br/>
                        <button type="submit">로그인</button>
                    </form>
                    {/* <form className="loginForm" name="loginForm" action="/signIn/users" method="get">
                        <p><input className="id" name="userId" type="text" placeholder="email"/></p>
                        <p><input className="password" name="userPassword" type="password" placeholder="password"/></p>
                        <p><input className="loginBtn" name="loginBtn" type="submit"/></p>
                    </form>
                    <p className="errMent"></p>
                    <a href="/signUp">Sign-Up</a> */}
                    <Link to="/signUp">
                        <button>회원가입</button>
                    </Link>

                </div>
            </div>
        )
    }
}

export default LoginForm;