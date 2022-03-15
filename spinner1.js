// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 1000);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 3000);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 5000);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 7000);

let timer = 100;
for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    process.stdout.write("\r|   ");
  }, (timer += 200));
  setTimeout(() => {
    process.stdout.write("\r/   ");
  }, (timer += 200));
  setTimeout(() => {
    process.stdout.write("\r-   ");
  }, (timer += 200));
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write("\r\\   ");
  }, (timer += 200));
}
setTimeout(() => {
  process.stdout.write("\r|   ");
}, (timer += 200));
setTimeout(() => {
  process.stdout.write("\n");
}, timer);
