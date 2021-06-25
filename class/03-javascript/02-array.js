const classmates = ['철수', '영희', '훈이']
// undefined
classmates.length
// 3
const ages = [8, 9, 10]
// undefined
classmates.push('맹구')
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.pop()
// "맹구"
classmates
// (3) ['철수', '영희', '훈이']
classmates.includes('철수')
// true
classmates.includes('맹구')
// false