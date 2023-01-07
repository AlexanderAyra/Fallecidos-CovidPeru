const People = require('../model/people.model')
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError')




const createPeople = async (peopleBody) => {
  return People.create(peopleBody)
}



module.exports = {
  createPeople
}