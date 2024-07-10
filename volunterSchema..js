import Joi from "joi";

export const volunteeringModel = Joi.object({
    organization: Joi.string().required(),
    description: Joi.string().required(),
    skills: Joi.string(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    confirmedPassword: Joi.string().ref('password'),
    role: Joi.string().required(),
    responsibility: Joi.string(),
    location: Joi.string(),
    projectName: Joi.string()
});
