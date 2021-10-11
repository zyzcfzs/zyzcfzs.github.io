import React, { useState } from 'react';
import './css/title.css';
import Weather from './Weather';
const Title = () => {
    return (
        <React.Fragment>
            <div className='title'>
                <h2>Free C<i className="wi wi-hail"></i>de Camp</h2>
                <h2>Weather App</h2>
            </div>
            <Weather ></Weather>
            <div className='footer'>
                Inspired By{' '}
                <a
                    href='https://codepen.io/joshbader/full/EjXgqr/'
                    target='_blank'
                    rel='noreferrer'
                >
                    joshbader
                </a>
            </div>
        </React.Fragment>
    );
};

export default Title;
