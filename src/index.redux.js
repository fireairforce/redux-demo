
const ADD = '加'
const REMOVE = '减'


// reducer
export function counter(state = 0,action){
    switch(action.type){
        case ADD:
          return state+1;
        case REMOVE:
          return state-1;
       default:
          return 10;     
    }
}

export function add(){
    return {type:ADD}
}
export function remove(){
    return {type:REMOVE}
}
export function addAsync(){
    // thunk插件的作用，导致这里可以使用异步的函数作为返回值
    return dispatch =>{
        setTimeout(()=>{
           dispatch(add())
        },2000)
    }
}