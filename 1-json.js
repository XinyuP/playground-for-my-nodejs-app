const fs = require('fs')


const dataBuffer = fs.readFileSync('1-json.json')  // binary
const dataJSON = dataBuffer.toString() // binary to string
const user = JSON.parse(dataJSON) // string to object 
user.name = "Blaire" // change object
user.age = 21 
const userJSON = JSON.stringify(user) // object to string
fs.writeFileSync('1-json.json', userJSON)
// const book = {
//     title: 'Beauty',
//     author: 'Blaire'
// }

// const bookJSON = JSON.stringify(book) // convert onject to string 

// fs.writeFileSync('1-json.json', bookJSON)

// console.log(dataBuffer) // binary data
// console.log(dataBuffer.toString())

// const dataJSON = dataBuffer.toString()
// console.log(dataJSON) // string in javaScript
// const data = JSON.parse(dataJSON)

// console.log(data) // json object
// console.log(data.title)  // access property 


// console.log(bookJSON)
// const parsedData = JSON.parse(bookJSON) // convert json data to object
// console.log(parsedData)



