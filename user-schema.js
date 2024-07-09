import joi, { required } from "joi";

const userSchema = joi.object ( {
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    otherName: joi.string(),
    email:joi.string().email().required(),
    password:joi().min(4).required,
    confirmedPassword:joi.ref('password'),
    lastName:joi().required,
    termsAndConditions: joi.boolean().required
})
