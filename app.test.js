const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

test("Get main endpoint response", async () => {
	// Send GET request to endpoint in app module
	// route = localhost:port/

	// save the response in a constant
	const response = await request.get('/')
	expect(response.status).toBe(200);
	expect(response.body.data).toBe("good test!");
})
