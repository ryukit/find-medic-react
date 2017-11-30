import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
// import { Provider } from 'react-redux';
// import { myStore } from './store';
// import { appConnector } from './components/app/connector';

// window.store = myStore;
// const MyApp = appConnector(TodoApp);

ReactDOM.render(
    //<Provider store={ myStore }>
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    //</Provider>,
    document.getElementById('root')
);
