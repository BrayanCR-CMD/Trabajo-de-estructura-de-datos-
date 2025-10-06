function quickSort(arr, low, high) {
    if (low < high) {
        // pi es el índice de particionamiento, arr[pi] está en el lugar correcto
        let pi = partition(arr, low, high);

        // Ordenar recursivamente los elementos antes y después de la partición
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high]; // pivote
    let i = low - 1;       // índice del elemento más pequeño

    for (let j = low; j < high; j++) {
        // Si el elemento actual es menor que el pivote
        if (arr[j] < pivot) {
            i++;
            // Intercambiar arr[i] y arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Intercambiar el pivote con el elemento en la posición correcta
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

const data = [10, 7, 8, 9, 1, 5];
console.log("Arreglo original:");
console.log(data);

// Se llama a la función con los índices iniciales
quickSort(data, 0, data.length - 1);

console.log("\nArreglo ordenado:");
console.log(data);