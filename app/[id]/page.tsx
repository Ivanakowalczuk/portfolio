// app/projects/[id]/page.tsx
import ProjectCardId from "@/components/cardProjectID/CardProjectID";
import { Types } from "mongoose";
import React from "react";


interface ProjectPageProps {
    params: { id: Types.ObjectId };
}

async function getProject(id: Types.ObjectId) {
    const res = await fetch(`/api/projects/${id}`, {
        next: { revalidate: 10 }, // Revalidar cada 10 segundos
    });

    if (!res.ok) {
        throw new Error("Proyecto no encontrado");
    }

    const { data } = await res.json();
    console.log(data)
    return data;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await getProject(params.id);

    return (
        <div className="container mx-auto mt-8">
            <ProjectCardId name={project.nombre} description={project.descripcion} id={params.id} imageDestacada={project.imagenDestacada} url={project.url} imagenes={project.imagenes}/>
        </div>
    );
}
