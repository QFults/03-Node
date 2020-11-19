
// function User (name, email, phone, address) {
//   this.name = name
//   this.email = email
//   this.phone = phone
//   this.address = address
//   this.printInfo = function () {
//     console.log(`
//       ${this.name}
//       ${this.email}
//       ${this.phone}
//       ${this.address}
//     `)
//   }
// }

// function Admin (name, email, phone, address) {
//   User.call(this, name, email, phone, address)
//   this.isAdmin = true
// }

// let admin = new Admin('John Doe', 'johndoe@gmail.com', 1234567890, '123 Main St')
// console.log(admin)


// let user = new User('John Doe', 'johndoe@gmail.com', 1234567890, '123 Main St')

// user.printInfo()

// const User = (name, email, phone, address) => ({ name, email, phone, address })

// let user = User('John Doe', 'johndoe@gmail.com', 1234567890, '123 Main St')
// let user2 = User('Jane Doe', 'janedoe@gmail.com', 0987654321, '321 South St')

// console.log(user)

// class User {
//   constructor (name, email, phone, address) {
//     this.name = name
//     this.email = email
//     this.phone = phone
//     this.address = address
//   }
// }

// class Admin extends User {
//   constructor (name, email, phone, address) {
//     super(name, email, phone, address)
//     this.isAdmin = true
//   }
// }

// let admin = new Admin('John Doe', 'johndoe@gmail.com', 1234567890, '123 Main St')
// console.log(admin)

// let user = new User('John Doe', 'johndoe@gmail.com', 1234567890, '123 Main St')

// console.log(user)
