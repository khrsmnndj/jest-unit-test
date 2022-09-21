const mathOperations = require('./calculator');

describe("calculator test", () => {
	test("sum test", () => {
		const result = mathOperations.sum(2, 3);
		expect(result).toBe(5);
	})

	test("diff test", () => {
		const result = mathOperations.diff(4,1);
		expect(result).toBe(3);
	})

	test("times test", () => {
		const result = mathOperations.times(3,4);
		expect(result).toBe(12);
	})
	test("divide test", () => {
		const result = mathOperations.divide(10, 2);
		expect(result).toBe(5);
	})
})