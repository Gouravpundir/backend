const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route = require("./routes/route");

const cors = require('cors');
app.use(cors({origin:https://altius-hospital.vercel.app/}));



app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://gourav-pundir:7HztUn9Bz3zFfxDT@cluster0.tnf1yk0.mongodb.net/gourav-22?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", route);

app.listen(process.env.Port || 4000, function () {
  console.log("Express app is running on port " + (process.env.Port || 4000));
});
