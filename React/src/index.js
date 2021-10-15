import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
const Root = () => {
    return (
        <React.StrictMode >
            <App />
        </React.StrictMode>
    )
}
ReactDOM.render(<Root />,document.getElementById("root"))

