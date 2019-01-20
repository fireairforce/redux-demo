import React from 'react';
import {connect} from 'react-redux';
import {add,remove,addAsync} from './index.redux';

class App extends React.Component{
    render(){
        console.log(this.props.add);
        return(
            <div>
                <h1> 现在有机枪 {this.props.num.counter} </h1>
                <button onClick={this.props.add}>申请枪支</button> 
                <button onClick={this.props.remove}>上交枪支</button> 
                <button onClick={this.props.addAsync}>等2s再交</button> 
           </div>
        )
    }
}
//　用connect 进行连接，相当于你给connect一个组件connect给你吐出一个新的组件
const mapStateToProps=(state)=>{
   return {num:state}
}
/*
 修饰器的写法
 @connect(
     // 你要state什么属性放到props里面
     state=>({num:state}),

     // 你要什么方法，放到props里面，自动dispatch
     { addGun, removeGun, addGunAsync }
 )
*/
const actionCreators = {add,remove,addAsync} 
App = connect(mapStateToProps,actionCreators)(App);
export default App;
