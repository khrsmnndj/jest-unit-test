// equality

test("test equality of value", () => {
	expect(3*3).toBe(9);
	expect(4+9).not.toBe(10);
})

// truthty
test("test of truth value", () => {
	expect(2).toBeTruthy();
	expect("").toBeFalsy();
	expect(null).toBeNull();

	// null = null -> toBeNull()
	// empty string, NaN, 0 = false -> toBeFalsy()
	// else true -> toBeTruthy()
})

