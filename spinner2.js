// let timer = 100;
// for (let i = 0; i < 2; i++) {
//   setTimeout(() => {
//     process.stdout.write("\r|   ");
//   }, (timer += 200));
//   setTimeout(() => {
//     process.stdout.write("\r/   ");
//   }, (timer += 200));
//   setTimeout(() => {
//     process.stdout.write("\r-   ");
//   }, (timer += 200));
//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write("\r\s\   ");
//   }, (timer += 200));
// }
// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, (timer += 200));
// setTimeout(() => {
//   process.stdout.write("\n");
// }, timer);

let timer = 100;
const Spinnerarray = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\n",
];
for (let i = 0; i < Spinnerarray.length; i++) {
  setTimeout(() => {
    process.stdout.write(Spinnerarray[i]);
  }, timer);
  timer += 200;
}
