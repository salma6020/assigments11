 console.log("HELLO, WORLD!");

 //Question2//
let personName: string = "SALMA";
console.log(`Hello ${personName},would you like to learn some python today?`);

//Question3//
let myname: string = "SALMA";
console.log("Lowercase:",myname.toLowerCase());
console.log("Uppercase:",myname.toUpperCase());
console.log(myname.charAt(0).toUpperCase()+
myname.slice(1).toLowerCase());

//Question4//
console.log('Albert Einstein once said,"A person who never made a mistake never tried anything new"');

//Question5//
let famous_person: string="Albert Einstein";
let quote: string = "A person who never made a mistake never tried anything new.";
let massage: string =  `${famous_person} once said, "${quote}"`;

//Question6//
let namewithwhitespace: string = "\t\n Salma \t\n";
console.log(myname);
console.log(myname.trim());

//Question7//
console.log("Addition:",5+3);
console.log("subtraction:",10-2);
console.log("Multiplication:",4*2);
console.log("Division:",16 /2);

//Question8//
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//Question9//
let favoriteNumber: number = 5
let message: string = `My favorite number is ${favoriteNumber}.`;
console.log(message);

//Question10//
//Salma, 2024-03-05
//This program prints a personal
message
let myName: string = "Salma";
console.log(`Hello ${myName},Would you like to learn some Typescript today?`);

//Question11//
let names: string[]=["salma","zee", "zeeeshan"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
//Question12//
let personNames: string[] = ["salma", "zee","zeeshan"];
for (let name of names ){
    console.log(`Hello ${name},would you like to learn some typescript today?`);
}

//Question13//
let motorcycle: string[] = ["motorcycle","car"];
motorcycle.forEach(motorcycle => {
    console.log(`i would like to own a ${motorcycle}.`);
});

//Question14//

let guestList: string[] =["salma","irum","zeeshan"];
guestList.forEach(guest => {
    console.log(`Dear ${guest},you are invited to dinner. we would be honored to have your presence.`);
});

//Question15//
let unableToAttend= "zeeshan";
console.log(`${unableToAttend}cant come to dinner.`);
//replace the guest
let newGuest = "AINTA";
guestList[guestList.indexOf(unableToAttend)] = newGuest;

//Question16//
let guest: string[] = ["salma","zee","zeeshan"];
console.log("Great news ! we found a bigger dinner table.");
guestList.unshift("cma");
guestList.splice(Math.floor(guestList.length/ 2),0,"nagina");
guestList.push("Anita");
guestList.forEach(guest =>{ console.log(`Dear ${guest},you are invited to dinner. we would be honored to have your presence.`);
});

//Question17//
let guests: string[] = ["salma","zee"];
console.log("I can only invite two people for dinner.");
while(guests.length > 2){
    const removeedguest: string | undefined = guests.pop();
    if (removeedguest !== undefined){
        console.log(`sorry ${removeedguest} i cannot invite you to dinner.`);
    }
}
for (const guest of guests){
    console.log(`${guest},you are still invited to dinner.`);
}
guests.splice(0, guests.length);
console.log("guest list after dinner:",guests);

let guestname : string[] = ["salma","zee","zeeshan"];
console.log(`number of people invited to dinner: $ {guests.lenght}`);

//Question18//
let landmarks: string[] = [`mountains`,`rivers`,`countries`,`cities` ];
console.log("list of famous landmarks:");
for(const landmark of landmarks){
    console.log(landmark);
}

//Question19//
let guestLists: string[] = ["salma","zee","zeeshan","Anita",];
console.log(`I am inviting ${guest.length} people to dinner.`);

//Question20//
let colors: string[] = ['red', 'green', 'blue'];
console.log(colors[3]);  
console.log(colors[1]);

//Question21//
let temperature = 25;
console.log("Is temperature greater than 20? I predict True.");
console.log(temperature > 20); 

//Question22//
let friend: string[] = ["zee","ali","suno"];
console.log(friend[3]);
friend[2] = "suno";

//Question23//
let car = 'subaru';

// 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

//  2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// 3
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

// 4
console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota');

// 5
console.log("Is car.startsWith('sub')? I predict True.");
console.log(car. startsWith('sub'));

// 6
console.log("Is car.endsWith('baru')? I predict True.");
console.log(car. endsWith('baru'));

// 7
console.log("Is car.includes('ub')? I predict True.");
console.log(car.includes('ub'));

// 8
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

// 9
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

//10
console.log("Is car.toUpperCase() === 'SUBARU'? I predict True.");
console.log(car.toUpperCase() === 'SUBARU');

//Question24//
// equality and inequality with strings
let fruit = 'apple';

// Test 1
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

// Test 2
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');

// lower case function
let city = 'New York';

// Test 3
console.log("Is city.toLowerCase() === 'new york'? I predict True.");
console.log(city.toLowerCase() === 'new york');

// Test 4
console.log("Is city.toLowerCase() !== 'los angeles'? I predict True.");
console.log(city.toLowerCase() !== 'los angeles');

// Numericals
let number = 7;

// Test 5
console.log("Is number == 7? I predict True.");
console.log(number == 7);

// Test 6
console.log("Is number > 5? I predict True.");
console.log(number > 5);

// Test 7
console.log("Is number < 10? I predict True.");
console.log(number < 10);

// Test 8
console.log("Is number >= 7? I predict True.");
console.log(number >= 7);

// Test 9
console.log("Is number <= 7? I predict True.");
console.log(number <= 7);

// using "and" and "or" operators
let x = 8;
let y = 12;

// Test 10
console.log("Is x > 5 && y < 15? I predict True.");
console.log(x > 5 && y < 15);

// Test 11
console.log("Is x > 10 || y < 10? I predict True.");
console.log(x > 10 || y < 10);

// whether an item is in an array
let colorName = ['red', 'green', 'blue'];

// Test 12
console.log("Is 'green' in colors array? I predict True.");
console.log(colors.includes('green'));

// Test 13
console.log("Is 'yellow' not in colors array? I predict True.");
console.log(!colors. includes('yellow'));

//Question25//
let alien_Color = "green";
if (alien_Color == "green") {
    console.log("you just earned 5 point!");
}
alien_Color = "red";
if(alien_Color == "green"){
    //condition is false
}

//Question26//
alien_Color =  "green";
if (alien_Color == "green"){
    console.log("we just earned 5 point for shooting the alien!");
} else{
    console.log("we just earned 10 points.");
}

alien_Color = "yellow";
if(alien_Color == "green") {
    console.log("you just earned 5 point for shooting the alien!");
} else {
    console.log("you just earned 10 point.");
}

//Question27//
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else {
    console.log("Player earned 15 points.");
}



































