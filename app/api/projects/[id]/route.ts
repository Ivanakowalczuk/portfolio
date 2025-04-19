import dbConnect  from "@/lib/dbConnect";
import { ProjectModel } from "@/models/Proyecto";
import { NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: { id: string } }) {
    await dbConnect();

    const { id } = params;

    try {
        const project = await ProjectModel.findById(id);

        if (!project) {
            return NextResponse.json({ success: false, message: "Proyecto no encontrado" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: project }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Error al obtener el proyecto" }, { status: 500 });
    }
}

