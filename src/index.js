import React from 'react';
import ReactDom from 'react-dom';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware,compose} from 'redux';
import { BrowserRouter, Route ,Redirect,Switch} from 'react-router-dom'
import Auth from './Auth';
import Dashboard from './Dashboard';
import reducers from './reducers';
import './config';
const reduxDevtools  = window.devToolsExtension?window.devToolsExtension():f=>f;
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
));
// 登录页面　没有登录信息统一跳转到login

ReactDom.render(
     (<Provider store={store}>
       <BrowserRouter>
        <div>
        　　<Switch>
                <Route path="/login" exact component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Redirect to="/dashboard"></Redirect>
            </Switch>
       </div>
      </BrowserRouter>
     </Provider>),
document.getElementById('root')
);
