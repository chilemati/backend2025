// all imports should be at the top of a js file

const { User } = require("./data");
const os = require('os');
const fs = require('fs');

let ages = [1,2,3,45,5];
console.log(ages)
ages.map(each=> {
    console.log(each*4);
})
console.log(ages.length)
console.log(ages[3])
console.log(User.email)

// os

console.log(os.platform())
console.log(os.machine())
console.log(os.version());

// fs

// create  a text file

// fs.writeFileSync('./test.txt','Line one \n Line two',(a,b)=> {
//     console.log(a,b)
//     console.log('Done!')
// })

// read from a text file
fs.readFile('./test.txt',{encoding: "utf-8"},(err,data)=> {
    if(err) {
        console.log('An error Occured')
    }else{
        console.log(data)

    }
})

// create and delete folder
// fs.mkdir('./data/data1',(err)=> {
//     if(err) {
//         console.log('An error Occured')
//     }else{
//         console.log('Done!')
//     }
// })
fs.rmdir('./data',(err)=> {
    if(err) {
        console.log('An error Occured')
        console.log(err)
    }else{
        console.log('Done!')
    }
})