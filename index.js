var list =  [1,2,3,4,5,6,7]



for (let index = 0; index < list.length; index++) {  
    console.log(`data is : ` +  list[index]);
}


//foreach - ไม่สามารถ return ค่าออกมาได้

list.forEach(element => {
    console.log(`data is : ` + element);
});

//map สามารถ return ค่าออกมาได้

var resulth = list.map((db)=> {
    return db*10
})

var resulth1 = list.map(db=> db*10)


console.log(resulth1);




// foreach 
// map 
//filter 
//find 
//every
// reduce




