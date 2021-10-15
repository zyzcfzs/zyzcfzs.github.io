import React from 'react';
import { useDispatch } from "react-redux";
import { textAction } from '../redux/action';
import Header from './header/header';
const Editor = () => {
    const dispatch = useDispatch()
    return (
        <div className='editor edit-block'>
            <Header title="Editor"></Header>
            <textarea id='editor' onChange={(evt)=>{
              dispatch(textAction(evt.target.value))
            }} ></textarea>
        </div>
    );
};

export default Editor;
