const Reader = require('../utils/Reader')

class campusController{

    static getStudents(){
        const students = Reader.readJsonFile('campus.json')
        return students
    }

}

module.exports = campusController