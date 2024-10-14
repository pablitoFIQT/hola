import React from 'react';
import { Calendar } from 'lucide-react';

const Inscriptions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Inscripciones</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Proceso de Inscripción</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Completa el formulario de pre-inscripción en línea o visita nuestra oficina.</li>
          <li>Realiza el pago de la matrícula y primera mensualidad.</li>
          <li>Presenta los documentos requeridos (DNI, certificado de estudios, foto).</li>
          <li>Asiste a la charla de orientación y recibe tu horario de clases.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Fechas Importantes</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 mr-2 text-blue-600" />
            <h3 className="text-xl font-semibold">Calendario Académico</h3>
          </div>
          <ul className="space-y-2">
            <li><strong>Inicio de clases Ciclo Regular:</strong> 15 de marzo</li>
            <li><strong>Inicio de clases Ciclo Intensivo:</strong> 1 de junio</li>
            <li><strong>Inicio de Programa de Reforzamiento:</strong> 1 de abril</li>
            <li><strong>Examen de Simulacro Nacional:</strong> 30 de julio</li>
            <li><strong>Cierre de inscripciones Ciclo Regular:</strong> 10 de marzo</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Formulario de Pre-inscripción</h2>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre completo</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
          </div>
          <div className="mb-4">
            <label htmlFor="program" className="block text-sm font-medium text-gray-700">Programa de interés</label>
            <select id="program" name="program" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required>
              <option value="">Selecciona un programa</option>
              <option value="regular">Ciclo Regular</option>
              <option value="intensivo">Ciclo Intensivo</option>
              <option value="primaria">Reforzamiento Primaria</option>
              <option value="secundaria">Reforzamiento Secundaria</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Enviar Pre-inscripción
          </button>
        </form>
      </section>
    </div>
  );
};

export default Inscriptions;