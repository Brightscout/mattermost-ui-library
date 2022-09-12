// Used for testing and viewing the components
import React from 'react';

import ReactDOM from 'react-dom/client';

import Typography from './components/Typography';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        {/* Replace the below by the component/container you need to view */}
        <Typography>{'Mattermost UI Library'}</Typography>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
