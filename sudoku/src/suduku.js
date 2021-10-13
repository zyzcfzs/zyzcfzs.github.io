export function sudoku(arr) {
    let list = arr.map((val) => val.slice());
    function checkValid() {
        let rowArr = list.map((val) => val.slice());
        let colArr = list.map((val, idx) => list.map((val) => val[idx]));
        let innerGrid = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                innerGrid.push(
                    list
                        .slice(i * 3, i * 3 + 3)
                        .map((val) => val.slice(j * 3, j * 3 + 3))
                        .flat()
                );
            }
        }
        for (let i of [...rowArr, ...colArr, ...innerGrid]) {
            let nonZeroArray = i.filter((val) => val !== 0);
            if (new Set(nonZeroArray).size !== nonZeroArray.length) {
                throw new TypeError('wrong input');
            }
        }
    }
    // retrive the value which is to be determined.
    function zeroCoords() {
        let result = [];
        for (let i of list.keys()) {
            for (let j of list[i].keys()) {
                list[i][j] === 0 ? result.push({ x: i, y: j }) : void 0;
            }
        }
        return result;
    }
    function check(x, y, value) {
        function roundByThree(num) {
            return (num + 1) % 3 === 0
                ? (num + 1) / 3 - 1
                : parseInt((num + 1) / 3);
        }
        const thirdArr = list
            .slice(3 * roundByThree(x), 3 * roundByThree(x) + 3)
            .map((val) =>
                val.slice(3 * roundByThree(y), 3 * roundByThree(y) + 3)
            )
            .flat();
        return (
            !list[x].includes(value) &&
            !list.map((val) => val[y]).includes(value) &&
            !thirdArr.includes(value)
        );
    }
    function solve(coordList) {
        if (coordList.length < 1) return true;
        const { x, y } = coordList[0];
        for (let i = 1; i < 10; i++) {
            if (check(x, y, i) === true) {
                list[x][y] = i;
                if (solve(coordList.slice(1)) === true) {
                    return true;
                }
                list[x][y] = 0;
            }
        }
        return false;
    }
    function main() {
        checkValid();
        solve(zeroCoords());
        list.forEach((val) =>
            val.forEach((val) => {
                if (val === 0) throw new Error('No solution can be found');
            })
        );
        return list;
    }
    return main();
}
