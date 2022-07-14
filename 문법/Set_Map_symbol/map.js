function a(event) {
  console.log(event)
}

// Map
const map = new Map([
  [1, 'one'],
  [2, 'two'],
])
a(map.size)
a(map.has(1))
a(map.has('one')) // map은 has를 key로만 확인할 수 있다.
map.forEach((value, key) => console.log(key, value))
a(map.keys())
a(map.values())
a(map.entries())
map.set(3, 'three')
a(map)
map.delete(3)
a(map)
map.clear()
a(map)