import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RoutePath from './RoutePath';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store'

 
ReactDOM.render( <Provider store={store}><RoutePath /></Provider>,document.getElementById("App"));

serviceWorker.unregister();
