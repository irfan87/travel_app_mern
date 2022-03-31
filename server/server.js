const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const pinRoute = require("./routes/pinsRoute");
const userRoute = require("./routes/usersRoute");

const app = express();

dotenv.config();

app.use(express.json());

const PORT = 8080 || process.env.PORT;

// mongoose connection
mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log("MongoDB Connected");
	})
	.catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(PORT, (req, res) => {
	console.log(`Backend server is running on port ${PORT}`);
});
