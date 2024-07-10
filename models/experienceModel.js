import { Schema, model, Types } from "mongoose";


// User education model
const experienceamaodel = new Schema({
    companyName: { type: String },
    role: { type: String },
    responsibility: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    user: { type: Types.ObjectId, ref: 'User' }
})

export const Education = model("Education", experienceamaodel)

