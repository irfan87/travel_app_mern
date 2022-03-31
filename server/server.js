const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT = 8080 || process.env.PORT;

// mongoose connection
mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log("MongoDB Connected");
	})
	.catch((err) => console.log(err));

app.listen(PORT, (req, res) => {
	console.log(`Backend server is running on port ${PORT}`);
});
