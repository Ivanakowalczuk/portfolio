import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        _id:{
            type: Number,
            required:[true, "Por favor complete este campo"]
           },

        nombre:{
        type: String,
        required:[true, "Por favor complete este campo"]
       },

       url:{
        type: String,
        required:[true, "Por favor complete este campo"]
       },

       descripción:{
        type: String,
        required:[true, "Por favor complete este campo"]
       },

       repositorio:{
        type: String,
        required:[true, "Por favor complete este campo"]
       },

       imagen:{
        type: String,
        required:[true, "Por favor complete este campo"]
       },

    },
    {
        timestamps: true,
        versionKey: false,
    })

export const ProjectModel = mongoose?.models?.Proyecto || mongoose.model("Proyecto", projectSchema)