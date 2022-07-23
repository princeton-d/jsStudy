// function execute() {
//   console.log(1)
//   setTimeout(() => {
//     console.log(2);
//   }, 3000)
//   console.log(3);
// }

// execute()

// function runInDelay(seconds) {
//   return new Promise((resolve, reject) => {
//     if (!seconds || seconds < 0) {
//       reject(new Error('seconds가 0보다 작음'))
//     }
//     setTimeout(resolve, seconds * 1000)
//   });
// }

// runInDelay(0.1)
//   .then(() => { console.log('1') })
//   .catch(console.error)
//   .finally(() => { console.log('2') })

// function x() {
//   for (let i = 0; i < 10000000000; i++) {

//   }
//   return 1;
// }
// function y() {
//   return x() + 1
// }
// function z() {
//   return y() + 1
// }

// const result = z();
// console.log(result)

// function x() {
//   return Promise.resolve(1);
// }
// function y(value) {
//   return Promise.resolve(value + 2);
// }

// x()
//   .then(xValue => y(xValue))
//   .then(yValue => { console.log(yValue) })

function fetchEgg(치킨) {
  return Promise.resolve(`${치킨} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`)
}

function getChicken() {
  return Promise.resolve(`🐥 => 🐓`)
}
async function makeFriedEgg() {
  const chicken = await getChicken();
  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);
  const va = friedEgg;
  return va;
}
console.log(makeFriedEgg())

// async function makeFriedEgg() {
//   const chicken = await getChicken();
//   const egg = await fetchEgg(chicken);
//   const friedEgg = await fryEgg(egg);
//   return console.log(friedEgg);
// }


// async function 잠온다() {
//   const 치킨 = await getChicken();
//   const 달걀 = await fetchEgg(치킨);
//   const 후라이 = await fryEgg(달걀);
//   return 후라이;
// }

// console.log(잠온다())