"use strict"
const faker = require("faker")

/**
 * returns a random number
 * @param {number} max
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#bootstrap
 */
module.exports = async () => {
  for (let i = 0; i < 30; i++) {
    await strapi.services.property.create({
      title: faker.random.words(9),
      location: faker.address.streetAddress(true),
      description: faker.lorem.sentences(10),
      price: getRandomInt(100) * 1000000,
      price_min: getRandomInt(100) * 1000000,
      price_max: getRandomInt(100) * 1000000,
      bedrooms_count: getRandomInt(10),
      bathrooms_count: getRandomInt(10),
      images: faker.image.city(),
      has_garden: faker.random.boolean(),
      pets_allowed: faker.random.boolean(),
      has_garage: faker.random.boolean(),
      garages_count: getRandomInt(10),
      lot_area: getRandomInt(500),
      floor_area: getRandomInt(300),
      owner_name: faker.name.findName(),
      owner_email: faker.internet.email(),
      owner_phone_number: faker.phone.phoneNumber(),
    })
  }
}
