const Reader = require('../utils/Reader')
const campusServices = require('../services/campusServices')

class campusController{

    static getStudents(){
        const students = Reader.readJsonFile('campus.json')
        return students
    }

    static getStudentsEmailBycertification(){
        const students = campusController.getStudents()
        return campusServices.getStudentsEmailsByCertification(students)
    }

}

module.exports = campusController