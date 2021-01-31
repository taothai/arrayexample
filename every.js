const listname = [ 
    {name: "Eve", age: 24},// > 10 ==> true
    {name: "Adam", age: 48}, // > 10 ==> true 
    {name: "Chris", age: 21}, // >10 ==> false
    {name: "Danny", age: 30}  // > 10 ==>  true
 ]
 
 var everyResulth = listname.every((member) =>{
    return member.age > 20 
 })
 console.log(`Every Is : ` + everyResulth);

 // ทุกตัวจะต้องเป็นไปตามเงื่อนไข 


 // some
//มีแค่ตัวหนึ่งที่เป็นจริง 


var someResulth = listname.some((member) =>{
    return member.age < 20 // true
})

console.log(`Some is : ` + someResulth); // false




