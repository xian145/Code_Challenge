const campusController = require('../lib/controllers/campusController')

describe("Test para campusController", () => {
    test("1. Obtain list of students", () => {
        const students = campusController.getStudents();
        expect(students).toHaveLength(51);
    });
});