let numberRange  = [1,2,3,4,5,6,7,8,9,10]
function sum(array){
    let count = 0
    let total = 0
    for(i = 0; i < array.length; i++){
        total += array[i]  
        console.log(`processing: ${array[i]}`)
    }
    console.log(`The total of this array is: ${total}`)
}

sum(numberRange)