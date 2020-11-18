const inquirer = require('inquirer')

const foods = ['hotdog', 'hamburger', 'pizza', 'sandwich', 'doughnut', 'bacon']

const chosen = foods[Math.floor(Math.random() * foods.length)]
const blanks = '_ '.repeat(chosen.length)

console.log(chosen, blanks)

inquirer.prompt({
  type: 'input',
  name: 'letter',
  message: 'Choose a letter (a-z)'
})
  .then(({ letter }) => {
    chosen.split('').forEach((char, i) => {
      if (letter === char) {
        console.log('correct')
      }
    })
  })
  .catch(err => console.log(err))