import 'animate.css';
import React from 'react';
import { sudoku } from './suduku';

const Solver = () => {
    /* Define global refs and states */
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
    const currentEle = React.useRef(null);
    const focusCoords = React.useRef([0, 0]);
    const [solved, setSolved] = React.useState(false);
    React.useEffect(() => {
        currentEle.current?.focus?.();
    }, [data]);
    function handleUserSubmit() {
        if (solved === false) {
            // disable the button while solving sudoku
            setSolving(true);
            try {
                setData(sudoku(data));
            } catch (error) {
                container.current.classList.add('animate__shakeX');
                container.current.classList.add('danger');
                setData(initialValue);
                setTimeout(() => {
                    container.current.classList.remove('animate__shakeX');
                    container.current.classList.remove('danger');
                }, 800);
                focusCoords.current = [0, 0];
                setSolving(false);
                return false;
            }
        } else {
            setData(initialValue);
            focusCoords.current = [0, 0];
        }
        // re-enable the button and  change the state of button text.
        setSolved(!solved);
        setSolving(false);
    }
    /**
      handle input changes when input tag's value change
      @function handleChange 
      @param {Event} evt - default event object
     **/
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
        // if the last user input is not a number, ignore them.
        if (/\d$/.test(evt.target.value) === false) {
            return false;
        }
        setData((data) => {
            let newData = data.map((val) => val.slice());
            // only take the last valid digit
            newData[row][col] = Number(evt.target.value.slice(-1));
            return newData;
        });
    }
    /**
    function that changes focusCoords ref based when user press arrow keys
     @function handleKeydown
     @param {Event} evt - default event obj 
    **/
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
    /**
      this is a util function which bind currentEle ref based on current focus coords.
      @function localInput
      @param {number} row
      @param {number} col
     **/
    function locateInput(row, col) {
        const [currentRow, currentCol] = focusCoords.current;
        if (currentCol === col && currentRow === row) {
            return currentEle;
        }
        return null;
    }
    return (
        <React.Fragment>
            <div
                ref={container}
                className='container animate__animated animate__faster'
                onKeyDown={handleKeydown}
            >
                {data.map((val, row) => {
                    return (
                        <div className='row' key={Math.random()}>
                            {val.map((val, col) => {
                                return (
                                    <div
                                        className={
                                            row === focusCoords.current[0] &&
                                            col === focusCoords.current[1]
                                                ? 'col active'
                                                : 'col'
                                        }
                                        key={Math.random()}
                                    >
                                        <div className='word'>
                                            <input
                                                ref={locateInput(row, col)}
                                                type='tel'
                                                onClick={(evt) => {
                                                    const { row, col } =
                                                        evt.target.dataset;
                                                    focusCoords.current = [
                                                        +row,
                                                        +col,
                                                    ];
                                                    setData(data.slice());
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
                onClick={handleUserSubmit}
            >
                {!solved ? 'Solve' : 'Reset'}
            </button>
        </React.Fragment>
    );
};

export default Solver;
