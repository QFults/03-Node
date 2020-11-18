const inquirer = require('inquirer')

const foods = ['hotdog', 'hamburger', 'pizza', 'sandwich', 'doughnut', 'bacon']

const chosen = foods[Math.floor(Math.random() * foods.length)]
let blanks = '_ '.repeat(chosen.length)
let guesses = 10

console.log(blanks)

const round = () => {
  inquirer.prompt({
    type: 'input',
    name: 'letter',
    message: 'Choose a letter (a-z)',
    validate (letter) {
      if (letter.length === 1 && letter.match(/^[a-z]+$/)) {
        return true
      } else {
        return 'Please choose one valid letter'
      }
    }
  })
    .then(({ letter }) => {
      let correct = false
      let blanksArr = blanks.split(' ')
      chosen.split('').forEach((char, i) => {
        if (letter === char) {
          correct = true
          blanksArr[i] = letter
        }
      })

      blanks = blanksArr.join(' ')

      if (correct) {
        console.log('Correct Guess!')

        if (blanks.indexOf('_') === -1) {
          console.log(`You won, congrats! The word was | ${chosen} |`)
          process.exit()
        }

      } else {
        guesses--
        console.log(`Incorrect Guess! ${guesses} guesses left`)

        if (guesses < 1) {
          console.log(`Game over! The word was | ${chosen} |`)
          process.exit()
        }
      }


      console.log(blanks)
      round()
    })
    .catch(err => console.log(err))
}

round()