function traverseAndPrint(matrix) {
    console.log("Recorriendo la matriz:");
    matrix.forEach(row => {
        let rowString = '';
        row.forEach(element => {
            rowString += element + '\t';
        });
        console.log(rowString);
    });
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

traverseAndPrint(matrix);