import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TEXT } from '../constant';
import { textAction } from '../redux/action';
import { expandCheck } from '../utils';
import Header from './header/header';
const Editor = () => {
    const dispatch = useDispatch();
    const { mode } = useSelector((state) => state.toggle);
    const [textValue, setTextValue] = React.useState(TEXT);
    return (
        <div hidden={mode === 'preview'} className="editor shadow-block">
            <Header title="Editor"></Header>
            <textarea
                id="editor"
                value={textValue}
                className={expandCheck(mode, 'editor')}
                onChange={(evt) => {
                    dispatch(textAction(evt.target.value));
                    setTextValue(evt.target.value);
                }}
            ></textarea>
        </div>
    );
};

export default Editor;
