import { Schema, model, Types } from "mongoose";


// User achievement model

const achievementModel = new Schema({
    awards: { type: String },
    description: { type: String },
    image: { type: String },
    date: { type: String },
    nameOfInstitution: { type: String },

    user: { type: Types.ObjectId, ref: 'User' }
})

export const Achievement = model("Education", achievementModel)

