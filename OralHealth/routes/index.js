const express   = require("express");
const router    = express.Router();

const users      = require("./users");

router.use("/users",users);

router.get("/",(req,res)=>{
    console.log("this is /");
    res.send("this is home page /");
});

module.exports = router;
