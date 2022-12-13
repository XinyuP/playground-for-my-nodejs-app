// const square = function (x) {
//     return x * x
// }

// const square =  x => {
//     return x * x
// }

// const square =  x => x * x

// console.log(square(323))

// const event = {
//     name: 'BDay Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name)
//     }
// }

// const event = {
//     name: 'BDay Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)
//     }
// }
// ====> Guest list for undefined
// arrow functions are not well suited for methods properties that are functions
// cannot access this
// this case, it is better to use standard function

// but we can also write like this
// this is standard function though
const event = {
	name: 'BDay Party',
	guestList: ['Blaire', 'Ted', 'Cindy'],
	printGuestList() {
		//do not use arrow function here
		console.log('Guest list for ' + this.name);
		this.guestList.forEach((guest) => {
			// good to use arrow function here
			console.log(guest + ' is attending ' + this.name);
		});
	},
};

// arrow function is poor for methods
// but great for everything else

event.printGuestList();
