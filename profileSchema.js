import Joi from "joi"

export const profileSchema = Joi.object ( {
    profilePicture: Joi. String(),
    location:Joi.String(),
    maritalStatus:Joi.String().valid('Single', 'Married' ,'Prefer not say'),
    sex:Joi.stringtring().valid('Male, Female'),
    bio:Joi.string(),
    about:Joi.stringtring(),
    about:Joi.string(),
    dateOfBirth:Joi.string(),
    contact:Joi.string(),
    resume:Joi.string(),
    languages:Joi.string(),
    githubLink:Joi.string(),
    linkedinLink:Joi.string(),
    twitterLink:Joi.string(),
    description:Joi.string(),
    image:Joi.string(),
    date:joi.String(),
    nameOfInstitution:Joi.string()
})

    



