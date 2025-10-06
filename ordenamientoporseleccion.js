function selectionSort(arr) {
    const n = arr.length;

    // Mover el límite de la sub-lista no ordenada
    for (let i = 0; i < n - 1; i++) {
        // Encontrar el elemento mínimo en la lista no ordenada
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Intercambiar el elemento mínimo encontrado con el primer elemento
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Sintaxis de desestructuración para intercambiar
        }
    }
    return arr;
}

const data = [64, 25, 12, 22, 11];
console.log("Arreglo original:");
console.log(data);

selectionSort(data);

console.log("\nArreglo ordenado:");
console.log(data);