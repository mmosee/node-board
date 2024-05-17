const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// sync() 안에 force: true 이면 'table이 존재 할 경우 삭제, 없으면 건들지 않음. (false가 default값임)'
// Drop and re-sync db 
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });;

// Route
require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});