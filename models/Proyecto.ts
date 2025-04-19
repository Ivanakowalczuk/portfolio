import mongoose, { Schema } from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        _id: { type: Schema.Types.ObjectId, auto: true }, 
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

       imagenDestacada:{
        type: String,
        required:[true, "Por favor complete este campo"]
       },

       imagenes:{
        type: [],
        required:[true,"Por favor complete este campo" ]
       }

    },
    {
        timestamps: true,
        versionKey: false,
    })

export const ProjectModel = mongoose?.models?.Proyecto || mongoose.model("Proyecto", projectSchema)