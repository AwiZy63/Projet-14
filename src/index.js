import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/EmployeeForm/EmployeeForm.style.css';
import Router from './Router';

import { Provider } from 'react-redux';
import store from './store/index.store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <Router />
</Provider>);