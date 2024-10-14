import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Enlaces Rápidos</h3>
            <ul>
              <li><Link to="/" className="hover:text-blue-300">Inicio</Link></li>
              <li><Link to="/programas" className="hover:text-blue-300">Programas</Link></li>
              <li><Link to="/inscripciones" className="hover:text-blue-300">Inscripciones</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Facebook /></a>
              <a href="#" className="hover:text-blue-300"><Twitter /></a>
              <a href="#" className="hover:text-blue-300"><Instagram /></a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Información Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-300">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-300">Términos de Uso</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Academia Preuniversitaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;