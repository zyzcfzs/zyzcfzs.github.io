import 'animate.css';
import React from 'react';
import { sudoku } from './suduku';

const Solver = () => {
    let initialValue = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    let container = React.useRef(null);
    const [data, setData] = React.useState(initialValue);
    const [solving, setSolving] = React.useState(false);
    const focusCoords = React.useRef([0, 0]);
    const [solved, setSolved] = React.useState(false);
    React.useEffect(() => {
        const [row, col] = focusCoords.current;
        const selector = `.row:nth-child(${row + 1}) .col:nth-child(${
            col + 1
        }) input`;
        document.querySelector(selector)?.focus();
    }, [data]);
    function handleChange(evt) {
        const { row, col } = evt.target.dataset;
        if (evt.nativeEvent.inputType === 'deleteContentBackward') {
            setData((data) => {
                let newData = data.map((val) => val.slice());
                newData[row][col] = 0;
                return newData;
            });
            return false;
        }
        if (/\d$/.test(evt.target.value) === false) {
            return false;
        }
        setData((data) => {
            let newData = data.map((val) => val.slice());
            newData[row][col] = Number(evt.target.value.slice(-1));
            return newData;
        });
    }
    function handleKeydown(evt) {
        let code = evt.code.toLowerCase();
        let [row, col] = focusCoords.current;
        if (code.startsWith('arrow')) {
            if (code === 'arrowup') {
                if (row - 1 < 0) {
                    return false;
                }
                focusCoords.current = [row - 1, col];
            } else if (code === 'arrowdown') {
                if (row + 1 > 8) {
                    return false;
                }
                focusCoords.current = [row + 1, col];
            } else if (code === 'arrowleft') {
                if (col - 1 < 0) {
                    return false;
                }
                focusCoords.current = [row, col - 1];
            } else if (code === 'arrowright') {
                if (col + 1 > 8) {
                    return false;
                }
                focusCoords.current = [row, col + 1];
            }
            setData(data.slice());
        }
    }
    return (
        <React.Fragment>
            <div
                ref={container}
                className='container animate__animated animate__fast'
                onKeyDown={handleKeydown}
            >
                {data.map((val, row) => {
                    return (
                        <div className='row' key={Math.random()}>
                            {val.map((val, col) => {
                                return (
                                    <div className='col' key={Math.random()}>
                                        <div className='word'>
                                            <input
                                                type='tel'
                                                onFocus={(evt) => {
                                                    evt.target.parentElement.parentElement.classList.add(
                                                        'active'
                                                    );
                                                    const { row, col } =
                                                        evt.target.dataset;
                                                    focusCoords.current = [
                                                        +row,
                                                        +col,
                                                    ];
                                                }}
                                                onBlur={(evt) => {
                                                    evt.target.parentElement.parentElement.classList.remove(
                                                        'active'
                                                    );
                                                }}
                                                data-row={row}
                                                data-col={col}
                                                value={val === 0 ? '' : val}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <button
                disabled={solving ? true : false}
                style={{ backgroundColor: solved ? 'red' : 'greenyellow' }}
                onClick={() => {
                    if (solved === false) {
                        setSolving(true)
                        try {
                            setData(sudoku(data));
                        } catch (error) {
                            container.current.classList.add('animate__shakeX');
                            container.current.classList.add('danger');
                            setData(initialValue);
                            setTimeout(() => {
                                container.current.classList.remove(
                                    'animate__shakeX'
                                );
                                container.current.classList.remove('danger');
                            }, 1000);
                            focusCoords.current = [0, 0];
                            setSolving(false);
                            return false;
                        } 
                    } else {
                        setData(initialValue);
                        focusCoords.current = [0, 0];
                    }
                    setSolved(!solved);
                    setSolving(false);
                }}
            >
                {!solved ? 'Solve' : 'Reset'}
            </button>
        </React.Fragment>
    );
};

export default Solver;
