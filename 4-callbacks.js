//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a, b, callback) => {
//     setTimeout(() => {
//         sum = a + b;
//         callback(sum)
//     }, 2000);
// }

const add = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 2000);
};

add(1, 4, (sum) => {
	console.log(sum); // Should print: 5
});

setTimeout(() => {
	console.log('2s');
}, 2000);

// setTimeout is a node-provided API and it is asynchronous
// array method like forEach and filter also use callback but synchronous

const names = ['Blaire', 'Ted', 'Cindy', 'Alexander'];
const shortName = names.filter((name) => name.length <= 5);
console.log(shortName);

const geocode = (address, callback) => {
	setTimeout(() => {
		const data = {
			latitude: 0,
			longitude: 0,
		};
		callback(data);
	}, 2000);
};

geocode('Beijing', (dataaaa) => {
	console.log(dataaaa);
});

// no callback functions get executed until the call stack is empty ---> mean() has to finish first

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         return data
//     }, 2000);
// }///// not work :(((((

// a callback function is a function we provide as an argument to another function
// with intention of having it called later on
