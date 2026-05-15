const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("server is running");
});

app.use("/payment", paymentRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});


// Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});