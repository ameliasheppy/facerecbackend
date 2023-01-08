// const fs = require("fs");
// const { inRange } = require("lodash");

// fs.readFile("./hello.txt", (err, data) => {
//   if (err) {
//     console.log("errrroooorrrr");
//   }
//   console.log("1", data.toString());
// });
// //must use toString to encode the information so that it will properly display
// //utf-8 is pretty standard
// //ascii is the pre-utf-8. do similar things.

// //when we run this, the below fil with run and console before the top one.
// //the below runs the file in sync. the above is async. So it runs second.
// //readFileSync, will pause the execution of our file, make the whole
// //program wait.
// //use readFile so that we don't block the execution.
// const file = fs.readFileSync("./hello.txt");
// console.log("2", file.toString());

// //we can append to our files too
// // fs.appendFile("./hello.txt", "I cant wait until my vacations!", (err) => {
// //   if (err) {
// //     console.log(err);
// //   }
// // });

// //now let's write to a file
// fs.writeFile("bye.txt", "sad to see you go!", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// //now let's do a delete
// fs.unlink("./bye.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("inception!");
// });
