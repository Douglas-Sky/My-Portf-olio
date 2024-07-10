import { Schema, model, Types} from "mongoose";


// User project model

const projectModel = new Schema({
    projectName: { type: String },
    description: { type: String },
    contributors: { type: String },
    skill: { type: String },
    link: { type: String },
    nameOfInstitution: { type: String },
    startDate: { type: String },
    endDate: { type: String },
})
export const Project = model("Project", projectModel)

