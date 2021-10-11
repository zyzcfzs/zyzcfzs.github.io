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
    const focusCoords = React.useRef([0, 0]);
    const [solved, setSolved] = React.useState(false);
    React.useEffect(() => {
        const [row, col] = focusCoords.current;
        const selector = `.row:nth-child(${row + 1}) .col:nth-child(${
            col + 1
        }) input`;
        document.querySelector(selector)?.focus();
    }, [data]);
    return (
        <React.Fragment>
            <div
                ref={container}
                className='container animate__animated animate__fast'
                onKeyDown={(evt) => {
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
                }}
            >
                {data.map((val, row) => {
                    return (
                        <div className='row' key={Math.random()}>
                            {val.map((val, col) => {
                                return (
                                    <div className='col' key={Math.random()}>
                                        <div className='word'>
                                            <input
                                                type='text'
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
                                                onChange={(evt) => {
                                                    if (
                                                        /\d/.test(
                                                            evt.target.value
                                                        ) === false
                                                    ) {
                                                        return;
                                                    }
                                                    const { row, col } =
                                                        evt.target.dataset;
                                                    setData((data) => {
                                                        let newData = data.map(
                                                            (val) => val.slice()
                                                        );
                                                        newData[row][col] =
                                                            Number(
                                                                evt.target.value.slice(
                                                                    -1
                                                                )
                                                            );
                                                        return newData;
                                                    });
                                                }}
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
                style={{ backgroundColor: solved ? 'red' : 'greenyellow' }}
                onClick={() => {
                    if (solved === false) {
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
                            return false;
                        }
                    } else {
                        setData(initialValue);
                        focusCoords.current = [0, 0];
                    }
                    setSolved(!solved);
                }}
            >
                {!solved ? 'Solve' : 'Reset'}
            </button>
        </React.Fragment>
    );
};

export default Solver;
