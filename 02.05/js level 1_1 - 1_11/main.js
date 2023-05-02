// ! ++++++++++ level 1_1 ++++++++++

console.log("level 1_1");

let firstName = "Niklas";
let lastName = "Rulec";
console.log(firstName.length);
console.log(lastName.length);
let fullName = firstName + lastName;
console.log(fullName.length);

// ! ++++++++++ level 1_2 ++++++++++

console.log("level 1_2");

const txt =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

// ! ++++++++++ level 1_3 ++++++++++

console.log("level 1_3");

let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

// ! ++++++++++ level 1_4 ++++++++++
document.write("level 1_4 <br>");
document.write("---------- <br>");

const txt3 = "Susi is going to codingschool";

let var1 = txt3.slice(0, 4);
document.write(var1 + "<br>");
let var2 = txt3.slice(5, 7);
document.write(var2 + "<br>");
let var3 = txt3.slice(5, 17) + txt3.slice(23, 29);
document.write(var3 + "<br>");
let var4 = txt3.slice(23, 29);
document.write(var4 + "<br>");
let var5 = txt3.slice(0, 7) + " " + txt3.slice(23, 29);
document.write(var5 + "<br>");

document.write("---------- <br>");

// ! ++++++++++ level 1_7 ++++++++++

document.write("level 1_7 <br>");
document.write("---------- <br>");

const text = "Sam is good at codingschool";

let var6 = text.replace("good at codingschool", "bad at school");
document.write(var6 + "<br>");
let var7 = text.replace(
  "Sam is good at codingschool",
  "Susi is good at school"
);
document.write(var7 + "<br>");
let var8 = text.replace("codingschool", "tennis");
document.write(var8 + "<br>");

document.write("---------- <br>");

// ! ++++++++++ level 1_8 ++++++++++

document.write("level 1_8 <br>");
document.write("---------- <br>");

const text2 = "Sam is going to codingschool";

let var9 = text2.slice(0, 15) + " " + text2.slice(22, 29);
let var10 = var9.toUpperCase();
document.write(var10 + "<br>");
let var11 = text2.replace("to codingschool", "at school");
let var12 = var11.toLowerCase();
document.write(var12 + "<br>");
let var13 = var10.slice(4, 15);
let var14 = var13.toLowerCase();
let var15 = var10.slice(0, 3);
let var16 = var10.slice(16, 22);
document.write(var15 + " " + var14 + " " + var16 + "<br>");
let var17 = var10.slice(4, 15);
let var18 = var17.toUpperCase();
let var19 = var10.slice(0, 3);
let var20 = var19.toLowerCase();
let var21 = var10.slice(16, 22);
let var22 = var21.toLowerCase();
document.write(var20 + " " + var18 + " " + var22 + "<br>");

document.write("---------- <br>");

// ! ++++++++++ level 1_9 ++++++++++

document.write("level 1_9 <br>");
document.write("---------- <br>");

const text4 = "Sam is going to codingschool";
const text5 = "Susi";
const text6 = " and ";
const text7 = " to the movie theater";

let text8 = text4.slice(0, 16) + text4.slice(22, 28);
document.write(text8.concat(text6, text7) + "<br>");
let text9 = text4.slice(0, 12);
document.write(text9.concat(text7) + "<br>");
let text10 = text5.concat(text6);
let text11 = text4.slice(0, 4);
let text12 = text4.slice(22, 28);
let text13 = text10 + text11 + "are going to " + text12;
document.write(text13 + "<br>");
let text14 = text13.slice(0, 25);
document.write(text14 + " gym" + text6 + text7 + "<br>");
let text15 = text4.slice(3, 16);
document.write(text5.concat(text15, text12, text6, text7) + "<br>");

document.write("---------- <br>");

// ! ++++++++++ level 1_11 ++++++++++

document.write("level 1_11 <br>");
document.write("---------- <br>");

let x = "Hello ";
let y = "World<br>";
let z = x + y;
document.write(z);
let n = x + " " + y;
document.write(n);
let m = x + " " + "World";
document.write(m);

let meinString = "Ich bin Erster.";
meinString += " Ich komme auf Platz zwei";
console.log(meinString);
