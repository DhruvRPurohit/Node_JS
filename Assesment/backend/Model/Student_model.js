const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/TOPS_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅ Connected to Database Successfully"))
    .catch((err) => console.log("❌ Error => " + err));

const schema = mongoose.Schema;

const StudentSchema = new schema({
    stud_id: Number,
    stud_name: String,
    stud_email: String,
    stud_birthdate: String
}, { collection: "stud_mst" });

const StudentModel = mongoose.model("Student", StudentSchema, "stud_mst");

module.exports = StudentModel;
