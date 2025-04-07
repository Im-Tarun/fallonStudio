import Feedback from "../modles/feedback.model.js"

export const getFeedback = async(req, res) => {
  try {
    const feedbacks = await Feedback.find({})
    res.status(200).json({success:true, data: feedbacks})
  } catch (error) {
    console.log("server error ", error.message);
        res.status(404).json({success: false, message: "feedbacks not found"})
  }
}

export const addFeedback = async (req, res) => {
    const feedback = req.body
    if(!feedback.name || !feedback.email || !feedback.message){
        return res.status(400).json({success: false, message: "Please enter all the details"})
    }
    try {
        const newFeedback = new Feedback(feedback)
        await newFeedback.save()
        res.status(201).json({success:true, data : newFeedback})
    } catch (error) {
        console.log("server error", error.message);
        res.status(500).json({success: false, message: "server error"})
    }
}
