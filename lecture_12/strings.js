// length 
// string ki size btayega
let name="dsbjhbcdvsyj";
console.log(name.length);

// touppercase
// sabko capital me convert kardega
console.log(name.toUpperCase());

// tolowercase
// sabko lower me convert kardega

let name1="KANISHKA";
console.log(name1.toLowerCase());

// Trim
// space ko trim kardega left and right side both

let g="         aryan       ";
console.log(g.trim());
console.log(g.trim().length);

// includes
// btata hai ki string og string me hai yah nahi

let q="Javascript is not awesome";
console.log(q.includes("no"));

// starts with
// btata hai ki aisa koi word joh string me start ho raha hai

let w="Ashutosh is a boy";
console.log(w.startsWith("Ashuq"));

// endswith
// btata hai ki koi word usse end ho raha hai yah nahi

let e="wejhdw iewudghkuhefd hhi dkhkdeoeo dhoiedilho hhi hdwo";
console.log(e.endsWith("dwo"));

// indexof
// index btayega ki konsa index par word hai 
console.log(e.indexOf("hhi"));

// lastindexOf
// piche se uska index dekhne lagega

console.log(e.lastIndexOf("ilho"));

// slice
// range me jitne elements padhe hai voh return karega
console.log(e.slice(2,19));

//Substring
// range me jitne elements padhe hai voh return karega
console.log(e.substring(1,32));

// replace
// jaha voh word pehle dikha replace kar dega
console.log(e.replace("hhi","hi"));

// replaceall
// jaha poore string me dikhega vaha har jagah kar dega replace
console.log(e.replaceAll("hhi","hi"));

// split
// jiss character se karoge toh split kardenge and voh ek array me stor ho jayega
console.log(e.split(" "));
console.log(e);
