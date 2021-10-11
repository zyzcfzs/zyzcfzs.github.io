import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
const Root = () => {
    return (
        <React.StrictMode>
            <App></App>
        </React.StrictMode>
    );
};
ReactDOM.render(<Root></Root>, document.getElementById('root'));
