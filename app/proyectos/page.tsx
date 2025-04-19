'use client';

import React, { FC, useEffect, useState } from 'react';
import GrillaProyectos from '@/components/grillaProyectos/GrillaProyectos';
import { IProyecto } from '@/interface';

const Proyectos: FC = () => {
  const [projects, setProjects] = useState<IProyecto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Error al obtener los proyectos");

        const data = await res.json();
        setProjects(data.projects);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Cargando proyectos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <GrillaProyectos proyectos={projects} />
    </div>
  );
};

export default Proyectos;
