var numbers = [1,2,3,4,5,6,7,8,9] 

let resulth = 10

for (let index = 0; index < numbers.length; index++) {

    resulth += numbers[index]
}

console.log(resulth);



var reduceResulth = numbers.reduce((sum,number) => {
    return sum + number
},10)

console.log(reduceResulth);
