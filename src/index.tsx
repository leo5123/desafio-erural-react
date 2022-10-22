import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Router from './routes';

ReactDOM.render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>,
    document.getElementById('root')
);
