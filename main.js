console.log("HELLO, WORLD!");
//Question2//
var personName = "SALMA";
console.log("Hello ".concat(personName, ",would you like to learn some python today?"));
//Question3//
var myname = "SALMA";
console.log("Lowercase:", myname.toLowerCase());
console.log("Uppercase:", myname.toUpperCase());
console.log(myname.charAt(0).toUpperCase() +
    myname.slice(1).toLowerCase());
//Question4//
console.log('Albert Einstein once said,"A person who never made a mistake never tried anything new"');
//Question5//
var famous_person = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
var massage = "".concat(famous_person, " once said, \"").concat(quote, "\"");
//Question6//
var namewithwhitespace = "\t\n Salma \t\n";
console.log(myname);
console.log(myname.trim());
//Question7//
console.log("Addition:", 5 + 3);
console.log("subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 16 / 2);
//Question8//
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Question9//
var favoriteNumber = 5;
var message = "My favorite number is ".concat(favoriteNumber, ".");
console.log(message);
//Question10//
//Salma, 2024-03-05
//This program prints a personal
message;
var myName = "Salma";
console.log("Hello ".concat(myName, ",Would you like to learn some Typescript today?"));
//Question11//
var names = ["salma", "zee", "zeeeshan"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Question12//
var personNames = ["salma", "zee", "zeeshan"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ",would you like to learn some typescript today?"));
}
//Question13//
var motorcycle = ["motorcycle", "car"];
motorcycle.forEach(function (motorcycle) {
    console.log("i would like to own a ".concat(motorcycle, "."));
});
//Question14//
var guestList = ["salma", "irum", "zeeshan"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are invited to dinner. we would be honored to have your presence."));
});
//Question15//
var unableToAttend = "zeeshan";
console.log("".concat(unableToAttend, "cant come to dinner."));
//replace the guest
var newGuest = "AINTA";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
//Question16//
var guest = ["salma", "zee", "zeeshan"];
console.log("Great news ! we found a bigger dinner table.");
guestList.unshift("cma");
guestList.splice(Math.floor(guestList.length / 2), 0, "nagina");
guestList.push("Anita");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are invited to dinner. we would be honored to have your presence."));
});
//Question17//
var guests = ["salma", "zee"];
console.log("I can only invite two people for dinner.");
while (guests.length > 2) {
    var removeedguest = guests.pop();
    if (removeedguest !== undefined) {
        console.log("sorry ".concat(removeedguest, " i cannot invite you to dinner."));
    }
}
for (var _a = 0, guests_1 = guests; _a < guests_1.length; _a++) {
    var guest_1 = guests_1[_a];
    console.log("".concat(guest_1, ",you are still invited to dinner."));
}
guests.splice(0, guests.length);
console.log("guest list after dinner:", guests);
var guestname = ["salma", "zee", "zeeshan"];
console.log("number of people invited to dinner: $ {guests.lenght}");
//Question18//
var landmarks = ["mountains", "rivers", "countries", "cities"];
console.log("list of famous landmarks:");
for (var _b = 0, landmarks_1 = landmarks; _b < landmarks_1.length; _b++) {
    var landmark = landmarks_1[_b];
    console.log(landmark);
}
//Question19//
var guestLists = ["salma", "zee", "zeeshan", "Anita",];
console.log("I am inviting ".concat(guest.length, " people to dinner."));
//Question20//
var colors = ['red', 'green', 'blue'];
console.log(colors[3]);
console.log(colors[1]);
//Question21//
var temperature = 25;
console.log("Is temperature greater than 20? I predict True.");
console.log(temperature > 20);
//Question22//
var friend = ["zee", "ali", "suno"];
console.log(friend[3]);
friend[2] = "suno";
//Question23//
var car = 'subaru';
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
console.log(car.startsWith('sub'));
// 6
console.log("Is car.endsWith('baru')? I predict True.");
console.log(car.endsWith('baru'));
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
var fruit = 'apple';
// Test 1
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
// Test 2
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');
// lower case function
var city = 'New York';
// Test 3
console.log("Is city.toLowerCase() === 'new york'? I predict True.");
console.log(city.toLowerCase() === 'new york');
// Test 4
console.log("Is city.toLowerCase() !== 'los angeles'? I predict True.");
console.log(city.toLowerCase() !== 'los angeles');
// Numericals
var number = 7;
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
var x = 8;
var y = 12;
// Test 10
console.log("Is x > 5 && y < 15? I predict True.");
console.log(x > 5 && y < 15);
// Test 11
console.log("Is x > 10 || y < 10? I predict True.");
console.log(x > 10 || y < 10);
// whether an item is in an array
var colorName = ['red', 'green', 'blue'];
// Test 12
console.log("Is 'green' in colors array? I predict True.");
console.log(colors.includes('green'));
// Test 13
console.log("Is 'yellow' not in colors array? I predict True.");
console.log(!colors.includes('yellow'));
//Question25//
var alien_Color = "green";
if (alien_Color == "green") {
    console.log("you just earned 5 point!");
}
alien_Color = "red";
if (alien_Color == "green") {
    //condition is false
}
//Question26//
alien_Color = "green";
if (alien_Color == "green") {
    console.log("we just earned 5 point for shooting the alien!");
}
else {
    console.log("we just earned 10 points.");
}
alien_Color = "yellow";
if (alien_Color == "green") {
    console.log("you just earned 5 point for shooting the alien!");
}
else {
    console.log("you just earned 10 point.");
}
//Question27//
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
}
else {
    console.log("Player earned 15 points.");
}
