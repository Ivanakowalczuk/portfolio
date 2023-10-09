import dbConnect  from "@/lib/dbConnect";
import { ProjectModel } from "@/models/Proyecto";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest, {params}: any) =>{
    await dbConnect()
    const id: Number = params.id
    try{
      const result = await ProjectModel.findById(id)
      return NextResponse.json({data: result}, {status:200})
    }catch(error){
        return NextResponse.json({data:null}, {status:500})
    }
}

export const DELETE = async(req: NextRequest, {params}:any) =>{
    await dbConnect()
    const id: Number = params.id
    try{
      const result = await ProjectModel.findByIdAndDelete(id)
      if(!result){
        return NextResponse.json({message: `El proyecto con id ${id} no fue encontrado`}, {status: 404})
      }
      return NextResponse.json({data: result}, {status:200})
    }catch(error){
        return NextResponse.json({data:null}, {status:500})
    }
}

export const PUT = async(req: NextRequest, {params}:any) =>{
    await dbConnect()
    const id: Number = params.id
    const body = await req.json()
    try{
      const result = await ProjectModel.findByIdAndUpdate(id, {$set:{...body}}, {new:true})
      if(!result){
        return NextResponse.json({message: `El proyecto con id ${id} no fue encontrado`}, {status: 404})
      }
      return NextResponse.json({data: result}, {status:200})
    }catch(error){
        return NextResponse.json({data:null}, {status:500})
    }
}