// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function writeCards(name, occ){
    const list = []
    for (let i = 0; i < name.length; i++){
       list[i] = `Thank you, ${name[i]}, for the wonderful ${occ} gift!`
    }
    return list
}

function countDown(number) {
    while (number >= 0){
        console.log(number);
        number--;
    }
}

writeCards()
countDown()