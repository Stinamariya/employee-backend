const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "empNO":String,
        "dep":String
    }
)

let employeemodel=mongoose.model("employee",schema);
module.exports={employeemodel}