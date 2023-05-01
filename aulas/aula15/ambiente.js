let numeros = [5, 6, 7, 3, 2, 1, 9]
numeros.sort()

/*
for (let pos = 0; pos < numeros.length; pos++) {
    console.log(numeros[pos])
}


for(let pos in numeros) {
    console.log(numeros[pos])
}
*/

let pos = numeros.indexOf(4)
if (pos == -1){
    console.log('O valor não foi encrontrado!')
} else {
    console.log(`O valor 7 está na posição ${pos}`)
}
