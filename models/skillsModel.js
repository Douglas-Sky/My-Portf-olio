import { Schema, model, Types } from "mongoose";

// Skills model
const skillsModel = new Schema({
    name: { type: String },
    levelOfProficiency: { type: String, enum: ['beginner', 'intermediate', 'advanced', 'expert'] },
    user: { type: Types.ObjectId, ref: 'User' }
});

export const Skills = model("Skills", skillsModel);
