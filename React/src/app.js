import React from 'react';
import { Provider } from 'react-redux';
import Editor from './components/editor';
import Previewer from './components/previewer';
import "./css/style.css";
import { store } from "./redux/store";
const App = () => {
    return (
           <Provider store={store}>
            <Editor></Editor>
            <Previewer></Previewer>
           </Provider>
    );
};

export default App;
