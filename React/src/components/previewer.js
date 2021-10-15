import React from 'react';
import { useSelector } from 'react-redux';
import Header from './header/header';
const Previewer = () => {
    const { text, load } = useSelector((state) => state);
    return (
        <div className='previewer edit-block'>
            <Header title='Preview'></Header>
            <div
                dangerouslySetInnerHTML={{ __html: text }}
                style={{ height: load ? 'fit-content' : '10rem' }}
                id='preview'
            ></div>
        </div>
    );
};

export default Previewer;
