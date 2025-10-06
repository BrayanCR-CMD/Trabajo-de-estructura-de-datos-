function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambia los elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Genera un arreglo de 10 números al azar entre 1 y 100
const randomNumbers = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);

console.log("Lista original:", randomNumbers);
bubbleSort(randomNumbers);
console.log("Lista ordenada:", randomNumbers);