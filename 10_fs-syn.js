// fs module (synchronous and asynchronous)

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first)
// console.log(second)

// if file is there then overwrite other wise make a new file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')