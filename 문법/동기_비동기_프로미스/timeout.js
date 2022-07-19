function execute() {
  console.log(1)
  setTimeout(() => {
    console.log(2);
  }, 3000)
  console.log(3);
}

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'))
    }
    setTimeout(resolve, seconds * 1000)
  });
}

runInDelay(0.1)
  .then(() => { console.log('1') })
  .catch(console.error)
  .finally(() => { console.log('2') })