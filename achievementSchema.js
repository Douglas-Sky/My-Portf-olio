import Joi from "joi"

export const achievementSchema = Joi.object ( {
    awards:Joi.string(),
    description:Joi.string(),
    image:Joi.string().uri.optional(),
    loacation:Joi.string(),
    date:Joi.string(),
    nameOfInstitution:Joi.string()
})




