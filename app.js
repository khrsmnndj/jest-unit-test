const express = require("express");
const app = express();

app.get("/", (req, res) => {
	return res.json({data: "good test!"});
})

app.listen(3000);

module.exports = app;