function a(event) {
  console.log(event)
}
// Set
const set = new Set([1, 2, 3])

// a(set)
// a(set.size)
// a(set.has(2))
// a(set.has(6))
// set.forEach(item => a(item))
// set.add(6)
// set.add(6) //set 은 중복이 안된다!!!
// a(set)
// set.delete(6)
// a(set)
// set.clear()
// a(set)

const obj1 = { name: 1, age: 100 }
const obj2 = { name: 2, age: 200 }
const obj3 = { name: 3, age: 300 }
const z = new Set([obj1, obj2, obj3]);
obj1.name = 30;