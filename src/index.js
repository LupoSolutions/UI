import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import { Provider} from "react-redux";
// import configureStore from "./store/Store";
import {store} from "./store/Store";


const root = ReactDOM.createRoot(document.getElementById('app'));
// const store = configureStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);




