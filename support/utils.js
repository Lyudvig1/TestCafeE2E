const faker = require("@faker-js/faker").faker;

let name = faker.name.firstName();
let last = faker.name.lastName();
let mail = faker.internet.email();
let pass = faker.internet.password();
let comp = faker.company.name();
let city = faker.address.city();
let address = faker.address.streetName();
let zip = faker.address.zipCode();
let phone = faker.phone.number();

module.exports = {
  genderIndex: Math.floor(Math.random() * (2 - 1) + 1),
  firstName: name,
  lastName: last,
  email: mail,
  paswword: pass,
  company: comp,
  city: city,
  address: address,
  zipCode: zip,
  phoneNumber: phone,

  randomIndex: function (get) {
    let num = Math.floor(Math.random() * (get - 1) + 1);
    return num;
  },

  randomIndexProduct: function (ind) {
    let num = Math.floor(Math.random() * ind);
    return num;
  },
};
