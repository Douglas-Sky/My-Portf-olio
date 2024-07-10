import Joi from "joi"

export const projectSchema = Joi.object ( {
    projectName: Joi.string().required(),
    description: Joi.string().required(),
    responsibility:Joi.string().required(),
    contributors:Joi.string().required(),
    location:Joi.string(),
    startDate:Joi.string().required(),
    endDate:Joi.string().required(),
})









