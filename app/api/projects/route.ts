import { NextResponse, NextRequest }  from "next/server"
import { ProjectModel } from "@/models/Proyecto"
import dbConnect from "@/lib/dbConnect"

export const POST =async (req:any, res:any) => {
    await dbConnect()
    try{
      const body = await req.json()
      const newProject = await ProjectModel.create(body)
      return NextResponse.json({data:newProject}, {status:201})

    }catch (error){
      console.log(error)
      return NextResponse.json({data:null}, {status:500})
    }
}

export const GET =async () => {
    await dbConnect()
    try{
      const result = await ProjectModel.find({})
      return NextResponse.json({data:result}, {status:200})
    }catch(error){
      console.log(error)
      return NextResponse.json({data:null}, {status:500})
    }
}