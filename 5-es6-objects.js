// Object property shorthand
const name = 'Blaire';
const userAge = 21;

// // const user = {
// //     name: name,
// //     age: userAge,
// //     location: 'Ann Arbor'
// // }

const user = {
	name,
	age: userAge,
	location: 'Ann Arbor',
};

console.log(user);

//Object destructuring

const product = {
	lebal: 'notebook',
	price: 3,
	stock: 200,
	salePrice: undefined,
	//rating: 23
};

// const { lebal, stock} = product
// console.log(lebal, stock)

// const { lebal: pppplebal, stock: uuustock, rating = 5} = product // rename | set up default
// console.log(pppplebal, uuustock, rating)

const transaction = (type, { lebal, stock=0 } = {} ) => {
	console.log(type, lebal, stock);
};

transaction('order', product);
