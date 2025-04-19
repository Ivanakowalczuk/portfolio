import { NextResponse, NextRequest }  from "next/server"
import { ProjectModel } from "@/models/Proyecto"
import dbConnect from "@/lib/dbConnect"

export const POST =async (req:NextRequest, res:NextResponse) => {
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

export async function GET() {
  try {
      await dbConnect();
      const projects = await ProjectModel.find({});
      return NextResponse.json({ projects });
  } catch (error) {
      console.error("Error al obtener proyectos:", error);
      return NextResponse.json({ error: "Error al obtener proyectos" }, { status: 500 });
  }
}