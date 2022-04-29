class campusServices{

    static getStudentsEmailsByCertification(students){
        const studentsByCertification = students.filter((student) => student.haveCertification == true);
        const studentsEmails = studentsByCertification.map((student) => student.email);
        return studentsEmails;
    }

    static getStudentsByCredits(students){
        const studentsWithCredits = students.filter((student) => student.credits > 500);
        return studentsWithCredits.map((student) => student.name);
    }

}

module.exports = campusServices;