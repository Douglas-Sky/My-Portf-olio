import Joi from "joi"

export const educationSchema = Joi.object ( {
    schoolName: Joi.string().required(),
    location: Joi.string().required(),
    qualificaion:Joi.string().email().required(),
    grade:Joi.string(),
    startDate:Joi.string().required(),
    endDate:Joi.string().required(),
})






