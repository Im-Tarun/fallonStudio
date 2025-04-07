import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    message : {
        type: String,
        required: true
    }})

const Feedback = mongoose.model("feedback", feedbackSchema);
export default Feedback