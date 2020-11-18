
function User (name, email, phone, address) {
  this.name = name
  this.email = email
  this.phone = phone
  this.address = address
  this.printInfo = function () {
    console.log(`
      ${this.name}
      ${this.email}
      ${this.phone}
      ${this.address}
    `)
  }
}

let user = new User('John Doe', 'johndoe@gmail.com', 1234567890, '123 Main St')

user.printInfo()


