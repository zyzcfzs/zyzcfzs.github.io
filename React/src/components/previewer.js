import React from 'react';
import { useSelector } from 'react-redux';
import * as utils from "../utils";
import Header from './header/header';
const Previewer = () => {
    const { text } = useSelector((state) => state.text);
    const {mode} = useSelector(state=>state.toggle)
    return (
        <div className={utils.hideElement(mode==="editor", 'previewer shadow-block')}>
            <Header title='Preview'></Header>
            <div 
                className={utils.expandCheck(mode, 'preview')}
                dangerouslySetInnerHTML={{ __html: text }}
                id='preview'
            ></div>
        </div>
    );
};

export default Previewer;
