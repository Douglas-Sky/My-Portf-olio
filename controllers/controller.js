import { User } from "../models/profileModel.js";
import { userSchema } from "../userschema.js";
 
// creating function for the sign-up
 export const signup =(req, res) => {
    const {error, value} = userSchema.validate(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
 }

