// equality

test("test equality of value", () => {
	expect(3*3).toBe(9);
	expect(4+9).not.toBe(10);
})

// truthty-falsy

test("test of truth value", () => {
	expect(2).toBeTruthy();
	expect("").toBeFalsy();
	expect(null).toBeNull();

	// null = null -> toBeNull()
	// empty string, NaN, 0 = false -> toBeFalsy()
	// else true -> toBeTruthy()
})

// number matcher

test("test of number comparison", () => {
	const num1 = 100;
	const num2 = -20;
	const num3 = 0;

	expect(num1).toBeLessThan(200);
	expect(num2).toBeGreaterThan(-40);
	expect(num3).toBeGreaterThanOrEqual(num2);
	expect(num3).toBeLessThanOrEqual(0);
})

// string matcher

test("test of string matcher", () => {
	const number = "1234";
	const sentence = "Have a nice day.";

	expect(sentence).toMatch(/day/);
	expect(number).not.toMatch(/nice/);
})

