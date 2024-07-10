import { Schema, model, Types} from "mongoose";


// User education model

const educationModel = new Schema({
        schoolName: { type: String },
        location: { type: String },
        program: { type: String },
        qualificaion: { type: String },
        grade: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        user:{type:Types.ObjectId, ref:'User'}
})

export const Education = model("Education", educationModel)

