import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"; 
import { Redirect } from "react-router-dom"; 

class signUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId:'',
            password : '',
            nickname : '',
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
        this.signUpUser()
    }

    signUpUser = () => {
        axios.post('/signUp/users', {
            userId: this.state.userId,
            password: this.state.password,
            nickname : this.state.nickname
        }).then(function (response) {
            if(response.data.redirectURL) {
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
            <div id="signUp">
                {this.renderRedirect()}
                <div className="signUp">
                    <form className="signUpForm" onSubmit = {this.handleFormSubmit}>
                        <h1>회원가입시 필요한 정보를 입력해 주세요.</h1>
                        ID : <input className="id" type="email" name="userId" value={this.state.userId} placeholder="email" onChange={this.handleValueChange}/><br/>
                        PASSWORD : <input className="password" type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleValueChange}/><br/>
                        NICKNAME : <input className="nickname" type="text" name="nickname" value={this.state.nickname} placeholder="Nick Name" onChange={this.handleValueChange}/><br/>
                        <button type="submit">회원가입</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default signUpForm;