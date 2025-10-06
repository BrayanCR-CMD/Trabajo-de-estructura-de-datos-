function binarySearch(arr, item, low, high) {
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (item === arr[mid]) {
            return mid + 1;
        } else if (item > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

function binaryInsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        
        // Encontrar la posición de inserción usando búsqueda binaria
        const insertionPoint = binarySearch(arr, key, 0, i - 1);
        
        // Remover el elemento de su posición actual y insertarlo en la nueva
        // El método splice maneja el desplazamiento automáticamente
        arr.splice(i, 1); // Quita el elemento de la posición i
        arr.splice(insertionPoint, 0, key); // Inserta key en la posición encontrada
    }
    return arr;
}

const arr = [37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54];
console.log("Arreglo original:", arr);
const sortedArr = binaryInsertionSort(arr);
console.log("Arreglo ordenado:", sortedArr);