const listname = [ 
    {name: "Eve", age: 24}, 
    {name: "Adam", age: 48}, 
    {name: "Chris", age: 18}, 
    {name: "Danny", age: 30}
 ]


 // หาคนที่อายุมากกว่า 25 ปี

 var resulthlist = listname.filter((db) => {
     return db.age < 20
 })

console.log(resulthlist);
