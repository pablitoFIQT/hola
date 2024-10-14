import React from 'react';

const Programs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nuestros Programas</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Programas Preuniversitarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Ciclo Regular</h3>
            <p className="mb-2">Duración: 4 meses</p>
            <p className="mb-2">Horario: Lunes a Viernes, 3pm - 7pm</p>
            <p className="font-bold">Costo: S/. 1200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Ciclo Intensivo</h3>
            <p className="mb-2">Duración: 2 meses</p>
            <p className="mb-2">Horario: Lunes a Sábado, 8am - 1pm</p>
            <p className="font-bold">Costo: S/. 800</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Programas de Reforzamiento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Primaria</h3>
            <p className="mb-2">Duración: Trimestral</p>
            <p className="mb-2">Horario: Martes y Jueves, 3pm - 5pm</p>
            <p className="font-bold">Costo: S/. 300 por trimestre</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Secundaria</h3>
            <p className="mb-2">Duración: Trimestral</p>
            <p className="mb-2">Horario: Lunes, Miércoles y Viernes, 4pm - 6pm</p>
            <p className="font-bold">Costo: S/. 450 por trimestre</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Nuestra Metodología</h2>
        <p className="text-lg">
          Nuestra metodología se basa en un enfoque integral que combina clases teóricas, prácticas intensivas y evaluaciones constantes. Utilizamos materiales didácticos actualizados y contamos con un equipo de docentes altamente calificados para garantizar el éxito de nuestros estudiantes.
        </p>
      </section>
    </div>
  );
};

export default Programs;