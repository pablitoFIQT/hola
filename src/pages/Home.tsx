import React from 'react';
import { BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Estudiantes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
              Prepárate para tu futuro académico
            </h1>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Bienvenidos a nuestra Academia</h2>
        <p className="text-lg">
          Nuestra misión es preparar a los estudiantes para alcanzar el éxito en sus exámenes de admisión universitaria y fortalecer sus bases académicas.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Programas Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Preuniversitario Intensivo</h3>
            <p>Preparación completa para exámenes de admisión universitaria.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reforzamiento Escolar</h3>
            <p>Apoyo académico para estudiantes de primaria y secundaria.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cursos de Verano</h3>
            <p>Programas intensivos durante las vacaciones escolares.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;