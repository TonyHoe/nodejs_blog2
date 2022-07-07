const express = require("express");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

const route = require("./routes/index");
//--------------------------------------------//
    //HTTP logger
// app.use(morgan('combined'));

    // Static file
app.use(express.static(path.join(__dirname, "public")));

    // middleware xuly dữ liệu từ form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

    // set view engine express-handlebars
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// (__dirname): E:\Nodejs\blog2\src
// console.log('PATH: ', path.join(__dirname, 'resources/views')) //xem đường dẫn

//# Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
