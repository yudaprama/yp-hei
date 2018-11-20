import {Question5, Question6, Question7, Question8} from ".";

// Question5
console.log("Question5:", JSON.stringify(Question5(5)));

// Question6
console.log("Question6:", JSON.stringify(Question6(3)));

// Question7
const q7 = new Question7(10);
console.log("Question7 data:", JSON.stringify(q7.data));
console.log("Question7 sms:", JSON.stringify(q7.getSMS([1,2,3,4,5,6,7,8,9])));
console.log("Question7 room:", JSON.stringify(q7.getRooms("j")));

// Question8
let clothesShouldTrue = [];
clothesShouldTrue[0] = ["JakartaJS"];
clothesShouldTrue[1] = ["AWSome Day", "Elixir"];
clothesShouldTrue[2] = ["JVM User Group"];
clothesShouldTrue[3] = ["GoJakarta", "Elixir"];
console.log("Question8 should false:", Question8(clothesShouldTrue));

let clothesShouldFalse = [];
clothesShouldFalse[0] = ["JakartaJS", "AWSome Day"];
clothesShouldFalse[1] = ["AWSome Day", "Elixir"];
clothesShouldFalse[2] = ["Elixir"];
clothesShouldFalse[3] = ["JakartaJS", "Elixir"];
console.log("Question8 should false:", Question8(clothesShouldFalse));