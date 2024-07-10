import { Schema, model, Types} from "mongoose";


// User profile model

const userModel = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    otherName: { type: String },
    email: { type: String },
    password: { type: String },
    userName: { type: String, unique: true },
    termsAndConditions: { type: String },
    user:{type:Types.ObjectId, ref:'User'}
});

export const User =model("User", userModel)