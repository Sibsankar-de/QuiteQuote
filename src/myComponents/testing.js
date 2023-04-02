
// const contentMaker = (contents) => {
//     const List = [];
//     var x = 0;
//     for (let i in contents) {

//         for (let j of contents[i].elem2) {
            
//             List.push({ userName: contents[i].userName, dpImg: contents[i].elem1, feedImg: j, isLiked: 'isLiked_' + (x + 1) })
//             x = x+1;
//         };
//     }


//     const numList = [];
//     let max = (List.length - 1);
//     for (let i = 0; i < max + 1; i++) {
//         let no = Math.floor(Math.random() * (max - 0 + 1)) + 0;
//         if (!numList.includes(no)) {
//             numList.push(no);
//         }
//         else {
//             i = i - 1;
//         }
//     }
//     const newList = [];
//     const likeList = [];
//     for (let i of numList) {
//         newList.push(List[i]);
//         likeList.push({
//             likeName: List[i].isLiked,
//             lkePos: false
//         });

//     }
//     return likeList;
// }



// const obj = {
//     love: {
//         userName: 'Love_quotes',
//         elem1: 'love',
//         elem2: ['hg', 'hdj', 'yrt', 'hdte'],
//     },
//     sad: {
//         userName: 'Sad_quotes',
//         elem1: 'sad',
//         elem2: ['ytwyr', 'tquiqe', 'plnf', 'qewdg'],
//     },
//     happy: {
//         userName: 'Happy_quotes',
//         elem1: 'happy',
//         elem2: ['hhgxhhg', 'eefrg', '34wrg', 'ij8dsf'],
//     },

// };

// console.log(contentMaker(obj));

// // export default testing

// var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// arr = arr.filter((item)=>{
//     return item !== 'c';
// })
// arr = arr.filter((item)=>{
//     return item !== 'b';
// })


// arr.splice(arr.findIndex('a'),1);
// console.log(arr);
// console.log('length: '+arr.length);


// const obj = {
//     love: {
//         userName: 'Love_quotes',
//         elem1: 'love',
//         elem2: ['hg', 'hdj', 'yrt', 'hdte'],
//     },
//     sad: {
//         userName: 'Sad_quotes',
//         elem1: 'sad',
//         elem2: ['ytwyr', 'tquiqe', 'plnf', 'qewdg'],
//     },
//     happy: {
//         userName: 'Happy_quotes',
//         elem1: 'happy',
//         elem2: ['hhgxhhg', 'eefrg', '34wrg', 'ij8dsf'],
//     },
    
// };

// let x=0;
// for(let i in obj){
//     x+=obj[i].elem2.length;
// }
// console.log(x);

// const list = ['love']

// const newObj = {}
// // var i = 0;

// for (var key in obj){
//     if(obj.hasOwnProperty(key)){
//         if(list.includes(key)){
//             newObj[key] = obj[key];
//         }
//     }
// }
// console.log(newObj);

// var addToObject = function (obj, key, value, index) {

// 	// Create a temp object and index variable
// 	var temp = {};
// 	var i = 0;

// 	// Loop through the original object
// 	for (var prop in obj) {
// 		if (obj.hasOwnProperty(prop)) {

// 			// If the indexes match, add the new item
// 			if (i === index && key && value) {
// 				temp[key] = value;
// 			}

// 			// Add the current item in the loop to the temp obj
// 			temp[prop] = obj[prop];

// 			// Increase the count
// 			i++;

// 		}
// 	}

// 	// If no index, add to the end
// 	if (!index && key && value) {
// 		temp[key] = value;
// 	}

// 	return temp;

// };

// var lunch = {
//     sandwich: 'turkey',
//     drink: 'soda',
//     chips: true
//   };
  
//   // Add to the end of the object
// //   var lunchWithDessert = addToObject(lunch, 'dessert', 'cookie');
// //   console.log(lunchWithDessert);
  
//   // Add between sandwich and drink
// //   var lunchWithTopping = addToObject(lunch, 'topping', 'tomato', 1);
  
//   // Immutable copy of lunch
//   var lunchClone = addToObject(lunch);

var arr = ['apple', 'macbook', 'android', 'linux'];
console.log(arr.length);











