const listname = [ 
    {name: "Eve", age: 24}, 
    {name: "Adam", age: 48}, 
    {name: "Chris", age: 18}, 
    {name: "Danny", age: 30}
 ]


 var resulthfind = listname.find((db) => {
     return db.age > 20
 })


 var resulthfind1 = listname.find((db) => db.age > 20)

 console.log(resulthfind1);