function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Mover los elementos de arr[0..i-1] que son mayores que key
        // a una posición adelante de su posición actual
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const arr = [12, 11, 13, 5, 6];
console.log("Arreglo original:", arr);
const sortedArr = insertionSort(arr);
console.log("Arreglo ordenado:", sortedArr);