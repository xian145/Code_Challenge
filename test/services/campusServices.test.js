const campusServices = require('../../lib/services/campusServices')

describe("Test para campusServices", () => {
    test("1. Obtain emails of students with certification", () => {
        const students = [   {
            "id": "6264d5d81872b70bb0c171a6",
            "name": "Monroe",
            "email": "Beulah@visualpartnership.xyz",
            "credits": 329,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 8,
            "haveCertification": true
        },
        {
            "id": "6264d5d85659057b4331973b",
            "name": "Chase",
            "email": "Moses@visualpartnership.xyz",
            "credits": 769,
            "enrollments": [
                "Visual Thinking Avanzado",
                "Visual Thinking Intermedio"
            ],
            "previousCourses": 3,
            "haveCertification": false
        }];
        const emailWithCertification = campusServices.getStudentsEmailsByCertification(students)
        expect(emailWithCertification[0]).toMatch(/Beulah@visualpartnership.xyz/);
    });

    test('2. obtain student name by credits > 500', () => {
        const students = [   {
            "id": "6264d5d81872b70bb0c171a6",
            "name": "Monroe",
            "email": "Beulah@visualpartnership.xyz",
            "credits": 329,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 8,
            "haveCertification": true
        },
        {
            "id": "6264d5d85659057b4331973b",
            "name": "Chase",
            "email": "Moses@visualpartnership.xyz",
            "credits": 769,
            "enrollments": [
                "Visual Thinking Avanzado",
                "Visual Thinking Intermedio"
            ],
            "previousCourses": 3,
            "haveCertification": false
        }];
        const creditsGreaterThan500 = campusServices.getStudentsByCredits(students)
        expect(creditsGreaterThan500[0]).toMatch(/Chase/);
    })

});