import React from 'react';
import Card from './card';
import "./css/style.css";
function randomColor() {
    return '#' + parseInt(0xffffff * Math.random()).toString(16);
}
const App = () => {
    const [theme,setTheme] = React.useState(randomColor())
    return (
        <React.Fragment>
            <div className='background' style={{color:theme,background:theme}}>
                <Card theme={theme} setTheme={setTheme} randomColor={randomColor}/>

            </div>
        </React.Fragment>
    );
};

export default App;
