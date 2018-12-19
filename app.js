const cheerio = require('cheerio')
const fs = require('fs')

let $ = cheerio.load(fs.readFileSync('./index.html'))

console.log($('#lista .primero').text())
console.log($('ul .tercero').attr('class'))
console.log($('#lista').children().length)
console.log($('.tercero').parent().attr('id'))
console.log($('.cuarto').siblings().length)
console.log($('.segundo').next().text())