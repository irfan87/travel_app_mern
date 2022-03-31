const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 8080 || process.env.PORT;

app.listen(PORT, (req, res) => {
	console.log(`Backend server is running on port ${PORT}`);
});
