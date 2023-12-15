// app.js
// require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

app.use(cors());

app.use("/public", express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const PORT = process.env.PORT;
// const PORT = 3001

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  srno: { type: Number, required: true, unique: true },
  vecno: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  eventsattained: [
    {
      eventcategory: String,
      eventname: String,
      date: mongoose.Schema.Types.Date,
      hoursalloted: mongoose.Schema.Types.Mixed,
    },
  ],
});

const VolunteerModel = mongoose.model("Volunteer", volunteerSchema);

// Serve the built React app
app.use(express.static(path.join(__dirname, "build")));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/get-volunteer", async (req, res) => {
  const { srno } = req.body;
  try {
    // Fetch volunteer data based on srno from MongoDB
    const volunteerData = await VolunteerModel.findOne({ srno: srno });
    // console.log("Volunteer Data:", volunteerData); // Add this line

    if (!volunteerData) {
      console.log("Volunteer not found");
      res.json({
        volunteerData: null,
        message: "Volunteer not found",
      });
    } else {
      console.log("Volunteer data retrieved:", volunteerData); // Add this debug line
      // Pass the data to the template
      res.json({
        volunteerData,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
