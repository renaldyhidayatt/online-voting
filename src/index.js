const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use(cors());

require("./routes/routes.index")(app)

app.listen(PORT, () => {
    console.log("Example app listening on port 5000!");
})