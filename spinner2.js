const spinnerChars = ['|', '/', '-', '\\', '|'];
let delay = 100;

for (let i = 0; i < spinnerChars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerChars[i]}   `);
  }, delay);
  delay += 200;
}