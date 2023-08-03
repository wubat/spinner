// process.stdout.write('hello from spinner2.js... \rheyyy\n');

// const loading = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']

// for(let i = 0; i < loading.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(loading[i])
//   }, i * 200)
// }

const loading = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const spinner = () => {
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < loading.length; i++) {
      setTimeout(() => {
        process.stdout.write(loading[i]);
      }, i * 200 + j * 800);
    }
  }
};

process.stdout.write('hello from spinner2.js... \rheyyy\n');
spinner();