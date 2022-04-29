class campusServices{

    static getStudentsEmailsByCertification(students){
        const studentsByCertification = students.filter((student) => student.haveCertification == true)
        const studentsEmails = studentsByCertification.map((student) => student.email)
        return studentsEmails;
    }

}

module.exports = campusServices