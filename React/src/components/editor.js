import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { textAction } from '../redux/action';
import * as utils from '../utils';
import Header from './header/header';
const Editor = () => {
    const dispatch = useDispatch();
    const { mode } = useSelector((state) => state.toggle);
    return (
        <div
            className={
                utils.hideElement(mode === 'preview', 'editor shadow-block')
            }
        >
            <Header title='Editor'></Header>
            <textarea
                id='editor'
                value={utils.TEXT}
                className={utils.expandCheck(mode, 'editor')}
                onChange={(evt) => {
                    dispatch(textAction(evt.target.value));
                }}
            ></textarea>
        </div>
    );
};

export default Editor;
