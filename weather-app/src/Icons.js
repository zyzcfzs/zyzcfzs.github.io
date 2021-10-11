import React from 'react';
import "./css/icon.css";
export function SunShower() {
    return (
        <div class='icon sun-shower'>
            <div class='cloud'></div>
            <div class='sun'>
                <div class='rays'></div>
            </div>
            <div class='rain'></div>
        </div>
    );
}
export function Thunder() {
    return (
        <div class='icon thunder-storm'>
            <div class='cloud'></div>
            <div class='lightning'>
                <div class='bolt'></div>
                <div class='bolt'></div>
            </div>
        </div>
    );
}

export function Cloudy() {
    return (
        <div class='icon cloudy'>
            <div class='cloud'></div>
            <div class='cloud'></div>
        </div>
    );
}

export function Flurries() {
    return (
        <div class='icon flurries'>
            <div class='cloud'></div>
            <div class='snow'>
                <div class='flake'></div>
                <div class='flake'></div>
            </div>
        </div>
    );
}
export function Sunny() {
    return (
        <div class='icon sunny'>
            <div class='sun'>
                <div class='rays'></div>
            </div>
        </div>
    );
}

export function Rainy() {
    return (
        <div class='icon rainy'>
            <div class='cloud'></div>
            <div class='rain'></div>
        </div>
    );
}
