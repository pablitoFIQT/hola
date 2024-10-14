import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('authToken');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <GraduationCap className="mr-2" />
          <span className="text-xl font-bold">Academia Preuniversitaria</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Inicio</Link></li>
            <li><Link to="/programas" className="hover:text-blue-200">Programas</Link></li>
            <li><Link to="/inscripciones" className="hover:text-blue-200">Inscripciones</Link></li>
            {isAuthenticated ? (
              <>
                <li><Link to="/admin" className="hover:text-blue-200">Admin</Link></li>
                <li>
                  <button onClick={handleLogout} className="flex items-center hover:text-blue-200">
                    <LogOut className="mr-1" size={18} />
                    Salir
                  </button>
                </li>
              </>
            ) : (
              <li><Link to="/login" className="hover:text-blue-200">Iniciar sesión</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;