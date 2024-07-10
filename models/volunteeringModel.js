import { Schema, model, Types} from "mongoose";


// User voluteering model
const volunteeringModel = new Schema({
    organization: { type: String },
    description: { type: String },
    skills: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    role: { type: String },
    responsibility: { type: String },
    location: { type: String },
    projectName: { type: String }
})

export const Volunteering = model("Voluteering", volunteeringModel)

