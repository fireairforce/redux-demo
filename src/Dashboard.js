import React from 'react';
import { Link,Route ,Redirect} from 'react-router-dom';
import App from './App';
import { connect } from 'react-redux';
import { logout } from './Auth.redux'
import { Button } from 'antd-mobile';

function Erying(){
    return <h2>二营</h2>
}

function Qibinglian(){
    return <h2>骑兵连</h2>
}

class Dashboard extends React.Component{
    render(){
        // console.log(this.props.match);
        const match = this.props.match;
        const redirectToLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <h1>独立团</h1>
                    {this.props.state.isAuth?<Button type="primary" onClick={this.props.logout}>注销</Button> : null}
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>一营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/erying`}>二营</Link>
                    </li>
                    <li>
                    <Link to={`${match.url}/qibinglian`}>骑兵连</Link>
                    </li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}></Route>
                <Route path={`${match.url}/erying`} component={Erying}></Route>
                <Route path={`${match.url}/qibinglian`} component={Qibinglian}></Route>
            </div>
        )
        return(this.props.state.isAuth?app:redirectToLogin)
    }
}

const mapStateToProps = (state)=>{
    return {state:state.auth}
}

const actionCreators = {logout}

Dashboard = connect(mapStateToProps,actionCreators)(Dashboard)

export default Dashboard;