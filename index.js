const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;
//routes
const authRouter = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const blogRoute = require("./routes/blogRoute");
const categoryRoute = require("./routes/categoryRoute");
const blogCatRoute = require("./routes/blogCatRoute");
const brandRouter = require("./routes/brandRoute");
const couponRouter = require("./routes/couponRoute");
const bodyParser = require("body-parser");
const { notFoundError, errorhandler } = require("./middlewares/errorHandler");
const cookieParser = require('cookie-parser');
const morgan = require("morgan");

dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRoute);
app.use("/api/blog", blogRoute);
app.use("/api/category", categoryRoute);
app.use("/api/blogcategory", blogCatRoute);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);

app.use(notFoundError);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`Server is runnig on Port  ${port}`);
});