class DigitalPal {
  constructor() {
    this.hungry = false
    this.sleepy = false
    this.bored = true
    this.age = 0
    this.outside = false
    this.houseCondition = 100
  }

  feed() {
    if (this.hungry) {
      console.log('That was yummy!')
      this.hungry = false
      this.sleepy = true
    } else {
      console.log('No thanks! I am full')
    }
  }
  sleep() {
    if (this.sleepy) {
      console.log('Zzzzzz')
      this.sleepy = false
      this.bored = true
      this.increaseAge()
    } else {
      console.log('No way! I am not tired')
    }
  }
  play() {
    if (this.bored) {
      console.log('Yay! Let us play!')
      this.bored = false
      this.hungry = true
    } else {
      console.log('Not right now. Later?')
    }
  }
  increaseAge() {
    this.age++
    console.log(`Happy Birthday to me! I am ${this.age} years old!`)
  }
  bark() {
    console.log('Woof! Woof!')
  }
  goOutside() {
    if (this.outside) {
      console.log('Yay! I love the outdoors!')
      this.outside = true
      this.bark()
    } else {
      console.log('We are already outside though...')
    }
  }
  goInside() {
    if (this.outside) {
      console.log('Do we have to? Fine...')
      this.outside = false
    } else {
      console.log('I am already inside')
    }
  }
  meow() {
    console.log('Meow! Meow!')
  }
  destroyFurniture() {
    if (this.houseCondition > 0) {
      this.houseCondition -= 10
      console.log('MUAHAHAHA! TAKE THAT FURNITURE!')
      this.bored = false
      this.sleepy = true
    }
  }
  buyNewFurniture () {
    this.houseCondition += 50
    console.log('Are you sure about that?')
  }
}

const dog = new DigitalPal()

dog.play()

dog.feed()

dog.sleep()