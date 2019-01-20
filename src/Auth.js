import React from 'react';
import {connect} from 'react-redux';
import {login,getUserData} from './Auth.redux';
import {Redirect} from 'react-router-dom';
import {Button} from 'antd-mobile';

class Auth extends React.Component{
    state={
        data:[]
    }
    componentDidMount(){
        this.props.getUserData();
    }
    render(){
        // console.log(this.state.data.length!=0?this.state.data[0].user:null);
        // console.log(this.props.state);
        return(
            <div>
                <h2>我的名字是{`${this.props.state.user}`}， 我的年龄是{`${this.props.state.age}`}</h2>
                {this.props.state.isAuth?<Redirect to="/dashboard" />:null}
                <h2>您没有权限查看当前页面，请您登录之后再查看</h2>
                <Button type="primary" onClick={this.props.login}>登录</Button>
            </div>
        )
    }
} 

const mapStateToProps = (state)=>{
  return {state:state.auth}
}
const actionCreators = { login,getUserData }

Auth = connect(mapStateToProps,actionCreators)(Auth);

export default Auth;