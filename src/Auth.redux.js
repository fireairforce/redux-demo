import axios from 'axios';
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'

const initState = {
   isAuth:false,
   user:'zoomdong',
   age:98
}

export function auth( state = initState ,action){
    // console.log(state,'-------',action);
    console.log(action.payload);
    switch(action.type){
        case LOGIN:
           return {...state,isAuth:true} // 把state展开之后然后把里面的isAuth的值改成true
        case LOGOUT:
           return {...state,isAuth:false} 
        case USER_DATA:
           return {...state,...action.payload[0]} 
           // 这里使用展开运算符，把action.payload[0]里面的user和age直接赋值到了前面state里面的user,和state里面
        //    return {...}
        default:
          return state
    }
}

// 生成action

export function getUserData(){
    //dispatch
    return dispatch=>{
       axios.get('/data').then(res=>{
           if(res.status===200){
            //    console.log(res)
            // dispatch({
            //     type:USER_DATA,
            //     payload:res.data
            // })
            dispatch(userData(res.data)) //如果请求成功，就可以用dispatch派发一个函数请求(userData)故去
           }
       })
    }
}

export function userData (data){
   return {type:USER_DATA,payload:data}
}

export function login(){
    return { type:LOGIN }
}

export function logout(){
    return { type:LOGOUT }
}
